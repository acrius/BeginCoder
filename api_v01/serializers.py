from rest_framework.serializers import ModelSerializer

from posts.models import Post

class PostSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title', 'date', 'tags', 'content']

    def create(self, validated_data):
        title = validated_data.get('title')
        date = validated_data.get('date')
        tags = validated_data.get('tags')
        author = self.context.get('user')
        content = validated_data.get('content')
        return Post.objects.create(title=title, date=date, tags=tags, author=author, content=content, views_count=0)
