from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from django.views.decorators.csrf import csrf_exempt

from posts.views import PostList, PostDetail, PostSortingList, get_tags
from api_v01.views import login

urlpatterns = [
    url(r'^posts/$', PostList.as_view()),
    url(r'^posts/(?P<pk>[0-9]+)/$', PostDetail.as_view()),
    url(r'^posts/filters/$', get_tags),
    url(r'^posts/sortings/$', PostSortingList.as_view()),
    url(r'^accounts/$', login)
]

urlpatterns = format_suffix_patterns(urlpatterns)
