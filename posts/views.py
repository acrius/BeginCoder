from django.shortcuts import render

from posts.models import Post

def post(request, post_id):
    return render(request,'post.html', {'id': post_id})
