from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns

from api_v01.views import PostList, PostDetail, PostSortingList, get_tags

urlpatterns = [
    url(r'^posts/$', PostList.as_view()),
    url(r'^posts/(?P<pk>[0-9]+)/$', PostDetail.as_view()),
    url(r'^tags/$', get_tags),
    url(r'^sorts/$', PostSortingList.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)
