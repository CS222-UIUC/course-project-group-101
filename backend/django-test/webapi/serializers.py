from rest_framework import serializers
from .models import UserProfile, LeaderBoard

# Serializes a UserProfile to JSON format for responses
class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('id', 'first_name', 'last_name', 'pronouns', 'weight', 'height_ft', 'height_in', 'calories_burned_today', 'total_calories_burned')

# Serializes a request and ensures it is valid
class CreateUserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('first_name', 'last_name', 'pronouns', 'weight', 'height_ft', 'height_in', 'calories_burned_today')

class LeaderboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = LeaderBoard
        fields = ('first_name', 'last_name', 'rank')
