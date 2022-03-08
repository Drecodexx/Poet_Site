from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Poempost
from .serializers import PoempostSerializer

class PoempostListView(ListAPIView):
    queryset = Poempost.objects.order_by('-date_created')
    serializer_class = PoempostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )

class PoempostDetailView(RetrieveAPIView):
    queryset = Poempost.objects.order_by('-date_created')
    serializer_class = PoempostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )

class PoempostFeaturedView(ListAPIView):
    queryset = Poempost.objects.all().filter(featured=True)
    serializer_class = PoempostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )

class PoempostCategoryView(APIView):
    serializer_class = PoempostSerializer
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data
        category = data['category']
        queryset = Poempost.objects.order_by('-date_created').filter(category__iexact=category)

        serializer = PoempostSerializer(queryset, many=True)

        return Response(serializer.data)