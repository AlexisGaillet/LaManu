                // PARTIE 1 - LES VARIABLES ET LES FONCTIONS D'AFFICHAGE

        // EXERCICE 1

// let message = 'message en alert';
// alert(message);




        // EXERCICE 2

// let firstPart='Première partie et la';
// let lastPart='seconde partie du message';

// alert(firstPart + lastPart);




        // EXERCICE 3

// let firstName='Alexis';
// let age=21;
// let city='Amiens';

// alert(`Bonjour, je m\'appelle ${firstName}, j\'ai ${age} ans et j\'habite ${city} `);




        // EXERCICE 4

// let firstName=prompt("Le prénom ?");
// let age=prompt("Ton age ?");
// let city=prompt("La ville ?");

// alert(`Bonjour, je m\'appelle ${firstName}, j\'ai ${age} ans et j\'habite à ${city} `);




        // EXERCICE 5

// let firstNumber=prompt("Premier nombre ?");
// let secondNumber=prompt("Second nombre ?");
// let calcResult= Number(firstNumber)+Number(secondNumber);

// alert(`Le résultat est ${calcResult} car ${firstNumber} + ${secondNumber} = ${calcResult}`);






                // PARTIE 2 - LES CONDITIONS

        // EXERCICE 1

// let number= 22;

// if (number > 21) {
//     alert('message')
// };




        // EXERCICE 2

// let age=prompt("Ton age ?");

// if (age > 18) {
//     alert('Vous êtes majeur');
// } else {
//     alert('Vous êtes mineur');
// }




        // EXERCICE 3

// let number=prompt("Un nombre ?")

// if (number%2 == 0) {
//     alert('Nompre Pair');
// } else {
//     alert('Nombre impair');
// }




        // EXERCICE 4

// let note=prompt("Une note ?")

// if (note > 0 && note < 4) {
//     alert('Nul');
// } else if (note >= 4 && note < 6) {
//     alert('Moyen');
// } else if (note >= 6 && note < 8) {
//     alert('Assez bien');
// } else if (note >= 8 && note < 9) {
//     alert('Bien');
// } else if (note >= 9 && note <= 10) {
//     alert('Excellent');
// }




        // EXERCICE 5

// let day=2;

// switch (day) {
//     case 1:
//         alert('Lundi');
//         break;
//     case 2:
//         alert('Mardi');
//         break;
//     case 3:
//         alert('Mercredi');
//         break;
//     case 4:
//         alert('Jeudi');
//         break;
//     case 5:
//         alert('Vendredi');
//         break;
//     case 6:
//         alert('Samedi');
//         break;
//     case 7:
//         alert('Dimanche');
//         break;
// }






                // PARTIE 3 - LES BOUCLES

        // EXERCICE 1

// for (let years= 2020; years <= 2030; years++); {
//         if (years % 4 === 0 && years % 100 !== 0 || years %400 === 0) {
//         document.write('<div class="red">' + years + '</div>')
//         } else {
//                 document.write('<div class="black">' + years + '</div>')
//         }
// }




        // EXERCICE 2

// for (let numbers= 0; numbers <= 100; numbers++) {
//         if (numbers % 15 === 0) {
//                 document.write('<div>'+'...'+'</div>');
//         } else {
//                 document.write('<div>'+numbers+'</div>');
//         }
// }




        // EXERCICE 3

// let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];

// for (let count = 0; count <= 7; count++) {
//         document.write(' '+languages[count]+' ')
// }




        // EXERCICE 4

// let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];

// for (let count = 0; count < 7; count++) {
//         if (count >= 5) {
//                 document.write('<div><strong>'+days[count]+'</strong></div>')
//         } else {
//                 document.write('<div>'+days[count]+'</div>')    
//         }
// }




        // EXERCICE 5

// let firstNumber= 5;
// let secondNumber= 10;
// console.log('toto');
// if (firstNumber <= 1 || firstNumber > 10) {
//         document.write("Veuillez mettre un nombre entre plus de 1 et 10");
// } else {
//         while (secondNumber <= 250) {
//                 // if (secondNumber < 1 || secondNumber > 10) {
//                 //         document.write("Veuillez mettre un nombre entre 1 et 10");
//                 // } else {
//                         secondNumber = firstNumber * secondNumber;
//                         if(secondNumber <= 250) {
//                                 document.write(' '+ secondNumber +' ');
//                         }
//                 // }
//                 console.log(secondNumber);
//         }
// }




        // EXERCICE 6

