
from django.shortcuts import render, redirect
from .models import File_before_db,File_after_db
import pandas as pd
import sqlite3
from . import proc

def main(request):
    if request.method == 'POST':
        filetitle = request.POST["filetitle"]
        uploadedFile = request.FILES["uploadedFile"]
        if uploadedFile != None:
            before_file_form =File_before_db(
                file_Title=filetitle,
                before_file=uploadedFile
            )
            before_file_form.save()
            return redirect('smartfarm:index')
        else:
            return redirect("smartfarm:index")
    return render(request,'main/main.html')


def index(request):
    # work_dir = 'C:/Users/WOOO_SEOK/Desktop/projectfolder/nmh/nmh_project/media/'
    file_root=File_before_db.objects.get(id=1) 

    work_dir = './media/' + str(file_root.before_file)  # 저장 파일 위치 정보
    address='광주광역시'
    envir = pd.read_csv(work_dir, encoding='cp949')
    
    
    envir_date = pd.DataFrame()
    envir_date['일시'] = envir.iloc[:,0].to_list()
    [long,lati]=proc.geocoding(address)
    start_month=envir_date.iloc[0,0][0:7]
    end_month=envir_date.iloc[-1,0][0:7]
    sun = proc.get_sun(round(long),round(lati),start_month,end_month)
    nd_div=proc.ND_div(sun, envir_date)
    afternoon_div =proc.afternoon_div(sun,nd_div,noon=12)
    t_div=proc.time_div(sun,afternoon_div, 3)
    t_div['일시']=t_div['일시'].astype('str')
    generating_data=proc.generating_dailydata(envir, 0, t_div,[3],[4],[5],[2],[6,7,9])
    result = proc.making_weekly2(generating_data,0)
    result_json=result.to_json(orient='table',force_ascii=False)
    print(result_json)
    return render(request,'analytics/index.html',{'result_json':result_json})
# Create your views here.


def result_save(request):
    if request.method == 'POST':
        filetitle = request.POST["filetitle"]
        uploadedFile = request.FILES["uploadedFile"]
        if uploadedFile != None:
            after_file_form =File_after_db(
                file_Title=filetitle,
                after_file=uploadedFile
            )
            after_file_form.save()
            return redirect('smartfarm:index')
        else:
            return redirect("smartfarm:index")

