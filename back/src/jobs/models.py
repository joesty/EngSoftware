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
    email = models.CharField(max_length=40, null=False)
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
    email = models.CharField(max_length=40, null=False)

    def __str__(self):
        return self.name