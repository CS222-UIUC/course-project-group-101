from django.test import TestCase
from webapi import models
from rest_framework.test import APITestCase
from django.urls import reverse
from rest_framework import status
import pytest

# Create your tests here.

# Testing user profile creation
def test_user_create():
    # Creation with minimum fields
    user_profile = models.UserProfile(uid=1, first_name="Benjamin", last_name="Guan")
    assert user_profile.weight is None
    assert user_profile.pronouns == None
    assert user_profile.height_ft is None
    assert user_profile.height_in is None
    assert user_profile.calories_burned_today == 0
    assert user_profile.total_calories_burned == 0
    assert user_profile.first_name == "Benjamin"
    assert user_profile.last_name == "Guan"
    assert user_profile.uid == 1

    user_profile = models.UserProfile(uid=2, first_name="John", last_name="Smith", calories_burned_today=32, weight=100)
    assert user_profile.calories_burned_today == 32
    assert user_profile.weight == 100

# Testing API HTTP Post requests
class UserProfileAPITestCase(APITestCase):
    def test_post_min(self):
        # Post request with min fields
        count = models.UserProfile.objects.all().count()
        sample_profile_min = {"uid": 1, "first_name": "Benjamin", "last_name": "Guan"}
        response = self.client.post(reverse("createuserprofile"), sample_profile_min)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(models.UserProfile.objects.all().count(), count + 1)
        self.assertEqual(response.data["uid"], 1)
        self.assertEqual(response.data["first_name"], "Benjamin")
        self.assertEqual(response.data["last_name"], "Guan")
        self.assertEqual(response.data["pronouns"], None)
        self.assertEqual(response.data["calories_burned_today"], None)

    def test_post_more(self):
        # Post request with more fields
        count = models.UserProfile.objects.all().count()
        sample_profile_more = ({"uid": 2, "first_name": "Benjamin", "last_name": "Smith", "pronouns": "he/him", "weight": 135, 
            "height_ft": 5, "calories_burned_today": 34})
        response_more = self.client.post(reverse("createuserprofile"), sample_profile_more)
        self.assertEqual(response_more.status_code, status.HTTP_201_CREATED)
        self.assertEqual(models.UserProfile.objects.all().count(), count + 1)
        self.assertEqual(response_more.data["pronouns"], "he/him")
        self.assertEqual(response_more.data["weight"], 135)
        self.assertEqual(response_more.data["total_calories_burned"], 34)

    def test_post_update(self):
        # Post request that updates previous
        count = models.UserProfile.objects.all().count()
        sample_profile = {"uid": 1, "first_name": "Ben", "last_name": "Guan", "calories_burned_today": 44}
        response = self.client.post(reverse("createuserprofile"), sample_profile)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(models.UserProfile.objects.all().count(), count + 1)

        count = models.UserProfile.objects.all()
        sample_profile_update = ({"uid": 1, "first_name": "Benjamin", "last_name": "G", "pronouns": "he/him", 
            "weight": 120, "height_ft": 5, "calories_burned_today": 22})
        response_update = self.client.post(reverse("createuserprofile"), sample_profile_update)
        self.assertEqual(response_update.status_code, status.HTTP_200_OK)
        self.assertEqual(response_update.data["uid"], 1)
        self.assertEqual(response_update.data["first_name"], "Benjamin")
        self.assertEqual(response_update.data["last_name"], "G")
        self.assertEqual(response_update.data["height_ft"], 5)
        self.assertEqual(response_update.data["calories_burned_today"], 22)
        self.assertEqual(response_update.data["total_calories_burned"], 66)
    
    def test_invalid_post(self):
        count = models.UserProfile.objects.all().count()
        sample_profile_min = {"first_name": "Benjamin"}
        response = self.client.post(reverse("createuserprofile"), sample_profile_min)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(models.UserProfile.objects.all().count(), count)



