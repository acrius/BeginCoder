from django.utils import timezone

from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    class Meta:
        db_table = 'posts'
        default_related_name = 'posts'

    title = models.CharField(max_length=255, unique=True, default='Title of post.')
    date = models.DateTimeField(default=timezone.now)
    tags = models.TextField(max_length=1000, default='#programming')
    content = models.TextField(null=True, blank=True)
    author = models.ForeignKey(User)
