from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns

from posts.views import post

urlpatterns = [
    url(r'^(?P<post_id>\d+)/$', post),
]

urlpatterns = format_suffix_patterns(urlpatterns)
