from django.db import models

# Create your models here.
class File_before_db(models.Model):
    file_Title = models.CharField(max_length=200)
    before_file = models.FileField(upload_to='before/')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
class File_after_db(models.Model):
    file_Title = models.CharField(max_length=200)
    after_file = models.FileField(upload_to='after/')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)