from . import views
from django.urls import path
apo_name = 'apiReview'

urlpatterns = [
    path('review/', 
    views.ReviewViewSet.as_view(),
    name = 'list-view')
    ]