from django.http import JsonResponse


def healthcheck(request):
    return JsonResponse(
        {
            'status': 'ok',
            'service': 'bikes-corp-backend',
            'admin_url': '/admin/',
            'api_base': '/api/',
        }
    )
