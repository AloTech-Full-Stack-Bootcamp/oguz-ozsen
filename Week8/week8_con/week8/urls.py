from django.contrib import admin
from django.urls import path , include
from rest_framework import routers

from main.views import UserViewSet, PostViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'posts', PostViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
]
