from django.urls import path
#from .urls import ProfilViewSet, SkillViewSet, UserViewSet, SkillSuggestionViewSet
from . import views

app_name = "apiUser"

urlpatterns = [ 
    path('profil/', 
    views.ProfilViewSet.as_view(), 
    name="profil-list-create"),
    
    path('skill/', 
    views.SkillViewSet.as_view(), 
    name="skill-list-create"),
    
    path('user/', 
    views.UserViewSet.as_view(), 
    name="user-list-create"),
    
    path('skill-suggestion/', 
    views.SkillSuggestionViewSet.as_view(), 
    name="skill-suggestion-list-create"),
]