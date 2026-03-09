from rest_framework import serializers
from django.contrib.auth.models import User 
from .models import Skill, Profil, SkillSuggestion

class SkillSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Skill
        fields = ["id", "name"]


class ProfilSerializer(serializers.ModelSerializer): 
    skills = serializers.PrimaryKeyRelatedField(many = True, queryset=Skill.objects.all())
    user = serializers.PrimaryKeyRelatedField(read_only=True)
    class Meta: 
        model = Profil
        fields = ["id", "skills", "user", "bio", "role", "rating"]
        
class SkillSuggestionSerializer(serializers.ModelSerializer):
    created_by = serializers.PrimaryKeyRelatedField(read_only = True)
    class Meta: 
        model = SkillSuggestion
        fields = ["id", "name", "created_by", "is_approved"]
        
class UserSerializer(serializers.ModelSerializer): 
    class Meta:
        model = User
        fields = ["email", "first_name", "last_name", "password"]
        