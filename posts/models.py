from django.utils import timezone
from django.db import models
from django.contrib.auth.models import User
from taggit.managers import TaggableManager


class Post(models.Model):
    class Meta:
        db_table = 'posts'
        default_related_name = 'posts'

    title = models.CharField(max_length=255, unique=True, default='Title of post.')
    date = models.DateTimeField(default=timezone.now)
    content = models.TextField(null=True, blank=True)
    views_count = models.IntegerField(default=0)
    useful = models.IntegerField(default=0)
    author = models.ForeignKey(User)
    tags = TaggableManager()
