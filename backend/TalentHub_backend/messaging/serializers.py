from rest_framework import serializers 
from django.contrib.auth import get_user_model
from .models import Conversation, Message

User = get_user_model()

class ConversationSerializer(serializers.ModelSerializer):
    first_person = serializers.PrimaryKeyRelatedField(queryset = User.objects.all())
    second_person = serializers.PrimaryKeyRelatedField(queryset = User.objects.all())
    
    class Meta:
        model =  Conversation
        fields =  ["first_person", "second_person"]

class MessageSerializer(serializers.ModelSerializer):
    conversation = serializers.PrimaryKeyRelatedField(queryset=Conversation.objects.all())
    class Meta:
        model = Message
        fields = ["content", "send_at", "sender", "conversation"]