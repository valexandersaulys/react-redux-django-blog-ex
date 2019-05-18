from rest_framework import viewsets, permissions

from posts.models import Post
from posts.serializers import PostSerializer

class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    permission_classes = [
        #permissions.AllowAny,
        permissions.IsAuthenticatedOrReadOnly,
    ]
    queryset = Post.objects.all()
