from django.contrib.auth.models import AbstractUser
from django.db import models
from .manager import UserManager

class User(AbstractUser):
    username = None
    email = models.EmailField(unique = True)
    email_verified = models.BooleanField(default = False)
    phone = models.CharField(max_length = 20, unique = True)
    created_at = models.DateTimeField(auto_now_add = True)
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["last_name", "first_name"]
    objects = UserManager()
    
    def __str__(self):
        return self.email
        
        
class Skill(models.Model):
    name = models.CharField(max_length = 20)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    is_approved = models.BooleanField(default = True)
    
    def __str__(self): 
        return self.name
        
class Language(models.Model):
    name = models.CharField(max_length = 25)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    
class Profil(models.Model):
    
    ROLE_CHOICES = (
        ('client', 'Client'),
        ('freelancer', 'Freelancer'),
    )
    
    user = models.OneToOneField(User, on_delete = models.CASCADE)
    bio = models.TextField(blank = True, null=True)
    pseudo = models.CharField(max_length = 25, default = "devUltime")
    skills = models.ManyToManyField(Skill, blank=True)
    profil_picture = models.ImageField(upload_to = "images/", blank = True, null=True)
    rating = models.IntegerField()
    role = models.CharField(max_length = 20 , choices = ROLE_CHOICES)
    country = models.CharField(max_length = 25, default = "Cameroun")
    city = models.CharField(max_length = 25, default = "Dschang")
    telephone = models.CharField(max_length = 25, default = "+237 640499175")
    profession = models.CharField(max_length = 25, default = "bandit")
    experience = models.IntegerField(default = 0)
    impressions = models.IntegerField(default = 0)
    clicks = models.IntegerField(default = 0)
    languages = models.ManyToManyField(Language, blank = True)
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
       
