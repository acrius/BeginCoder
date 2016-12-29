from django.shortcuts import render
from django.conf import settings

@api_view(['POST'])
@permission_classes((AllowAny, ))
@parser_classes((JSONParser, ))
def vk_login(request):
    data = request.data

    return None
