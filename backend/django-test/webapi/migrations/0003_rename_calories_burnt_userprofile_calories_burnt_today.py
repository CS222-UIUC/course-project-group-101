# Generated by Django 4.1.1 on 2022-10-05 20:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('webapi', '0002_userprofile_height_ft_userprofile_height_inches_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userprofile',
            old_name='calories_burnt',
            new_name='calories_burnt_today',
        ),
    ]
