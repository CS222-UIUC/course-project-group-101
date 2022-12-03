# Generated by Django 4.1.1 on 2022-12-02 23:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webapi', '0003_userprofile_gender_pref'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userprofile',
            old_name='age_pref',
            new_name='time_pref',
        ),
        migrations.RemoveField(
            model_name='userprofile',
            name='gender_pref',
        ),
        migrations.AddField(
            model_name='userprofile',
            name='level_pref',
            field=models.CharField(choices=[('noob', 'Noob'), ('intm', 'Intermediate'), ('adv', 'Advanced')], default='noob', max_length=6),
        ),
        migrations.AddField(
            model_name='userprofile',
            name='workout_pref',
            field=models.CharField(choices=[('cardio', 'Cardio'), ('weight', 'Weight Lifting'), ('calis', 'Calisthenics')], default='cardio', max_length=6),
        ),
    ]