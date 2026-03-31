from rest_framework.generics import ListCreateAPIView, RetrieveUpdateAPIView, ListAPIView
from rest_framework.viewsets import ModelViewSet 
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
#from django.contrib.auth.models import User
from .serializers import ProfilSerializer, UserSerializer, SkillSerializer, SkillSuggestionSerializer, LanguageSerializer
from .models import Profil, Skill, SkillSuggestion, Language
from django.contrib.auth import get_user_model

User = get_user_model()

class UserViewSet(ListCreateAPIView):
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self): 
        return User.objects.filter(id = self.request.user.id)
        
    def perform_create(self, serializer):
        return serializer.save(id = self.request.user.id)
        
class ProfilViewSet(ModelViewSet):
    serializer_class = ProfilSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return Profil.objects.filter(user= self.request.user)
    
    def get_object(self):
        return Profil.objects.get(user= self.request.user)
    
    def perform_create(self, serializer):
        return serializer.save(user = self.request.user)
    
    def perform_update(self, serializer):
        user = self.request.user
        return serializer.save(user = user)
        
class SkillViewSet(ListCreateAPIView):
    serializer_class = SkillSerializer
    permission_classes = [IsAdminUser]
    
    def get_queryset(self):
        return Skill.objects.all()
    
    def perform_create(self, serializer): 
        return serializer.save()

class SkillSuggestionViewSet(ListCreateAPIView):
    serializer_class = SkillSuggestionSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return SkillSuggestion.objects.filter(created_by__user = self.request.user)
    
    def perform_create(self, serializer): 
        profil = Profil.objects.get(user = self.request.user)
        return serializer.save(created_by = profil)

class LanguageViewSet(ListCreateAPIView): 
    serializer_class = LanguageSerializer
    permission_classes = [IsAdminUser]
    
    def get_queryset(self):
        return Language.objects.all()
    
    def perform_create(sef, serializer):
        return serializer.save()

class AllUsersViewSet(ModelViewSet):
    serializer_class = UserSerializer
    
    permission_classes = [IsAdminUser]
    def get_queryset(self): 
        return User.objects.all()
        
    def get_object(self): 
        return User.objects.get(id = self.request.user.id)
        
        