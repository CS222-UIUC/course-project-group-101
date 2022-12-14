from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.
LEVEL_CHOICES = (
    ("noob", "Noob"),
    ("intm", "Intermediate"),
    ("adv", "Advanced"),
)

WORKOUT_CHOICES = (
    ("cardio", "Cardio"),
    ("weight", "Weight Lifting"),
    ("calis", "Calisthenics"),
)


class UserProfile(models.Model):
    uid = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=60)
    last_name = models.CharField(max_length=60)
    pronouns = models.CharField(max_length=30, blank=True, null=True)

    weight = models.IntegerField(blank=True, null=True)
    height_ft = models.IntegerField(blank=True, null=True)
    height_in = models.IntegerField(blank=True, null=True)
    level_pref = models.CharField(max_length=6, choices=LEVEL_CHOICES, default="noob")
    time_pref = models.IntegerField(blank=True, null=True)
    workout_pref = models.CharField(
        max_length=6, choices=WORKOUT_CHOICES, default="cardio"
    )
    partner = models.IntegerField(blank=True, null=True)

    calories_burned_today = models.IntegerField(default=0)
    total_calories_burned = models.IntegerField(default=0)

    # def ConvertHeight(self):
    #     return self.height_ft + self.height_inches / 12
    def match_user(self, uid):
        self.partner = uid

    def UpdateTotalCalories(self):
        self.total_calories_burned += self.calories_burned_today

    def __str__(self):
        return self.first_name + " " + self.last_name
