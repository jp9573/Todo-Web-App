# Generated by Django 3.1.1 on 2020-09-22 03:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Todos',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('todo', models.TextField()),
                ('created_ts', models.DateTimeField(auto_now_add=True)),
                ('last_modified_ts', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
