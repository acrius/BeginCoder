from django.contrib.admin import ModelAdmin, register

from posts.models import Post, PostSorting

@register(Post)
class PostAdmin(ModelAdmin):
    list_display = ['title',]
    search_fields = ['title',]

@register(PostSorting)
class PostSortingAdmin(ModelAdmin):
    list_display = ['title',]
    search_fields = ['title',]
