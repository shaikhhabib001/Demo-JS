let rollnum = document.getElementById('roll');
let naam = document.getElementById('nam');

rollnum.addEventListener('click', inputMsg);
naam.addEventListener('click', inputNam);

function inputMsg() {
    let roll = prompt('Enter Your Roll Number');
    rollnum.textContent = 'Roll Number: ' + roll;
}
function inputNam() {
    let name = prompt('Enter Your Name');
    naam.textContent = 'Name: ' + name;
}