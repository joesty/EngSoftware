from unicodedata import name
from django.db import models
from uuid import uuid4
from django.contrib.auth import get_user_model
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser

##User = get_user_model()
# Create your models here.




##Administrador da classe de autenticação
class MyUserManager(BaseUserManager):
    def create_user(self, email, name, password):
        if not email:
            raise ValueError("User must have an email address")

        user = self.model(
            email = self.normalize_email(email),
            name = name
        )

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, name, password=None):
        """
        Creates and saves a superuser with the given email, date of
        birth and password.
        """
        user = self.create_user(
            email,
            name,
            password=password,
        )

        user.is_admin = True
        user.save(using=self._db)
        return user

##Classe customizada de autenticação, usando apenas e-mail
class MyUser(AbstractBaseUser):
    email = models.EmailField(verbose_name='email address', max_length=255, unique=True)
    name = models.CharField(max_length=255)

    USERNAME_FIELD = "email"

    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    
    objects = MyUserManager()

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin



##Modelo Cursos
class Course(models.Model):
    id = models.AutoField(primary_key=True, null=False)
    name = models.CharField(max_length=40, null=False)
    def __str__(self):
        return self.name


class StudentManager(models.Manager):
    def create_student(self, id, name, last_name, course, cpf, phone_number, user):
        student = self.model(
            id, name, last_name, course, cpf, phone_number, user, 
        )
        student.save
        return student


##Estudantes
class Student(models.Model):
    ##id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    name = models.CharField(max_length=20, null=False)
    last_name = models.CharField(max_length=20, null=False)
    ##email = models.EmailField(max_length=40, null=False)
    course = models.CharField(max_length=40, null=False)
    ##password = models.CharField(max_length=20, null=False)
    cpf = models.IntegerField(null=False, unique=True)
    phone_number = models.IntegerField(null=False)
    user = models.ForeignKey(MyUser, on_delete=models.CASCADE)

    objects = StudentManager()

    def __str__(self):
        return self.name

class EnterpriseManager(models.Manager):
    def create_enterprise(self, id, name, cnpj, user=None):
        enterprise = self.model(
            id, name, cnpj, user
        )

        enterprise.save
        return enterprise

#empresas
class Enterprise(models.Model):
    id = models.UUIDField(default=uuid4, editable=False)
    name = models.CharField(primary_key=True, max_length=20, null=False)
    cnpj = models.IntegerField(null=False, unique=True)
    user = models.ForeignKey(MyUser, on_delete=models.CASCADE)

    objects = EnterpriseManager()

    def __str__(self):
        return self.name

##oportunidades de emoprego
class Job_Opportunity(models.Model):
    job_id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    title = models.CharField(max_length=100, null=False)
    description = models.CharField(max_length=1400, null=False)
    meal_ticket = models.CharField(max_length=20),
    health_insurance = models.CharField(max_length=20)
    transportation_vouchers = models.CharField(max_length=20)
    study_incentive = models.CharField(max_length=20)
    home_office_help = models.CharField(max_length=20)
    city_state = models.CharField(max_length=20)
    salary = models.DecimalField(max_digits=6, decimal_places=2, null=False)
    name = models.ForeignKey("Enterprise", on_delete=models.CASCADE)
    workload = models.IntegerField(null=False)

    def __str__(self):
        return self.id

##tabela de interesses alunos x oportunidades de emprego.
class Interest(models.Model):
    job_id = models.ForeignKey("Job_Opportunity", on_delete=models.CASCADE)
    student_id = models.ForeignKey("Student", on_delete=models.CASCADE)



class Curriculum(models.Model):
    student_id = models.ForeignKey(Student, on_delete=models.CASCADE)
    escolarity = models.CharField(max_length=255)
    experiences = models.CharField(max_length=1000)
    skills = models.CharField(max_length=1000)