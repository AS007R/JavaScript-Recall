let msg = document.querySelector('button');
msg.addEventListener('click', getName);

let text = document.getElementById('text');

// function showMsg() {
//     alert("Hello from Asad");
// }
function getName() {
    let name = prompt('Enter your name: ')
    text.textContent= 'Entered name is '+ name;
}