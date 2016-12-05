# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2016-12-05 01:42
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0003_auto_20161204_1036'),
    ]

    operations = [
        migrations.CreateModel(
            name='PostSorting',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='title', max_length=100)),
                ('sorting_string', models.CharField(default='field', max_length=100)),
            ],
            options={
                'db_table': 'postsortings',
                'default_related_name': 'postsortings',
            },
        ),
    ]
