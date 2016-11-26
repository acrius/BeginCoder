from django.contrib.admin import ModelAdmin, register

from posts.models import Post

@register(Post)
class PostAdmin(ModelAdmin):
    list_display = ['title',]
    search_fields = ['title',]
