from django.db import models
from django.contrib.auth.models import User 

class Conversation(models.Model):
    first_person = models.ForeignKey(User, on_delete=models.CASCADE, related_name = "conversation_en_tant_que_first")
    second_person = models.ForeignKey(User, on_delete=models.CASCADE, related_name = "Conversation_en_tant_que_second")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    
    def __str__(self):
        return f"{self.first_person.username} {self.second_person.username}"


class Message(models.Model): 
    content = models.TextField()
    send_at = models.DateTimeField(auto_now = True)
    sender = models.ForeignKey(User, on_delete = models.CASCADE, related_name = "message_envoyes")
    conversation = models.ForeignKey(Conversation, on_delete = models.CASCADE)
    
    def __str__(self):
        return f"{self.sender.username}: , {self.content}"
        