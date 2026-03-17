from django.db import models
from django.conf import settings 

User = settings.AUTH_USER_MODEL

class Conversation(models.Model):
    first_person = models.ForeignKey(User, on_delete=models.CASCADE, related_name = "conversation_en_tant_que_first")
    second_person = models.ForeignKey(User, on_delete=models.CASCADE, related_name = "Conversation_en_tant_que_second")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    
    def __str__(self):
        return f"{self.first_person.email} {self.second_person.email}"


class Message(models.Model): 
    content = models.TextField()
    send_at = models.DateTimeField(auto_now = True)
    sender = models.ForeignKey(User, on_delete = models.CASCADE, related_name = "message_envoyes")
    conversation = models.ForeignKey(Conversation, on_delete = models.CASCADE)
    
    def __str__(self):
        return f"{self.sender.email}: , {self.content}"
        