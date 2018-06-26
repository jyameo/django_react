from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack

from djreact_backend_app.routing import WS_URLPATTERNS

MY_APP = ProtocolTypeRouter({
    "websocket": AuthMiddlewareStack(
        URLRouter(
            WS_URLPATTERNS
        )
    )
})
