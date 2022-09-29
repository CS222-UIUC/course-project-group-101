from rest_framework import serializers
from .models import UserProfile

# Convert UserProfile to JSON
class UserProfileSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('first_name', 'last_name', 'pronouns', 'calories_burnt')
