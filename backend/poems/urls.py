from django.urls import path
from .views import PoempostListView, PoempostDetailView, PoempostFeaturedView, PoempostCategoryView

urlpatterns = [
    path('', PoempostListView.as_view()),
    path('featured', PoempostFeaturedView.as_view()),
    path('category', PoempostCategoryView.as_view()),
    path('<slug>', PoempostDetailView.as_view()),
]
