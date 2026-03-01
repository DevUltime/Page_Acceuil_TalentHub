from rest_framework.generics import ListCreateAPIView
from rest_framework.permissions import IsAuthenticated
from .serializers import ProfilSerializer
from .models import Profil

class ProfilViewSet(ListCreateAPIView):
    serializer_class = ProfilSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return Profil.objects.filter(user= self.request.user)
    def perform_create(self, serializer):
        return serializer.save(user = self.request.user)