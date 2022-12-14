"""web_project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from webapi import views
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('userprofiles/', views.UserProfileView.as_view(), name="userprofiles"),
    path('create-userprofile/', views.CreateUserProfileView.as_view(), name="createuserprofile"),
    path('create-user/', views.CreateUserView.as_view(), name="createuser"),
    path('check-user/', views.CheckUserView.as_view(), name='checkuser'),
    path('userprofile/<int:uid>/', views.GetDeleteUserProfileView.as_view(), name="userprofile"),
    path('leaderboardview/', views.LeaderboardView.as_view(), name="get-leaderboard"),
    path('matchingview/', views.MatchingView.as_view(), name="get-matches"),
    path('profile/', views.profile),
    path('leaderboard/', views.leaderboard),
    path('home/', views.home),
    path('', TemplateView.as_view(template_name='index.html')),
    path("accounts/", include("accounts.urls")),
    path("accounts/", include("django.contrib.auth.urls")),
]
