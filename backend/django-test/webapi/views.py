from django.shortcuts import render

# Create your views here.

# Rendering webpages

def index(request, *args, **kwargs):
    return render(request, "index.html")

def profile(request, *args, **kwargs):
    return render(request, "profile.html")

def home(request, *args, **kwargs):
    return render(request, "home.html")

def leaderboard(request, *args, **kwargs):
    return render(request, "leaderboard.html")

# HTTP request and response handling for user profiles

from rest_framework import generics, status
from .serializers import UserProfileSerializer, CreateUserProfileSerializer, LeaderboardSerializer
from .models import UserProfile, LeaderBoard
from rest_framework.views import APIView
from rest_framework.response import Response

# View for listing all user profiles

class UserProfileView(generics.ListAPIView):
    queryset = UserProfile.objects.all().order_by('id')
    serializer_class = UserProfileSerializer

def UpdateProfile(user_profile, serializer):
    user_profile.pronouns = serializer.data.get('pronouns')
    user_profile.weight = serializer.data.get('weight')
    user_profile.height_ft = serializer.data.get('height_ft')
    user_profile.height_in = serializer.data.get('height_in')
    user_profile.calories_burned_today =  serializer.data.get('calories_burned_today')
    # user_profile.UpdateTotalCalories()
    return user_profile

def CreateProfile(serializer):
    first_name = serializer.data.get('first_name')
    last_name = serializer.data.get('last_name')
    pronouns = serializer.data.get('pronouns')
    weight = serializer.data.get('weight')
    height_ft = serializer.data.get('height_ft')
    height_in = serializer.data.get('height_in')
    calories_burned_today = serializer.data.get('calories_burned_today')
    return (UserProfile(first_name=first_name, last_name=last_name, pronouns=pronouns, weight=weight, height_ft=height_ft,
        height_in=height_in, calories_burned_today=calories_burned_today, total_calories_burned=calories_burned_today))

# View for creating / updating user profiles

class CreateUserProfileView(APIView):
    def post(self, request):
        serializer = CreateUserProfileSerializer(data=request.data)
        if serializer.is_valid():
            first_name = serializer.data.get('first_name')
            last_name = serializer.data.get('last_name')
            queryset = UserProfile.objects.filter(last_name=last_name)
            if queryset.exists():
                user_profile = queryset[0]
                user_profile = UpdateProfile(user_profile, serializer)
                user_profile.save(update_fields=['pronouns', 'weight', 'height_ft', 'height_in', 'calories_burned_today'])
                return Response(UserProfileSerializer(user_profile).data, status=status.HTTP_200_OK)
            else:
                user_profile = CreateProfile(serializer)
                user_profile.save()
                return Response(UserProfileSerializer(user_profile).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

class LeaderBoardView(generics.ListAPIView):
    queryset = UserProfile.objects.all().order_by('rank')
    serializer_class = LeaderboardSerializer

def UpdateLeaderBoard(leaderboard, serializer):
    leaderboard.rank = serializer.data.get('rank')
    return leaderboard

def CreateLeaderBoard(serializer):
    first_name = serializer.data.get('first_name')
    last_name = serializer.data.get('last_name')
    rank = serializer.data.get('rank')
    return (LeaderBoard(first_name=first_name, last_name=last_name, rank=rank))