from django.shortcuts import render

# Create your views here.


def year(request):
    """
    년 목표 설정
    """
    return render(request, 'year/yearGoalList.html')