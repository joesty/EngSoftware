from rest_framework import serializers
from jobs.models import *
from django.contrib.auth.models import User

##jasonify files

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'


class EnterpriseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enterprise
        fields = '__all__'


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'


class Job_OpportunitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Job_Opportunity
        fields = '__all__'


class InterestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interest
        fields = '__all__'

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = '__all__'

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = ("id", "email")
