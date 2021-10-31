from django.db import models

# Create your models here.

class Api(models.Model):
    name=models.CharField(max_length=200)
    imgUrl=models.URLField()
    _v=models.IntegerField()

    def __str__(self):
        return self.id   
