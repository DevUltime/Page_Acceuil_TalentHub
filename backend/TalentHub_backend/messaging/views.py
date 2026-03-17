from rest_framework.generics import ListCreateAPIView
from rest_framework.permissions import IsAuthenticated
from django.db.models import Q 
from django.contrib.auth import get_user_model
from .serializers import ConversationSerializer, MessageSerializer
from .models import Message, Conversation

User = get_user_model()

class ConversationViewSet(ListCreateAPIView):
    serializer_class = ConversationSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        return Conversation.objects.filter(Q(first_person=user) | Q(second_person = user))
    
    def perform_create(self, serializer):
        user = self.request.user
        second_person_id = serializer.validated_data.get("second_person_id")
        second_person = User.objects.get(id = second_person_id)
        
        return serializer.save(first_person=user, second_person=second_person)
        
        
class MessageViewSet(ListCreateAPIView):
    serializer_class = MessageSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        return Message.objects.filter(sender = user)
        
    def perform_create(self, serializer):
        user = self.request.user
        return serializer.save(sender = user)