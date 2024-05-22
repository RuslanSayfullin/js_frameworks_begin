from django.urls import path
from . import views

urlpatterns = [
    path('todos/', views.TodoList.as_view()),
    path('todos_create/', views.TodoListCreate.as_view()),
]
