from rest_framework.generics import ListCreateAPIView
from rest_framework.permissions import IsAuthenticated
from .models import Review
from .serializers import ReviewSerializer 
from users.models import Profil
from services.models import Service

class ReviewViewSet(ListCreateAPIView):
    serializer_class = ReviewSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        profil = Profil.objects.get(user = self.request.user)
        return Review.objects.filter(service__owner = profil)
    
    def perform_create(self, serializer):
        return serializer.save(reviewer = self.request.user)
