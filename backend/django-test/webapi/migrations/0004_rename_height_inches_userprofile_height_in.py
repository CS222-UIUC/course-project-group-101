# Generated by Django 4.1.1 on 2022-10-05 22:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('webapi', '0003_rename_calories_burnt_userprofile_calories_burnt_today'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userprofile',
            old_name='height_inches',
            new_name='height_in',
        ),
    ]
