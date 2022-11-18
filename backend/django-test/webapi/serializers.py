from rest_framework import serializers
from .models import UserProfile

# Serializes a UserProfile to JSON format for responses
class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('user', 'uid', 'first_name', 'last_name', 'pronouns', 'weight', 'height_ft', 'height_in', 'calories_burned_today', 'total_calories_burned')

class LeaderboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('first_name', 'last_name', 'calories_burned_today', 'total_calories_burned')

class MatchingSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('first_name', 'last_name', 'height_ft', 'height_in', 'weight')

class CalorieUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('uid', 'calories_burned_today')