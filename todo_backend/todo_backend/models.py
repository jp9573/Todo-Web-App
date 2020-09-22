from django.db import models


class Todos(models.Model):
    todo = models.TextField()
    created_ts = models.DateTimeField(auto_now_add=True)
    last_modified_ts = models.DateTimeField(auto_now=True)
