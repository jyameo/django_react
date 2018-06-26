from django.urls import path

from .consumers import NoteConsumer

WS_URLPATTERNS = [
    path('ws/notes', NoteConsumer)
]
