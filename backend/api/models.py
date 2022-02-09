from distutils.command.upload import upload
from email.policy import default
from pyexpat import model
from django.db import models

# Create your models here.
class Service(models.Model):
    service_name = models.CharField(max_length=100)
    description = models.TextField()
    service_logo = models.ImageField(upload_to="service/")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.service_name

class ClientSay(models.Model):
    client_name = models.CharField(max_length=100)
    description = models.TextField()
    image= models.ImageField(upload_to="clients/")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.image

class Project(models.Model):
    name = models.CharField(("Project Name"), max_length=100)
    short_description = models.TextField(blank=True)
    feature = models.TextField(blank=True)
    image_one = models.ImageField(upload_to="project/", blank=True)
    image_two = models.ImageField(upload_to="project/", blank=True)
    live_preview = models.URLField(max_length=254, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Footer(models.Model):
    address = models.TextField()
    email = models.EmailField()
    phone = models.CharField(max_length=50)
    facebook = models.URLField(max_length=254)
    youtube = models.CharField(max_length=254)
    footer_credit = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.phone

class HomeGeneral(models.Model):
    title = models.CharField(max_length=100)
    subtitle = models.CharField(max_length=100)
    tech_description = models.TextField()
    video_description = models.TextField()
    video_url = models.URLField()
    total_project = models.PositiveIntegerField()
    total_client = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class TechnologyChart(models.Model):
    x_data = models.CharField(max_length=100)
    y_data = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.x_data

class Information(models.Model):
    about = models.TextField()
    refund = models.TextField()
    terms = models.TextField()
    privacy = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Course(models.Model):
    short_title = models.CharField(max_length=100)
    long_title = models.CharField(max_length=200)
    short_description = models.TextField()
    long_description = models.TextField()
    image = models.ImageField(upload_to='course', blank=True)
    skill = models.TextField()
    total_lecture = models.PositiveIntegerField()
    total_student = models.PositiveIntegerField()
    video_url = models.URLField(max_length=254)

    def __str__(self):
        return self.short_title