from rest_framework import serializers
#from django.contrib.auth.models import User 
from django.contrib.auth import get_user_model
from .models import Skill, Profil, SkillSuggestion, Language

User = get_user_model()

class SkillSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Skill
        fields = ["id", "name"]

class LanguageSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Language
        fields = '__all__'
    
class ProfilSerializer(serializers.ModelSerializer): 
    skills = serializers.PrimaryKeyRelatedField(many = True, queryset=Skill.objects.all())
    languages = serializers.PrimaryKeyRelatedField(many = True, queryset=Language.objects.all())
    user = serializers.PrimaryKeyRelatedField(read_only=True)
    class Meta: 
        model = Profil
        fields = '__all__'
        
    
        
class SkillSuggestionSerializer(serializers.ModelSerializer):
    created_by = serializers.PrimaryKeyRelatedField(read_only = True)
    class Meta: 
        model = SkillSuggestion
        fields = ["id", "name", "created_by", "is_approved"]
        
class UserSerializer(serializers.ModelSerializer): 
    class Meta:
        model = User
        fields = "__all__"
 
