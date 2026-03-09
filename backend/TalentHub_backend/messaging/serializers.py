from rest_framework import serializers 
from .models import Conversation, Message

class ConversationSerializer(serializers.ModelSerializer):
    frist_person = PrimaryKeyRelatedField(unique = True, queryset = Conversation.objects.all())
    frist_second = PrimaryKeyRelatedField(unique = True, queryset = Conversation.objects.all())
    
    class Meta:
        model =  Conversation
        fields =  ["frist_person", "second_person"]

class MessageField(serializers.ModelSerializer):
    conversation = PrimaryKeyRelatedField(unique = True, queryset=Conversation.objects.all())
    class Meta:
        model = Message
        fields = ["content", "send_at", "sender", "conversation"]