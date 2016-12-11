from django.utils import timezone
from django.db import models
from django.contrib.auth.models import User
from taggit.models import TaggedItemBase, TagBase
from taggit.managers import TaggableManager

class PostTag(TagBase):
    using = models.IntegerField(default=0, null=False)

class TaggedPost(TaggedItemBase):
    content_object = models.ForeignKey('Post')
    tag = models.ForeignKey(PostTag, related_name="%(app_label)s_%(class)s_items")

class Post(models.Model):
    class Meta:
        db_table = 'posts'
        default_related_name = 'posts'

    title = models.CharField(max_length=255, unique=True, default='Title of post.')
    date = models.DateTimeField(default=timezone.now)
    content = models.TextField(null=True, blank=True)
    preview = models.TextField(max_length=1500 , null=True, blank=True)
    views_count = models.IntegerField(default=0)
    useful = models.IntegerField(default=0)
    author = models.ForeignKey(User)
    tags = TaggableManager(through=TaggedPost)

class PostSorting(models.Model):
    class Meta:
        db_table = 'postsortings'
        default_related_name = 'postsortings'

    title = models.CharField(max_length=100, null=False, default='title')
    sorting_string = models.CharField(max_length=100, null=False, default='field')
