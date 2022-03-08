from rest_framework import serializers
from .models import  Poempost

class PoempostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Poempost
        fields = '__all__'
        lookup_field = 'slug'