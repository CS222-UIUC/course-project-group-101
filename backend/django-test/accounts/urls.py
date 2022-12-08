from django.urls import path

from .views import SignUpView
from webapi.views import register_user


urlpatterns = [
    path("signup/", SignUpView.as_view(), name="signup"),
]