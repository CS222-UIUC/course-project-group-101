from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms

class RegisterUserForm(UserCreationForm):
    email = forms.EmailField()
    first = forms.CharField(max_length=50)
    last = forms.CharField(max_length=50)

    class Meta:
        model = User
        fields = ('username', 'first', 'last', 'email', 'password1', 'password2')
    
    def save(self, commit=True):
        user = super(RegisterUserForm, self).save(commit=False)
        user.email = self.cleaned_data['email']
        if commit:
            user.save()
        return user