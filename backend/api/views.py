from django.http import QueryDict
from django.shortcuts import render
from rest_framework import generics
from .serializers import ClientSaySerializer, ContactSerializer, CourseSerializer, FooterSerializer, HomeGeneralSerializer, InformationSerializer, ProjectSerializer, ServiceSerializer, TechnologyChartSerializer
from .models import Contact,ClientSay, Course, Footer, HomeGeneral, Information, Project, Service, TechnologyChart
# Create your views here.
class TechnologyChartListAPIView(generics.ListCreateAPIView):
    queryset = TechnologyChart.objects.all()
    serializer_class = TechnologyChartSerializer

class ServiceListAPIView(generics.ListCreateAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class TestimonialListAPIView(generics.ListCreateAPIView):
    queryset=ClientSay.objects.all()
    serializer_class =  ClientSaySerializer

class RecentProjectAPIView(generics.ListAPIView):
    queryset = Project.objects.all().order_by('-id')[:3]
    serializer_class = ProjectSerializer

class ProjectListAPIView(generics.ListCreateAPIView):
    queryset=Project.objects.all()
    serializer_class = ProjectSerializer

class ContactCreateAPIView(generics.ListCreateAPIView):
    queryset=Contact.objects.all()
    serializer_class=ContactSerializer

class FooterAPIView(generics.ListCreateAPIView):
    queryset=Footer.objects.all()
    serializer_class=FooterSerializer

class HomeGeneralAPIView(generics.ListCreateAPIView):
    queryset=HomeGeneral.objects.all()
    serializer_class=HomeGeneralSerializer

class InformationAPIView(generics.ListCreateAPIView):
    queryset=Information.objects.all()
    serializer_class=InformationSerializer

class LatestCourseListAPIView(generics.ListAPIView):
    queryset=Course.objects.all().order_by('-id')[:4]
    serializer_class = CourseSerializer

class CourseListAPIView(generics.ListCreateAPIView):
    queryset=Course.objects.all()
    serializer_class = CourseSerializer