# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2016-12-09 14:13
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0004_postsorting'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='preview',
            field=models.TextField(blank=True, max_length=1500, null=True),
        ),
    ]
