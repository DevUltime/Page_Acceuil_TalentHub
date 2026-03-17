from django.urls import path
from .views import ServiceViewSet, CategoryViewSet

app_name = 'apiSvcs'

urlpatterns = [
    path('service/', 
    ServiceViewSet.as_view(),
    name="list-services"),
    
    path('category/', 
    CategoryViewSet.as_view(),
    name="list-category"),
    ]