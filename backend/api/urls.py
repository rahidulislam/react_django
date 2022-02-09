from unicodedata import name
from django.urls import path
from .views import (
    ContactCreateAPIView,
    CourseListAPIView,
    FooterAPIView,
    HomeGeneralAPIView,
    LatestCourseListAPIView,
    ProjectListAPIView,
    ServiceListAPIView, 
    TechnologyChartListAPIView, 
    TestimonialListAPIView,
    RecentProjectAPIView
    )
app_name='api'
urlpatterns = [
    path('chart/', TechnologyChartListAPIView.as_view(), name='chart-list'),
    path('service/', ServiceListAPIView.as_view(), name='service-list'),
    path('testimonial/', TestimonialListAPIView.as_view(), name='testimonial-list'),
    path('recent-project/', RecentProjectAPIView.as_view(), name='recent-project'),
    path('project/', ProjectListAPIView.as_view(), name='project-list'),
    path('contact/', ContactCreateAPIView.as_view(), name='contact-create'),
    path('footer/', FooterAPIView.as_view(), name='footer'),
    path('home/', HomeGeneralAPIView.as_view(), name='home'),
    path('latest-course/', LatestCourseListAPIView.as_view(), name='latest-course'),
    path('course/', CourseListAPIView.as_view(), name='course-list')

]
