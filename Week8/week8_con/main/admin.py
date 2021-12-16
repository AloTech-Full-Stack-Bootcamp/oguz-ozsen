from django.contrib import admin
from main.models import Post , Like , Comment

# Register your models here.
@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ["id", "author", "content", "created_at", "likes_count", "comments_count"]
    list_filter = ["author","created_at"]
    search_fields = ["content", "author__username"]
    autocomplete_fields=["author"]

@admin.register(Like)
class LikeAdmin(admin.ModelAdmin):
    list_display = ["id","user","created_at"]
    list_filter = ["created_at"]
    autocomplete_fields = ["post", "user"]

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ["id","user","created_at"]
    list_filter = ["created_at"]
    search_fields = ["content", "author__username"]
    autocomplete_fields = ["post", "user"]