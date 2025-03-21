from django.urls import path
from .views import RegisterView, LoginView, ItemListCreateView, ItemDetailView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('items/', ItemListCreateView.as_view(), name='item-list-create'),
    path('items/<int:pk>/', ItemDetailView.as_view(), name='item-detail'),
]
