let form = document.getElementById('form');
let input = document.getElementById('input');
let container = document.querySelector('.container');

form.addEventListener('submit', (e)=>{
    if(input.value == ''){
        alert('Input product name')
    }else{
        e.preventDefault();
        JsBarcode("#barcode",input.value);
        container.classList.add('show');
        input.value = "";
    }
})