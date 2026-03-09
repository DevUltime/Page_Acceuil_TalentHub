from rest_framework.generics import ListCreateAPIView
from rest_framework.permissions import isAuthenticated
from django.contrib.auth.models import User
from .serializers import ConversationSerializer, MessageSerializer
from .models import Message, Conversation

class ConversationViewSet(ListCreateAPIView):
    serializer_class = ConversationSerializer
    permission_classes = [isAuthenticated]
    
    def get_queryset(self):
        user = User.objects.get(id = Self.request.user.id)
        return Conversation.objects.filter(first_person=user or second_person = user)
    
    def perform_create(self, serializer):
        user = User.objects.get(id = Self.request.user.id)
        if first_person = 
        return serializer.save(first_person=user or second_person = user)
        
class MessageViewSet(ListCreateAPIView):
    serializer_class = MessageSerializer
    permission_classes = [isAuthenticated]
    
    def get_queryset(self):
        user = User.objects.get(id = self.request.user.id)
        return Message.objects.filter(sender = user)
        
    def perform_create(self, serializer):
        user = User.objects.get(id = self.request.user.id)
        return serializer.save(sender = user)