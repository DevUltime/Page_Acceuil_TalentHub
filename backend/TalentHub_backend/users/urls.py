from django.urls import path
from .views import ProfilViewSet

urlpatterns = [ path('/profil', 
                ProfilViewSet.as_view, 
                name="profil-list-create"),
              ]