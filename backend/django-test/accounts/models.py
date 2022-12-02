from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    # add additional fields in here
    uid = models.IntegerField(null=True)

    def __str__(self):
        return self.username

# class UserProfile(models.Model):
#     # uid = models.ForeignKey(CustomUser, unique=True, null=True, on_delete=models.SET_NULL)
#     first_name = models.CharField(max_length=60)
#     last_name = models.CharField(max_length=60)
#     pronouns = models.CharField(max_length=30, blank=True, null=True)

#     weight = models.IntegerField(blank=True, null=True)
#     height_ft = models.IntegerField(blank=True, null=True)
#     height_in = models.IntegerField(blank=True, null=True)

#     calories_burned_today = models.IntegerField(blank=True, default=0, null=True)
#     total_calories_burned = models.IntegerField(blank=True, default=0, null=True)

#     def UpdateTotalCalories(self):
#         self.total_calories_burned += self.calories_burned_today

#     def __str__(self):
#         return self.first_name + " " + self.last_name