# Generated by Django 3.2.4 on 2021-10-31 06:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('emapiapp', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='api',
            old_name='co2_emitted',
            new_name='_v',
        ),
        migrations.RenameField(
            model_name='api',
            old_name='Currency',
            new_name='imgUrl',
        ),
        migrations.RenameField(
            model_name='api',
            old_name='Address',
            new_name='name',
        ),
        migrations.RemoveField(
            model_name='api',
            name='gas_emitted',
        ),
    ]
