from django.contrib.auth.models import User
from django.db import models

class Skill(models.Model):
    name = models.CharField(max_length = 20)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    is_approved = models.BooleanField(default = True)
    
    def __str__(self): 
        return self.name

class Profil(models.Model):
    ROLE_CHOICES = (
        ('client', 'Client'),
        ('freelancer', 'Freelancer'),
    )
    user = models.OneToOneField(User, on_delete = models.CASCADE)
    bio = models.TextField(blank = True, null=True)
    skills = models.ManyToManyField(Skill, blank=True)
    profil_picture = models.ImageField(upload_to = "images/", blank = True, null=True)
    rating = models.IntegerField()
    role = models.CharField(max_length = 20 , choices = ROLE_CHOICES)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    
    def __str__(self):
        return self.role
        
class SkillSuggestion(models.Model):
    name = models.CharField(max_length = 20)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    is_approved = models.BooleanField(default = False)
    created_by = models.ForeignKey(Profil, on_delete = models.CASCADE)
    
    def __str__(self): 
        return self.name
       