// let firstNumber = prompt("Premier nombre ?");
// let secondNumber = prompt("Second nombre ?");
//         if (firstNumber <= 1 && firstNumber >= 10) {
//                 document.write("Veuillez mettre un nombre entre plus de 1 et 10");
//         } else {
//                 while (firstNumber > 1) {
//                         console.log('ok')
//                         if (secondNumber < 1 || secondNumber > 10) {
//                                 document.write("Veuillez mettre un nombre entre 1 et 10");
//                         } else {
        //                         firstNumber = firstNumber / secondNumber
        //                         document.write(' '+ firstNumber +' ')
//                         }
//                 }
//         }






                // PARTIE 4 - LES FONCTIONS

        // EXERCICE 1

// function calc() {
//         let n1 = parseInt(document.getElementById('n1').value);
//         let n2 = parseInt(document.getElementById('n2').value);
//         let result = document.getElementById('result');

//         result.value = n1 * n2;
// }

// document.getElementById('btn').addEventListener('click', calc)




        // EXERCICE 2

// function style (styleCSS){
//         let paragraphs = document.querySelectorAll('p');
//         for (let paragraph of paragraphs) {
//         paragraph.classList.toggle(styleCSS);
//         }
// }

// document.querySelectorAll('button')[0].addEventListener('click', function(){
//         style('bold');
// })

// document.querySelectorAll('button')[1].addEventListener('click', function(){
//         style('color');
// })

// document.querySelectorAll('button')[2].addEventListener('click', function(){
//         style('size');
// })




        // EXERCICE 3

// let calc=() => {
//         let n1 = parseInt(document.getElementById('n1').value);
//         let n2 = parseInt(document.getElementById('n2').value);
//         let result = document.getElementById('result');

//         document.getElementById('result').value = n1 * n2;
// }




        // EXERCICE 4

// let sizeUp = () => {
//         let image = document.querySelectorAll('img')[0];
//         let size = image.clientWidth;
//         image.style.width = "100%";
// }

// document.querySelectorAll('img')[0].addEventListener('click', sizeUp, {})




        // EXERCICE 5

// function getStringLength(string){
//         let stringLength;
//         if(string.length === 1){
//                 stringLength = 'La chaîne contient qu\'un seul caractère';
//         } else {
//                 stringLength = `La chaîne contient ${string.length} caractères`;
//         }
//         return stringLength;
//         }
                        // TRADUCTION :
// let getStringLength = (string) => {
//         let stringLength;
//         if(string.length === 1){
//                 stringLength = 'La chaîne contient qu\'un seul caractère';
//         } else {
//                 stringLength = `La chaîne contient ${string.length} caractères`;
//         }
//         return stringLength;
//         }




        // EXERCICE 6

// (name) =>  `Bonjour, ${name} ! Comment vas-tu ?`;
                        // TRADUCTION
// function sayHello(name) {
//         document.write(`Bonjour, ${name} ! Comment vas-tu ?`);
// }

// sayHello(`Alexis`)






                // PARTIE 5 - LES EVENEMENTS ET LA MANIPULATION DU DOM

        // EXERCICE 1

// passwordCheck = () => {
//         let password = document.getElementById('password');
//         let confirmPassword = document.getElementById('confirmPassword');
//         if (password.value === confirmPassword.value) {
//                 console.log('correct')
//                 password.classList.add("passwordGreen");
//                 confirmPassword.classList.add("passwordGreen");
//                 password.classList.remove("passwordRed");
//                 confirmPassword.classList.remove("passwordRed");
//         } else {
//                 console.log('wrong')
//                 password.classList.add("passwordRed");
//                 confirmPassword.classList.add("passwordRed");
//                 password.classList.remove("passwordGreen");
//                 confirmPassword.classList.remove("passwordGreen");
//         }
// }

// document.getElementById('btn').addEventListener('click', passwordCheck)




        // EXERCICE 2

