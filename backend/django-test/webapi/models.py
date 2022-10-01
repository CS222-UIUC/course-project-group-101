from django.db import models

# Create your models here.

class UserProfile(models.Model):
    first_name = models.CharField(max_length=60)
    last_name = models.CharField(max_length=60)
    pronouns = models.CharField(max_length=30)
    calories_burnt = models.IntegerField()

    def __str__(self):
        return self.first_name + " " + self.last_name


