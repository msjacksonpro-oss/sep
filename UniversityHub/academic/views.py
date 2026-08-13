from django.shortcuts import render, redirect
from .forms import *
from django.http import HttpResponse
from . models import *
from django.contrib.auth. forms import UserCreationForm
from django.contrib.auth.decorators import login_required, user_passes_test
from django.contrib.auth.models import User
from django.http import JsonResponse
# def student_list(request):
#     return HttpResponse("List of Students")
def api_course_list(request):
    courses = Course.objects.all()
    
    data = {
         'count': courses.count(),
         'courses': list(courses.values('name', 'code', 'credits'))
    }
      
        
    return JsonResponse(data)

def hello_world(request):
     return HttpResponse("Welcome to University Hub!")


@login_required
def course_list(request):
     all_courses = Course.objects.all()
     context = {
          'courses' : all_courses,
          'page_title' : 'Available Courses'
     }
     return render (request, 'academic/course_list.html', context)




def student_create(request):
    if request.method == 'POST':
        form = StudentForm(request .POST)
        if form.is_valid():
                username = request.POST.get('username', '').strip()
                password = request.POST.get('password', '').strip()
                email = request.POST.get('email', '').strip()

                if not username or not password or not email:
                     return render(request, 'academic/student_form.html', {'form': form, 'error_message': 'All fields are required.'})
                if user.objects.filter(username=username).exists():
                     return render(request, 'academic/student_form.html', {'form': form, 'error_message': 'Username already exists.'})
                
                user = user.objects.create_user(username=username, password=password, email=email)

                student = form.save(commit=False)
                student.user = user
                student.save()
                form.save_m2m()
        return redirect('course_list')

    else:

        form = StudentForm()

    return render(request, 'academic/student_form.html',{'form': form})





def register_user(request):

    if request.method == 'POST':

        form = UserCreationForm(request.POST)

        if form.is_valid():
            form. save()
            return redirect('login')

    else:
        form = UserCreationForm()

    return render(request, 'registration/register.html',{'form': form})

from rest_framework import viewsets
from .models import *
from .serializers import *
from rest_framework.permissions import IsAuthenticated

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer




class StudentviewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes = [IsAuthenticated]