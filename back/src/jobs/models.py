from uuid import uuid4
from django.db import models

# Create your models here.


class Course(models.Model):
    id = models.AutoField(primary_key=True, null=False)
    name = models.CharField(max_length=40, null=False)
    def __str__(self):
        return self.name

class Student(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    name = models.CharField(max_length=20, null=False)
    last_name = models.CharField(max_length=20, null=False)
    email = models.EmailField(max_length=40, null=False)
    course = models.CharField(max_length=40, null=False)
    password = models.CharField(max_length=20, null=False)
    cpf = models.IntegerField(null=False, unique=True)
    phone_number = models.IntegerField(null=False)

    def __str__(self):
        return self.name


class Enterprise(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    name = models.CharField(max_length=20, null=False)
    cnpj = models.IntegerField(null=False, unique=True)
    password = models.CharField(max_length=20, null=False)
    email = models.EmailField(max_length=40, null=False)

    def __str__(self):
        return self.name

class Job_Opportunity(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    title = models.CharField(max_length=100, null=False)
    description = models.CharField(max_length=1400, null=False)
    salary = models.DecimalField(max_digits=6, decimal_places=2, null=False)
    enterprise_id = models.ForeignKey("Enterprise", on_delete=models.CASCADE)
    workload = models.IntegerField(null=False)

    def __str__(self):
        return self.id

class Interest(models.Model):
    enterprise_id = models.ForeignKey("Enterprise", on_delete=models.CASCADE)
    student_id = models.ForeignKey("Student", on_delete=models.CASCADE)