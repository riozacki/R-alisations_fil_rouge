/*-----------Récupération d'élément html---------------------*/
const htmlBack = document.getElementsByTagName('html');
const links = document.getElementById('Navbar_links');
const arrayLinks = links.children;
const sectionHome = document.getElementById('section');
const page1 = document.getElementById('page1');
const form = document.getElementById('form1');
const tire = document.getElementsByClassName('tire');
const nav = document.getElementById('nav');
const atelier01 = document.getElementById('atelier01');
const pAcc = document.getElementById('p_acc');
const fieldset = document.querySelector('fieldset');
const search = document.getElementById('search');
const connection = document.getElementById('connexion');


const redColor = document.getElementById('red');
const greenColor = document.getElementById('green');
const purpleColor = document.getElementById('purple');
const blackColor = document.getElementById('black');
const whiteColor = document.getElementById('white');

let clicked = false;
const article1 = document.getElementById('article1');
/*
article1.addEventListener('mouseover', (e) => {
    if (clicked === false) {
        const desc = document.createElement('div');
        desc.textContent = "Descrition :";
        document.body.appendChild(desc);
        clicked = true;
    }
})
*/
//console.log(arrayLinks);
arrayLinks[1].addEventListener('click', (e) => {
    sectionHome.style.display = "none";
    page1.style.display = "flex";
    form.style.display = "none";
    atelier01.style.display = "none";
    search.style.display ="flex";
    connection.style.display = "none";
})
arrayLinks[0].addEventListener('click', (e) => {
    sectionHome.style.display = "grid";
    page1.style.display = "none";
    form.style.display = "none";
    atelier01.style.display = "";
    search.style.display ="none";
    connection.style.display = "none";
})
arrayLinks[2].addEventListener('click', (e) => {
    sectionHome.style.display = "none";
    page1.style.display = "none";
    form.style.display = "flex";
    atelier01.style.display = "none";
    search.style.display ="none";
    connection.style.display = "none";
})
arrayLinks[3].addEventListener('click', (e) => {
    sectionHome.style.display = "none";
    page1.style.display = "none";
    form.style.display = "none";
    atelier01.style.display = "none";
    search.style.display ="none";
    connection.style.display = "grid";
})


function changeTheme() {

    redColor.addEventListener('click', (e) => { //purple
        nav.style.color = 'white';
        nav.style.backgroundColor = 'rgb(78, 42, 67)';
        // tire.style.backgroundColor = 'rgb(78, 42, 67)'; 
        // document.body.style.backgroundColor ="red";
        pAcc.style.backgroundColor = 'rgba(129, 25, 89, 0.116)';
        page1.style.backgroundColor = 'rgb(78, 42, 67)';
        document.body.style.backgroundColor = 'white';
        pAcc.style.color = 'black';
        fieldset.style.backgroundColor ='rgb(78, 42, 67)';
        fieldset.style.borderColor = 'rgb(78, 42, 67)';
    })
    greenColor.addEventListener('click', (e) => { //blue
        nav.style.color = 'white';
        nav.style.backgroundColor = 'rgb(49, 62, 110)';
        pAcc.style.backgroundColor = 'rgba(7, 119, 255, 0.116)';
        page1.style.backgroundColor = 'rgb(49, 62, 110)';
        document.body.style.backgroundColor = 'white';
        pAcc.style.color = 'black';
        fieldset.style.backgroundColor = "rgb(49, 62, 110)";
        fieldset.style.borderColor = "rgb(49, 62, 110)";
    })
    purpleColor.addEventListener('click', (e) => {
        nav.style.color = 'white';
        nav.style.backgroundColor = 'rgb(88, 110, 83)'; //green
        //document.body.style.backgroundImage = "url('/img/back03green.jpg')";
        pAcc.style.backgroundColor = 'rgba(25, 129, 56, 0.116)';
        page1.style.backgroundColor = 'rgb(88, 110, 83)';
        document.body.style.backgroundColor = 'white';
        pAcc.style.color = 'black';
        fieldset.style.backgroundColor = 'rgb(88, 110, 83)';
        fieldset.style.borderColor =  'rgb(88, 110, 83)';
    })
    blackColor.addEventListener('click', (e) => {
        nav.style.color = 'white';
        nav.style.backgroundColor = 'black';
        pAcc.style.backgroundColor = 'black';
        pAcc.style.color = 'white';
        page1.style.backgroundColor = "black";
        document.body.style.backgroundColor = 'grey';
        pAcc.style.borderColor = 'grey';
        fieldset.style.backgroundColor = 'black';
        fieldset.style.borderColor =  'black';
    
    })
    whiteColor.addEventListener('click', (e) => {
        nav.style.backgroundColor = 'white';
        nav.style.color = 'black';
        pAcc.style.backgroundColor = 'white';
        pAcc.style.color = 'black';
        page1.style.backgroundColor = "white";
        document.body.style.backgroundColor = 'white';
        pAcc.style.borderColor = 'grey';
        fieldset.style.backgroundColor = 'white';
        fieldset.style.borderColor =  'white';
    })
}
changeTheme();

/*--------------Local Storage-------------------------------------------*/

function createLocalStorage(){
    const button = document.querySelector('button'); 
    button.onclick = () => {
        myData = localStorage;
        localStorage.setItem("nom", nom.value);
        localStorage.setItem("prenom", prenom.value);
        localStorage.setItem("mail", mail.value);
        localStorage.setItem("tel", tel.value);
        localStorage.setItem("adress", adress.value);
        localStorage.setItem("pseudo", pseudo.value);
        localStorage.setItem("pwd", pwd.value);
        localStorage.setItem("pwdc", pwdc.value);
    }
}
createLocalStorage();

function deleteLocalStorage(){
    const deleteButton = document.getElementById('delete');
    deleteButton.addEventListener('click', (e) => {
        localStorage.clear();
    })
}
deleteLocalStorage();

