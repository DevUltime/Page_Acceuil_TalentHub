from django.urls import path
from .views import ConversationViewSet, MessageViewSet

app_name = "apiMsg"

urlpatterns = [
    path("conversation/", 
    ConversationViewSet.as_view(), 
    name = "conversation-list-create"),
    
    path("message/", 
    MessageViewSet.as_view(), 
    name = "message-list-create"),
    ]
