from django.shortcuts import render, HttpResponse, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login
from django.contrib import messages
from forms import RegisterUserForm

# Create your views here.
def register_user(request):
    if request.method == "POST":
        form = RegisterUserForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, "Registration Successful.")
            return redirect("/")
        messages.error(request, "Unsuccessful registration.")
    form = RegisterUserForm()
    return render(request=request, template_name="registration/signup.html", context={"form":form})

# Rendering webpages
def view_foo(request):
    user_profile = request.user.get_profile()
    url = user_profile.url

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
from .serializers import UserProfileSerializer, LeaderboardSerializer, CalorieUpdateSerializer, MatchingSerializer
from .models import UserProfile, Question
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import get_user_model

User = get_user_model()

def user_detail(request, uid):
    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    context = {'latest_question_list': latest_question_list}
    return render(request, 'user.html', context)

# View for listing all user profiles

class LeaderboardView(generics.ListAPIView):
    queryset = UserProfile.objects.all().order_by('-calories_burned_today')[:10]
    serializer_class = LeaderboardSerializer

class MatchingView(generics.ListAPIView):
    queryset = UserProfile.objects.all().order_by('height_ft', 'height_in', 'weight')
    serializer_class = MatchingSerializer

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

def CreateProfile(serializer, User):
    uid = serializer.data.get('uid')
    first_name = serializer.data.get('first_name')
    last_name = serializer.data.get('last_name')
    pronouns = serializer.data.get('pronouns')
    weight = serializer.data.get('weight')
    height_ft = serializer.data.get('height_ft')
    height_in = serializer.data.get('height_in')
    calories_burned_today = serializer.data.get('calories_burned_today')
    return (UserProfile(user=User, uid=uid, first_name=first_name, last_name=last_name, pronouns=pronouns, weight=weight, height_ft=height_ft,
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
                # temp fields for email, username, and password, can add to serializer maybe
                user = User.objects.create_user(first_name=serializer.data.get('first_name'), last_name=serializer.data.get('last_name'), email='benja1@gmail.com', password='chicken123451', username='benja1')
                user_profile = CreateProfile(serializer, user)
                user_profile.save()
                return Response(UserProfileSerializer(user_profile).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

# View for getting, deleting, or updating calories for a specific user profile

class GetDeleteUserProfileView(APIView):
    def get(self, request, uid):
        queryset = UserProfile.objects.all().filter(uid=uid)
        serializer_class = UserProfileSerializer(queryset, many=True)
        return Response(serializer_class.data)

    def delete(self, request, uid):
        user_profile = UserProfile.objects.filter(uid=uid).delete()
        return Response(status=status.HTTP_200_OK)
    
    def post(self, request, uid):
        serializer = CalorieUpdateSerializer(data=request.data)
        if serializer.is_valid():
            queryset = UserProfile.objects.filter(uid=uid)
            user_profile = queryset[0]
            user_profile.calories_burned_today = serializer.data.get('calories_burned_today')
            user_profile.UpdateTotalCalories()
            user_profile.save(update_fields=['calories_burned_today', 'total_calories_burned'])
            return Response({'Calories updated successfully'}, status=status.HTTP_200_OK)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)