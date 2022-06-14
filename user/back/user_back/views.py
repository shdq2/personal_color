from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserModelSerializer
import logging
from .models import UserModel
from .serializers import UserModelSerializer

@api_view(['GET'])
def userLogin(request):

    if request.method == 'GET':
        serializer = UserModelSerializer()
    return Response(serializer.data,status=200)

# Create your views here.
