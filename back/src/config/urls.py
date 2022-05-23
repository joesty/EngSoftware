"""config URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from jobs.views import *
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'students', StudentViewSet)
router.register(r'enterprises', EnterpriseViewSet)
router.register(r'enterprises', CourseViewSet)
router.register(r'enterprises', Job_OpportunityViewSet)
router.register(r'enterprises', InterestViewSet)
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api/register_student/', RegisterStudentAPI.as_view(), name='student_register'),
    path('api/register_enterprise/',RegisterEnterpriseAPI.as_view(), name='enterprise_register'),
    path('api/login/', LoginAPI.as_view(), name='login'),
    path('api/logout/', LogoutAPI.as_view(), name='logout')
]