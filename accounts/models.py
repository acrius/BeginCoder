from django.db import models
from django.contrib.auth.models import User

class VkUser(models.Model):
    user = models.OneToOneField(User)
    domain = models.CharField(max_length=200)
    first_name = models.CharField(max_length=200)
    href = models.TextField()
    vk_user_id = models.IntegerField()
    mid = models.IntegerField()
    last_name = models.CharField(max_length=200)
    nickname = models.CharField(max_length=200)
