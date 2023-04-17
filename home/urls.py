from django.urls import path
from . import views
from django.urls import re_path

urlpatterns = [
    path('home/', views.home, name="home"),
    path('home/escuela/', views.escuela, name="escuela"),
    path('contacto/', views.contacto, name="contacto"),
]