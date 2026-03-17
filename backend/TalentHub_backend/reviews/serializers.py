from rest_framework import serializers
from django.contrib.auth import get_user_model
from services.models import Service
from .models import Review 

User = get_user_model()

class ReviewSerializer(serializers.ModelSerializer):
    reviewer = serializers.PrimaryKeyRelatedField(queryset = User.objects.all())
    service = serializers.PrimaryKeyRelatedField(queryset = Service.objects.all())
    
    class Meta: 
        model = Review
        fields = '__all__'
        
