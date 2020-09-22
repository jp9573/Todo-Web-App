from django.db import models


class Todos(models.Model):
    todo = models.TextField()
    created_ts = models.DateTimeField(auto_now_add=True)
    last_modified_ts = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.todo) + ' added at ' + str(self.created_ts)
