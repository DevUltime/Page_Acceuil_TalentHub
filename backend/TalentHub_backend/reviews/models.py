from django.db import models
from django.conf import settings 
from services.models import Service

User = settings.AUTH_USER_MODEL

class Review(models.Model):
    reviewer = models.ForeignKey(User, on_delete = models.CASCADE)
    service = models.ForeignKey(Service, on_delete = models.CASCADE)
    rating = models.IntegerField(blank = True, default = 0)
    comment = models.TextField(blank = True)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    

