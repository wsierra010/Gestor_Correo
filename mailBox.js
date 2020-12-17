const mails = document.getElementById('mailbox');
const mailArticle = document.createElement('article');
// Array para guardar todos los correos
let ContMailBox = [];

// Create Article in MailBox
mailArticle.setAttribute('id','mail');
mailArticle.classList.add('main__mailArticle');
mailArticle.classList.add('col-xs-12');

// Add this Article in Section mailbox
mails.appendChild(mailArticle);

// Create content in mailArticle
const checkBox = document.createElement('input');
const star = document.createElement('input');
const fixed = document.createElement('input');
const titleArticle = document.createElement('h2');
const paragraphArticle = document.createElement('p');

// checkbox
checkBox.setAttribute('type','checkbox');
checkBox.setAttribute('id','checked');
// star favorites checkbox
star.setAttribute('type','checkbox');
star.setAttribute('id','favorites');
// fixed checkbox
fixed.setAttribute('type','checkbox');
fixed.setAttribute('id','fixed');
// Add Classes
titleArticle.classList.add('text');
paragraphArticle.classList.add('text');

// TextContent
titleArticle.textContent = 'Daniel Jimenez Prats';
paragraphArticle.textContent = 'Te enviamos este correo para decir que Daniel Jimenez Prats es un máquina'

// Add content in Article
mailArticle.appendChild(checkBox);
mailArticle.appendChild(star);
mailArticle.appendChild(fixed);
mailArticle.appendChild(titleArticle);
mailArticle.appendChild(paragraphArticle);


console.log(mailArticle);

function pruebas(){
    for(i=0; i<50; i++){
        mailArticle.innerHTML;
    }
}