from django.contrib import admin
from jobs.models import *
# Register your models here.



class Students(admin.ModelAdmin):
    list_display = ['id', 'name']

class Enterprises(admin.ModelAdmin):
    list_display = ['id', 'name']

class Courses(admin.ModelAdmin):
    list_display = ['id', 'name']

admin.site.register(Student, Students)
admin.site.register(Enterprise, Enterprises)
admin.site.register(Course, Courses)