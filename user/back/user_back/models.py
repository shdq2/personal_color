from django.db import models

class UserModel(models.Model):
    user_id = models.CharField(max_length=20)
    user_pw = models.CharField(max_length=20)
    user_name = models.CharField(max_length=20)
    user_email = models.CharField(max_length=20)

    def __str__(self):
        return self.user_id
# Create your models here.
