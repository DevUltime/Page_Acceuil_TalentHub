from django.urls import path
#from .urls import ProfilViewSet, SkillViewSet, UserViewSet, SkillSuggestionViewSet
from . import views

app_name = "apiUser"

urlpatterns = [ 
    
    path('profil/', 
    views.ProfilViewSet.as_view({
        'get' : 'list',
        'post' : 'create',
    }), 
    name="profil-list-create"),
    
    path('profil/<pk>/', 
    views.ProfilViewSet.as_view({
        'get' : 'retrieve',
        'put' : 'update',
        'delete' : 'destroy',
    }), 
    name="profil-details"),
    
    path('skill/', 
    views.SkillViewSet.as_view(), 
    name="skill-list-create"),
    
    path('user/', 
    views.UserViewSet.as_view(), 
    name="user-list-create"),
    
    path('allusers/', 
    views.AllUsersViewSet.as_view({
        "get" : "list",
        "post" : "create",
    }), 
    name="users-list-create"),
    
    path('allusers/<int:pk>/', 
    views.AllUsersViewSet.as_view({
        "get" : "retrieve", 
        "put" : "update", 
        "delete" : "destroy",
    }), 
    name="users-details"),
    
    path('skill-suggestion/', 
    views.SkillSuggestionViewSet.as_view(), 
    name="skill-suggestion-list-create"),
    
    path('language/', 
    views.LanguageViewSet.as_view(), 
    name="language-list-create"),
]

