from rest_framework import status
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response

from posts.models import Post
from api_v01.serializers import PostSerializer, PaginatedCourseSerializer

POSTS_PER_PAGE = 10

class PostList(ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get(self, request, format=None):
        posts = Post.objects.all().order_by('-date')
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

class PostDetail(RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
