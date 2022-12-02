from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    fieldsets = (
        (None, {
            'fields': ("uid",)
        }),
        ('Advanced options', {
            'classes': ('collapse',),
            'fields': ('email', 'username'),
        }),
    )
    list_display = ["email", "username", "uid"]

admin.site.register(CustomUser, CustomUserAdmin)