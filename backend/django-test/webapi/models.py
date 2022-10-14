from django.db import models

# Create your models here.

class UserProfile(models.Model):
    uid = models.IntegerField()
    first_name = models.CharField(max_length=60)
    last_name = models.CharField(max_length=60)
    pronouns = models.CharField(max_length=30, blank=True, null=True)

    weight = models.IntegerField(blank=True, null=True)
    height_ft = models.IntegerField(blank=True, null=True)
    height_in = models.IntegerField(blank=True, null=True)

    calories_burned_today = models.IntegerField(blank=True, default=0, null=True)
    total_calories_burned = models.IntegerField(blank=True, default=0, null=True)

    # def ConvertHeight(self):
    #     return self.height_ft + self.height_inches / 12

    def UpdateTotalCalories(self):
        self.total_calories_burned += self.calories_burned_today

    def __str__(self):
        return self.first_name + " " + self.last_name


