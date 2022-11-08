from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser, UserProfile

class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    fieldsets = (
        (None, {
            'fields': ('first_name', 'last_name', 'height')
        }),
        ('Advanced options', {
            'classes': ('collapse',),
            'fields': ('email', 'username'),
        }),
    )
    list_display = ["email", "username", "first_name", "height"]

admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(UserProfile)