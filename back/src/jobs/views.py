from rest_framework import viewsets, generics, response
from jobs.models import *
from jobs.serializers import *
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate, get_user_model

# Create your views here.

User = get_user_model()

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



class RegisterStudentAPI(generics.GenericAPIView):

    serializer_class = RegisterSerializer
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = User.objects.create_user(
            #serializer.data['username'],
            serializer.data['email'],
            serializer.data['password']
        )

        user.set_password(serializer.data['password'])

        user_response = UserSerializer(user, context=self.get_serializer_context()).data

        student = Student.objects.create_student(
                user_response["id"],
                request.data["first_name"],
                request.data["last_name"],
                request.data["course"],
                request.data["cpf"],
                request.data["phone_number"],
                user_response["id"],
        )
        user.save()
        student.save()

        return response.Response({
            "user": user_response,
            "token": Token.objects.create(user=user).key
        })

class RegisterEnterpriseAPI(generics.GenericAPIView):

    serializer_class = RegisterSerializer
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = User.objects.create_user(
            #serializer.data['username'],
            serializer.data['email'],
            serializer.data['password']
        )

        user.set_password(serializer.data['password'])

        user_response = UserSerializer(user, context=self.get_serializer_context()).data

        enterprise = Enterprise.objects.create_enterprise(
                user_response["id"],
                request.data["name"],
                request.data["cnpj"],
                user_response["id"],
        )
        user.save()
        enterprise.save()

        return response.Response({
            "user": user_response,
            "token": Token.objects.create(user=user).key
        })


class RegisterAPI(generics.GenericAPIView):

    serializer_class = RegisterSerializer
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = User.objects.create_user(
            #serializer.data['username'],
            serializer.data['email'],
            serializer.data['password']
        )

        user.set_password(serializer.data['password'])

        user_response = UserSerializer(user, context=self.get_serializer_context()).data

        
        student = Student.objects.create_student(
            user_response["id"],
            request.data["first_name"],
            request.data["last_name"],
            request.data["course"],
            user_response["id"],
        )
        user.save()
        student.save()

        return response.Response({
            "user": user_response,
            "token": Token.objects.create(user=user).key
        })

class LoginAPI(generics.GenericAPIView):

    serializer_class = LoginSerializer
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        user = authenticate(username=serializer.initial_data['email'], password=serializer.initial_data['password'])
        if user == None:
            return response.Response({
                "user": "error"
            })
        return response.Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": Token.objects.get_or_create(user=user)[0].key
        })

class LogoutAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer
    def post(self, request, *args, **kwargs):
        request.user.auth_token.delete()
        return response.Response('Logout')