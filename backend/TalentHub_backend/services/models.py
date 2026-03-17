from django.db import models
from users.models import Profil

class Category(models.Model):
    name = models.CharField(max_length = 20)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    
class Service(models.Model):
    owner = models.ForeignKey(Profil, on_delete = models.CASCADE, related_name = "services_publiees")
    category = models.ForeignKey(Category, on_delete = models.CASCADE, related_name = "services")
    title = models.CharField(max_length = 30)
    description = models.TextField()
    price = models.DecimalField(max_digits = 12, decimal_places = 2)
    delivery_time = models.IntegerField(default = 3)
    service_picture = models.ImageField(upload_to = "Files/")
    is_active = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    