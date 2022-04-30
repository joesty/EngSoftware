from rest_framework import viewsets
from jobs.models import *
from jobs.serializers import *
# Create your views here.


class StudentViewSet(viewsets.ModelViewSet):
        queryset = Student.objects.all()
        serializer_class = StudentSerializer


class EnterpriseViewSet(viewsets.ModelViewSet):
        queryset = Enterprise.objects.all()
        serializer_class = EnterpriseSerializer
 


