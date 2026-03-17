from django.contrib import admin
from django.urls import path, include
from users import urls
from messaging import urls
from services import urls
from reviews import urls
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('apiUser/', include('users.urls')),
    path('apiMsg/', include('messaging.urls')),
    path('apiSvcs/', include('services.urls')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
]
