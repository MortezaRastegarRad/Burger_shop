from django.urls import path
from .views import set_order, get_order

urlpatterns = [
    path('set_order/', set_order, name="set_order"),
    path('get_order/', get_order, name="get_order")
]
