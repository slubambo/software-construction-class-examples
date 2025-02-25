from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)

    groups = models.ManyToManyField(
        Group,
        related_name="customuser_set",  # Changing the related_name to prevent conflict
        blank=True
    )

    user_permissions = models.ManyToManyField(
        Permission,
        related_name="customuser_permissions_set",  # Changing the related_name to prevent conflict
        blank=True
    )
