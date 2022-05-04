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
 

class CourseViewSet(viewsets.ModelViewSet):
        queryset = Course.objects.all()
        serializer_class = CourseSerializer


class Job_OpportunityViewSet(viewsets.ModelViewSet):
        queryset = Job_Opportunity.objects.all()
        serializer_class = Job_OpportunitySerializer


class InterestViewSet(viewsets.ModelViewSet):
        queryset = Interest.objects.all()
        serializer_class = InterestSerializer