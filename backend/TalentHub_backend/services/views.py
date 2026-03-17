from rest_framework.generics import ListCreateAPIView
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .serializers import ServiceSerializer, CategorySerializer 
from .models import Service, Category
from users.models import Profil

class ServiceViewSet(ListCreateAPIView):
    serializer_class = ServiceSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        profil = Profil.objects.get(user = self.request.user)
        return Service.objects.filter(owner = profil)
    
    def perform_create(self, serializer):
        profil = Profil.objects.get(user = self.request.user)
        serializer.save(owner = profil)

class CategoryViewSet(ListCreateAPIView):
    serializer_class = CategorySerializer
    permission_classes = [IsAdminUser]
    
    def get_queryset(self):
        return Category.objects.all()
        
    def perform_create(self, serializer):
        serializer.save()