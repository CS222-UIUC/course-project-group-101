# Generated by Django 4.1.1 on 2022-10-05 23:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webapi', '0004_rename_height_inches_userprofile_height_in'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='calories_burnt_today',
            field=models.IntegerField(blank=True, default=0),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='pronouns',
            field=models.CharField(blank=True, max_length=30),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='total_calories_burnt',
            field=models.IntegerField(blank=True, default=0),
        ),
    ]
