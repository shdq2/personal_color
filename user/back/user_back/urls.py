from django.urls import path
from .views import userLogin


urlpatterns = [
    path('login/',userLogin , name="user_back")
]