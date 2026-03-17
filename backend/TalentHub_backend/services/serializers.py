from rest_framework import serializers 
from .models import Service, Category
from users.models import Profil 

class ServiceSerializer(serializers.ModelSerializer): 
    owner = serializers.PrimaryKeyRelatedField(queryset = Profil.objects.all())
    category = serializers.PrimaryKeyRelatedField(queryset = Category.objects.all())
    class Meta: 
        model = Service
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    
    class Meta: 
        model = Category
        exclude = ["created_at", "updated_at"]