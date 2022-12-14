const arr_y = []; // y축
const arr_x = []; // x축 
let draw_data = []; // chart 데이터
let selected_column; // select 태그에서 선택한 열 이름

//dropdown에서 열 추출 및 x,y축 값 설정
function Select() {
    let k;
    arr = document.getElementById("jsonObject").textContent;
    
    // 선택된 열
    selected_column = $("#data_select option:selected").text()

    // arr이 문자열이라 json으로
    arr = JSON.parse(arr);

    for (i = 0; i < arr.length; i++) {
        if (Object.keys(arr[0])[i] === selected_column) {
            break;
        }
    }

    // x,y 값 
    for (let j = 0; j < arr.length; j++) {
        arr_x[j] = (Object.values(arr[j])[0]); // x
        //arr_y[j] = (Object.values(arr[j])[i]); // y축 분리?
    }
}

document.querySelector('#add').onclick = function () {
    // 그래프 색상
    let RGB_1 = Math.floor(Math.random() * (255 + 1));
    let RGB_2 = Math.floor(Math.random() * (255 + 1));
    let RGB_3 = Math.floor(Math.random() * (255 + 1));

    draw_data.push({
        label: selected_column, // 데이터의 제목
        borderColor: 'rgba(' + RGB_1 + ',' + RGB_2 + ',' + RGB_3 + ',0.3)', // 색상
        data: arr.map(arr_y => arr_y[selected_column]), // 데이터
    },)
    console.log(draw_data);
}

// 그래프 그리기
document.getElementById('draw').onclick = function () {
    // div 및 화살표 조정
    $('.grim').css('height', '500px');
    $('#down').css('display', 'none');
    $('#up').css('display', 'block');

    // x축 변수들
    const labels = arr_x;

    // 데이터
    const data = {
        labels: labels,
        datasets: draw_data,
    };
    // 설정 값
    const config = {
        type: 'line', // 그래프 종류
        data: data, // 데이터
        options: {
            responsive: false, // false=그래프 크기를 css를 이용 지정 가능
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
    const myChart = new Chart(document.getElementById('myChart'), config);
};