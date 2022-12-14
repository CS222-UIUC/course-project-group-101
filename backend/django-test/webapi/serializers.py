from rest_framework import serializers
from .models import UserProfile
from django.contrib.auth import get_user_model

User = get_user_model()

# Serializes a UserProfile to JSON format for responses
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("username", "email", "password", "uid")


class CheckUserSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = (
            "uid",
            "first_name",
            "last_name",
            "pronouns",
            "weight",
            "height_ft",
            "height_in",
            "calories_burned_today",
            "total_calories_burned",
            "level_pref",
            "time_pref",
            "workout_pref",
            "partner",
        )


class LeaderboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = (
            "first_name",
            "last_name",
            "calories_burned_today",
            "total_calories_burned",
        )


class MatchingSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ("first_name", "last_name", "height_ft", "height_in", "weight")


class CalorieUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ["calories_burned_today"]

    def checkData(self, data):
        return len(data) == 1
