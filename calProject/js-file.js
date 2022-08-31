//main
const digitBtns = document.querySelectorAll('button.digit');
const opBtns = document.querySelectorAll('button.operator');
const equalBtn = document.querySelector('button.equal');
const display = document.querySelector('.display');

let a = null, b = null, op=null, oPressed = false;

digitBtns.forEach(dbtn => dbtn.addEventListener('click', function () {
    if(!oPressed)
        display.textContent+=this.textContent;
    else
    {
        display.textContent=this.textContent;
        oPressed=false;
    }
}));

opBtns.forEach(obtn => obtn.addEventListener('click', function () {
    if(display.textContent=='')return;
    if(op){
        b=Number(display.textContent);
        operate();
        a=Number(display.textContent);
        op=this.textContent;
        oPressed=true;
        return;
    }
    oPressed=true;
    op=this.textContent;
    a=Number(display.textContent);
}));

equalBtn.addEventListener('click', operate);



function operate() {
    if (!a)
        return;
    b=Number(display.textContent);
    let result;
    switch (op) {
        case 'x':
            result = a * b;
            break;
        case '/':
            result = (a / b).toFixed(2);
            break; 
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
    }
    a=null,b=null,op=null;
    display.textContent = String(result);
}



