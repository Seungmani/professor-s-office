//dropdown에서 열 추출 및 x,y 축 값 설정
function Select() {
    let i;
    arr = document.getElementById("jsonObject").textContent;
    // 선택된 열
    selected_column = $("#data_select option:selected").text()
    console.log(selected_column);
    arr = JSON.parse(arr);
    // 열 이름이 같을 때 i값 반환
    for (i = 0; i < arr.length; i++) {
        if (Object.keys(arr[0])[i] === selected_column) {
            break;
        }
    }
    // x,y 값 
    for (let j = 0; j < arr.length; j++) {
        arr_x[j] = (Object.values(arr[j])[0]); // x
        arr_y[j] = (Object.values(arr[j])[i]); // y
    }
}

// 그래프 그리기
document.getElementById('draw').onclick = function () {

    // x축 변수들
    const labels = arr_x;
    // 데이터
    const data = {
        labels: labels,
        datasets: [{
            label: 'DATA',
            borderColor: 'rgb(255, 99, 132)',
            data: arr_y,
            fill: true,
        }]
    };
    // 설정 값
    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            diplay: 'auto',
            scales: {
                xAxes: [{
                    barThickness: 50,
                    gridLines: {
                        display: false
                    },
                    offset: true
                }],
            }
        }
    };
    // 그리기
    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
};