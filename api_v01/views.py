from django.db.models import Count
from django.http import JsonResponse
from rest_framework import status
from rest_framework.generics import ListCreateAPIView, ListAPIView, RetrieveAPIView
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response

from posts.models import Post, PostTag, PostSorting
from api_v01.serializers import PostSerializer, PaginatedCourseSerializer, PostSortingSerializer

POSTS_PER_PAGE = 7

class PostList(ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get(self, request):
        oreder_by = request.GET.get('sort') or '-date'
        filter_by = request.GET.get('filter')
        filter_by = filter_by.strip('[]').split(',') if filter_by else None
        posts = Post.objects.all().filter(tags__name__in=filter_by) if filter_by\
                else Post.objects.all().order_by(oreder_by)
        posts_serializer = PaginatedCourseSerializer(posts, request, POSTS_PER_PAGE)
        return Response(posts_serializer.data)

    @permission_classes((IsAdminUser,))
    def post(self, request, format=None):
        user = request.user
        post_serializer = PostSerializer(data=request.data, context={'user': user})
        if post_serializer.is_valid():
            post_serializer.save()
            response = Response(post_serializer.data, status.HTTP_201_CREATED)
        else:
            response = Response(post_serializer.errors, status.HTTP_400_BAD_REQUEST)
        return response

class PostDetail(RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class PostSortingList(ListAPIView):
    queryset = PostSorting.objects.all()
    serializer_class = PostSortingSerializer

def get_tags(request):
    tags = PostTag.objects.extra(where=['"using" > 0',], order_by=['-using',])
    tags = [{'name': tag.name, 'count': tag.using} for tag in tags]
    tags = {
        'results': tags,
        'count': len(tags),
        'next': None,
        'previous': None
    }
    return JsonResponse(tags, safe=False)
