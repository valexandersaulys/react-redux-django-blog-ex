from django.urls import path
from rest_framework import routers
from posts.api import PostViewSet

router = routers.DefaultRouter()

router.register('posts', PostViewSet, 'posts')

urlpatterns = router.urls
