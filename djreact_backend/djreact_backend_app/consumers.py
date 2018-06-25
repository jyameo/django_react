import json
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer

from .models import Note


class NoteConsumer(WebsocketConsumer):
    def connect(self):
        self.room_group_name = 'notes'

        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )
        self.accept()

    def disconnect(self, close_code):
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    def receive(self, text_data):
        text_json = json.load(text_data)
        title = text_json['title']
        content = text_json['content']
        _id = text_json['id']

        # Update object
        note = Note.objects.get(pk=_id)
        note.title = title
        note.save()

        async_to_sync(self.channel_layer.group_send)(
            {
                'type': 'add_node',
                'title': title,
                'content': content,
                'id': _id
            }
        )

        def add_node(self, event):
            title = event['title']
            content = event['content']
            _id = event['id']
            self.send(text_data=json.dumps({
                'title': title,
                'content': content,
                'id': id
            }))
