from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    # add additional fields in here
    uid = models.IntegerField(null=True)

    def __str__(self):
        return self.username