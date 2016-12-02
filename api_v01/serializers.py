from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from rest_framework.serializers import ModelSerializer
from taggit_serializer.serializers import TaggitSerializer, TagListSerializerField

from posts.models import Post

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
                     'next': next, 'courses': serializer.data}

class PostSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title', 'date', 'tags', 'content', 'views_count']

    def create(self, validated_data):
        title = validated_data.get('title')
        date = validated_data.get('date')
        tags = validated_data.get('tags')
        author = self.context.get('user')
        content = validated_data.get('content')
        return Post.objects.create(title=title, date=date, tags=tags, author=author, content=content, views_count=0)

class PostTagsSerializer(TaggitSerializer, ModelSerializer):
    tags = TagListSerializerField()

    class Meta:
        models = Post
