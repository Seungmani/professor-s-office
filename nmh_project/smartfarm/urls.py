from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
app_name='smartfarm'
urlpatterns = [
    path('',views.main, name = 'main'),
    path('index/<int:pk>/', views.index, name='index'),
]

if settings.DEBUG:
    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT
    )