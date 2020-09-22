from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Todos
from rest_framework import status


class TodoHandler(APIView):

    def get(self, request):
        return_json = []
        todos = Todos.objects.all().order_by('-created_ts')
        for a_todo in todos:
            return_json.append({
                'todo': a_todo.todo,
                'createdAt': a_todo.created_ts
            })

        return Response(return_json, status=status.HTTP_200_OK)
