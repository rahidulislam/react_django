from dataclasses import fields
from rest_framework import serializers
from .models import ClientSay, Contact, Course, Footer, HomeGeneral, Information, Project, Service, TechnologyChart

class TechnologyChartSerializer(serializers.ModelSerializer):
    class Meta:
        model=TechnologyChart
        fields='__all__'

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model=Service
        fields='__all__'

class ClientSaySerializer(serializers.ModelSerializer):
    class Meta:
        model=ClientSay
        fields='__all__'

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model=Project
        fields='__all__'

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model=Contact
        fields='__all__'

class FooterSerializer(serializers.ModelSerializer):
    class Meat:
        model=Footer
        fields='__all__'

class HomeGeneralSerializer(serializers.ModelSerializer):
    class Meta:
        model=HomeGeneral
        fields='__all__'

class InformationSerializer(serializers.ModelSerializer):
    class Meta:
        model=Information
        fields='__all__'

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model=Course
        fields='__all__'
        