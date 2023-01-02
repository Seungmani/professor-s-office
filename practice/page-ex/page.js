const $ls = document.querySelector('#listset');
const $list1 = document.querySelector('#list1');
const $list2 = document.querySelector('#list2');
const $list3 = document.querySelector('#list3');
const $list4 = document.querySelector('#list4');
const $ex1 = document.querySelector('#ex1');
const $ex2 = document.querySelector('#ex2');
const $ex3 = document.querySelector('#ex3');
const $ex4 = document.querySelector('#ex4');


$ls.addEventListener('click', (event)=>{
    event.preventDefault();
    if (event.target.textContent==='1'){
        // 색상
        $list1.style.backgroundColor='blue';
        $list1.style.color='white';
        $list2.style.backgroundColor='white';
        $list2.style.color='black';
        $list3.style.backgroundColor='white';
        $list3.style.color='black';
        $list4.style.backgroundColor='white';
        $list4.style.color='black';

        // div
        $ex1.style.display='block';
        $ex2.style.display='none';
        $ex3.style.display='none';
        $ex4.style.display='none';
    } else if(event.target.textContent==='2'){
        $list2.style.backgroundColor='blue';
        $list2.style.color='white';
        $list1.style.backgroundColor='white';
        $list1.style.color='black';
        $list3.style.backgroundColor='white';
        $list3.style.color='black';
        $list4.style.backgroundColor='white';
        $list4.style.color='black';

        // div
        $ex2.style.display='block';
        $ex1.style.display='none';
        $ex3.style.display='none';
        $ex4.style.display='none';
    } else if(event.target.textContent==='3'){
        $list3.style.backgroundColor='blue';
        $list3.style.color='white';
        $list1.style.backgroundColor='white';
        $list1.style.color='black';
        $list2.style.backgroundColor='white';
        $list2.style.color='black';
        $list4.style.backgroundColor='white';
        $list4.style.color='black';

        // div
        $ex3.style.display='block';
        $ex1.style.display='none';
        $ex2.style.display='none';
        $ex4.style.display='none';
    } else if(event.target.textContent==='4'){
        $list4.style.backgroundColor='blue';
        $list4.style.color='white';
        $list1.style.backgroundColor='white';
        $list1.style.color='black';
        $list2.style.backgroundColor='white';
        $list2.style.color='black';
        $list3.style.backgroundColor='white';
        $list3.style.color='black';

        // div
        $ex4.style.display='block';
        $ex1.style.display='none';
        $ex2.style.display='none';
        $ex3.style.display='none';
    }
});


