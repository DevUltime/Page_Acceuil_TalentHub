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
    password = serializers.CharField(write_only = False, required = True)
    class Meta:
        model = User
        fields = [
            'id', 'email', 'password', 'first_name', 'last_name', 
            'phone', 'email_verified', 'is_active', 'is_staff', 
            'is_superuser', 'date_joined', 'created_at', 
            'groups', 'user_permissions', 'password'
        ]
        
    def create(self, validated_data):
        """Utilise le Manager personnalisé pour hasher le password"""
        password = validated_data.pop('password')
        
        user = User.objects.create_user(
            password=password,
            **validated_data
        )
        return user
    
    def update(self, instance, validated_data):
        """Hash le mot de passe si présent lors de la mise à jour"""
        password = validated_data.pop('password', None)
        
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        
        if password:
            instance.set_password(password)
        
        instance.save()
        return instance
 
