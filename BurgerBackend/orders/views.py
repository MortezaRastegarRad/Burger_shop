import json
import time

from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

# Create your views here.
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def set_order(request):
    if request.method == 'POST':
        print(json.loads(request.body.decode('utf-8')))
        time.sleep(2)
        return JsonResponse({"P": 90909090})
    return JsonResponse({'p': 9999999999999999999})


@csrf_exempt
def get_order(request):
    time.sleep(1)
    return JsonResponse(
        {"data": {"Bread_top": 1, "Salad": 1, "Meat": 0, "Cheese": 0, "Bacon": 0, "Bread_bottom": 1}, "reserved": 0})
