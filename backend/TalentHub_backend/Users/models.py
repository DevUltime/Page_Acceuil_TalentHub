from django.db import models

class Profil(models.Model):
    bio = models.TextField()
    skills = models.ForeignKey(Skill, on_delete = models.CASCADE)
    Profil_picture = models.ImageField(upload_to = "images/")
    rating = models.IntegerField()
    role = models.CharField(max_length = 20)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    
    def __str__(self):
        return self.role
        
class Skill(models.Model):
    name = models.CharField(max_length = 20)
    create_at = models.DateTimeField(auto_now_add = True)
    update_at = models.DateTimeField(auto_now = True)
    
    def __str__(self): 
        return self.name
    
