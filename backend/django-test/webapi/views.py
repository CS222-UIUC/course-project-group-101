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
from .serializers import UserProfileSerializer, UserProfileSerializer
from .models import UserProfile
from rest_framework.views import APIView
from rest_framework.response import Response

# View for listing all user profiles

class UserProfileView(generics.ListAPIView):
    queryset = UserProfile.objects.all().order_by('uid')
    serializer_class = UserProfileSerializer

def UpdateProfile(user_profile, serializer):
    user_profile.first_name = serializer.data.get('first_name')
    user_profile.last_name = serializer.data.get('last_name')
    user_profile.pronouns = serializer.data.get('pronouns')
    user_profile.weight = serializer.data.get('weight')
    user_profile.height_ft = serializer.data.get('height_ft')
    user_profile.height_in = serializer.data.get('height_in')
    user_profile.calories_burned_today =  serializer.data.get('calories_burned_today')
    user_profile.UpdateTotalCalories()
    return user_profile

def CreateProfile(serializer):
    uid = serializer.data.get('uid')
    first_name = serializer.data.get('first_name')
    last_name = serializer.data.get('last_name')
    pronouns = serializer.data.get('pronouns')
    weight = serializer.data.get('weight')
    height_ft = serializer.data.get('height_ft')
    height_in = serializer.data.get('height_in')
    calories_burned_today = serializer.data.get('calories_burned_today')
    return (UserProfile(uid=uid, first_name=first_name, last_name=last_name, pronouns=pronouns, weight=weight, height_ft=height_ft,
        height_in=height_in, calories_burned_today=calories_burned_today, total_calories_burned=calories_burned_today))

# View for creating / updating user profiles

class CreateUserProfileView(APIView):
    def get(self, request):
        queryset = UserProfile.objects.all()
        serializer_class = UserProfileSerializer(queryset, many=True)
        return Response(serializer_class.data)

    def post(self, request):
        serializer = UserProfileSerializer(data=request.data)
        if serializer.is_valid():
            uid = serializer.data.get('uid')
            queryset = UserProfile.objects.filter(uid=uid)
            if queryset.exists():
                user_profile = queryset[0]
                user_profile = UpdateProfile(user_profile, serializer)
                user_profile.save(update_fields=['first_name', 'last_name','pronouns', 'weight', 'height_ft', 'height_in', 
                    'calories_burned_today', 'total_calories_burned'])
                return Response(UserProfileSerializer(user_profile).data, status=status.HTTP_200_OK)
            else:
                user_profile = CreateProfile(serializer)
                user_profile.save()
                return Response(UserProfileSerializer(user_profile).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

# View for getting or deleting specific user profile

class GetDeleteUserProfileView(APIView):
    def get(self, request, uid):
        queryset = UserProfile.objects.all().filter(uid=uid)
        serializer_class = UserProfileSerializer(queryset, many=True)
        return Response(serializer_class.data)

    def delete(self, request, uid):
        user_profile = UserProfile.objects.filter(uid=uid).delete()
        return Response(status=status.HTTP_200_OK)
