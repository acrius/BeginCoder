from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from rest_framework.serializers import ModelSerializer
from taggit_serializer.serializers import TaggitSerializer, TagListSerializerField

from posts.models import Post, PostSorting


class PaginatedCourseSerializer:

    def __init__(self, courses, request, per_page):
        paginator = Paginator(courses, per_page)
        page = request.GET.get('page')
        try:
            courses = paginator.page(page)
        except PageNotAnInteger:
            courses = paginator.page(1)
        except EmptyPage:
            courses = paginator.page(paginator.num_pages)
        count = paginator.count

        previous = None if not courses.has_previous() else courses.previous_page_number()
        next = None if not courses.has_next() else courses.next_page_number()
        serializer = PostSerializer(courses, many=True)
        self.data = {'count': count, 'previous': previous,
                     'next': next, 'results': serializer.data}


class PostSerializer(TaggitSerializer, ModelSerializer):
    tags = TagListSerializerField()

    class Meta:
        model = Post
        fields = ['id', 'title', 'date', 'content', 'preview',
                  'views_count', 'tags', 'author', 'useful']

    def create(self, validated_data):
        title = validated_data.get('title')
        date = validated_data.get('date')
        tags = validated_data.get('tags')
        author = self.context.get('user')
        content = validated_data.get('content')
        preview = validated_data.get('preview')
        return Post.objects.create(title=title, date=date, tags=tags, author=author, content=content, preview=preview, views_count=0, useful=0)


class PostSortingSerializer(ModelSerializer):

    class Meta:
        model = PostSorting
        fields = ['title', 'sorting_string']
