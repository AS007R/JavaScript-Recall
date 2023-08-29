// let msg = document.querySelector('button');
// msg.addEventListener('click', getName);

// let text = document.getElementById('text');

// function showMsg() {
//     alert("Hello from Asad");
// }
// function getName() {
//     let name = prompt('Enter your name: ')
//     text.textContent= 'Entered name is '+ name;
// }


// let x = 3 == '3.0';
// console.log(x);

// let car = prompt("Kon si car chahiay? ")

// switch (car) {
//     case 'Carola':
//         console.log(`${car} 10k per day rent pay available hy`);
//         break;
//     case 'City':
//         console.log(`${car} 12k per day rent pay available hy`);
//         break;
//     case 'BMW':
//         console.log(`${car} 30k per day rent pay available hy`);
//         break;
//     case 'Alto':
//         console.log(`${car} 8k per day rent pay available hy`);
//         break;
//     case 'Mehran':
//         console.log(`${car} 7k per day rent pay available hy`);
//         break;
    

//     default:
//         console.log(`${car} rent pay available nai hy koi or dekh len`);
//         break;
// }


// let msg = document.querySelector('button');
// msg.addEventListener('click', getName);

// let text = document.getElementById('text');

// function getName() {
//     let name = prompt ("Enter your name: ")
//     let count = prompt ("Enter any number: ")
    
//     for (let i=0; i<count; i++){
//         let textNew =text.textContent + `Your name is ${name}`;
//         text.textContent=textNew;
//     }

// }
// let msg = document.querySelector('button');
// msg.addEventListener('click', getName);

// let text = document.getElementById('text');

// function getName() {
//     let name = prompt ("Enter your name: ")
//     let count = prompt ("Enter any number: ")
    
//     let i=0;
//     while (i<count) {
//         let textNew =text.textContent + ` Your name is ${name}`;
//         text.textContent=textNew;
//         i++;
//     }

// }

let msg = document.querySelector('button');
msg.addEventListener('click', getName);

let text = document.getElementById('text');

function getName() {
    let name = prompt ("Enter your name: ")
    let count = prompt ("Enter any number: ")
    
    let i=0;
    do {
        let textNew =text.textContent + ` Your name is ${name}`;
        text.textContent=textNew;
        i++;
    }while (i<count)

}