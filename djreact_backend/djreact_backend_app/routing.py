from django.urls import path

from .consumers import NoteConsumer

websocket_url_patterns = [
    path('ws/notes', NoteConsumer)
]
