from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Todos
from rest_framework import status
from django.core import serializers


class TodoHandler(APIView):

    def get(self, request):
        return_json = []
        todos = Todos.objects.all().order_by('-created_ts')
        for a_todo in todos:
            return_json.append({
                'id': a_todo.id,
                'todo': a_todo.todo,
                'createdAt': a_todo.created_ts
            })

        return Response(return_json, status=status.HTTP_200_OK)

    def post(self, request):
        todo = request.data['todo']
        todo_obj = Todos.objects.create(
            todo=todo
        )
        return Response(serializers.serialize('python', [todo_obj]), status=status.HTTP_201_CREATED)

    def delete(self, request):
        id = request.query_params['id']
        todo_obj = Todos.objects.filter(id=id)

        if todo_obj:
            todo_obj.delete()
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
