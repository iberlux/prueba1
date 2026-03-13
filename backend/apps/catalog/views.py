from django.db.models import Prefetch
from rest_framework import generics

from .models import Category, Product, ProductImage
from .serializers import CategorySerializer, ProductDetailSerializer, ProductListSerializer


class CategoryListAPIView(generics.ListAPIView):
    queryset = Category.objects.filter(is_active=True)
    serializer_class = CategorySerializer


class ProductListAPIView(generics.ListAPIView):
    serializer_class = ProductListSerializer
    filterset_fields = ['category__slug', 'is_featured']

    def get_queryset(self):
        return (
            Product.objects.filter(is_active=True, category__is_active=True)
            .select_related('category')
            .prefetch_related(Prefetch('images', queryset=ProductImage.objects.order_by('sort_order', 'id')))
        )


class ProductDetailAPIView(generics.RetrieveAPIView):
    serializer_class = ProductDetailSerializer
    lookup_field = 'slug'

    def get_queryset(self):
        return (
            Product.objects.filter(is_active=True, category__is_active=True)
            .select_related('category')
            .prefetch_related('images', 'specifications')
        )
