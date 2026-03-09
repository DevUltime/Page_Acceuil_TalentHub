from rest_framework.generics import ListCreateAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth.models import User
from .serializers import ProfilSerializer, UserSerializer, SkillSerializer, SkillSuggestionSerializer
from .models import Profil, Skill, SkillSuggestion

class UserViewSet(ListCreateAPIView):
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self): 
        return User.objects.filter(id = self.request.user.id)
        
    def perform_create(self, serializer):
        return serializer.save(id = self.request.user.id)
        
class ProfilViewSet(ListCreateAPIView):
    serializer_class = ProfilSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return Profil.objects.filter(user= self.request.user)
        
    def perform_create(self, serializer):
        return serializer.save(user = self.request.user)

class SkillViewSet(ListCreateAPIView):
    serializer_class = SkillSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        profil = Profil.objects.get(user = self.request.user)
        return profil.skills.all()
    
    def perform_create(self, serializer): 
        profil = Profil.objects.get(user = self.request.user)
        return serializer.save(profil.skills)

class SkillSuggestionViewSet(ListCreateAPIView):
    serializer_class = SkillSuggestionSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return SkillSuggestion.objects.filter(created_by__user = self.request.user)
    
    def perform_create(self, serializer): 
        profil = Profil.objects.get(user = self.request.user)
        return serializer.save(created_by = profil)