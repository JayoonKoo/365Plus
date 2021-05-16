from django.db import models
from django.db.models.fields.related import ForeignKey

# Create your models here.

class Year(models.Model):
    goal = models.CharField(max_length=30)
    summary = models.TextField()
    create_date = models.DateField(auto_now_add=True)
    complete_date = models.DateField()
    progress = models.DecimalField(max_digits=5, decimal_places=2)
    is_complete = models.BooleanField(default=False)
    

class Month(models.Model):
    goal = models.CharField(max_length=30)
    summary = models.TextField()
    create_date = models.DateField(auto_now_add=True)
    goal_month_date = models.DateField()
    is_complete = models.BooleanField(default=False)
    year = models.ForeignKey(Year, on_delete=models.CASCADE)


class Day(models.Model):
    goal = models.CharField(max_length=30)
    target_date = models.DateField()
    is_complete = models.BooleanField(default=False)
    year = models.ForeignKey(Year, on_delete=models.CASCADE)
    month = models.ForeignKey(Month, on_delete=models.CASCADE)
    