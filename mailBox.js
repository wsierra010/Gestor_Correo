const mails = document.getElementById('mailbox');
const mailArticle = document.createElement('article');
const mainContainer = document.getElementById('main__container')
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
// const titleArticle = document.createElement('h2');
// const paragraphArticle = document.createElement('p');

// checkbox
checkBox.setAttribute('type','checkbox');
checkBox.setAttribute('id','checked');
// star favorites checkbox
star.setAttribute('type','checkbox');
star.setAttribute('id','favorites');
star.setAttribute('checked','true');
star.classList.add('star');
// fixed checkbox
fixed.setAttribute('type','checkbox');
fixed.setAttribute('id','fixed');
// Add Classes
// titleArticle.classList.add('text');
// paragraphArticle.classList.add('text');

// TextContent
// titleArticle.textContent = 'Daniel Jimenez Prats';
// paragraphArticle.textContent = 'Te enviamos este correo para decir que Daniel Jimenez Prats es un máquina'

// Add content in Article
mailArticle.appendChild(checkBox);
mailArticle.appendChild(star);
mailArticle.appendChild(fixed);
// mailArticle.appendChild(titleArticle);
// mailArticle.appendChild(paragraphArticle);


const CreateModal = document.getElementById('compose');

CreateModal.addEventListener('click', createCompose);

function createCompose(){
    //          Create Compose window Modal
    let window = document.createElement('section');
    // Add content in Compose window section
    let headerCompose = document.createElement('div');
    let destinedCompose = document.createElement('input');
    let subjectCompose = document.createElement('input');
    let textareaCompose = document.createElement('textarea');
    let sentCompose = document.createElement('button');
    // Add AppendChild in window var
    window.appendChild(headerCompose);
    window.appendChild(destinedCompose);
    window.appendChild(subjectCompose);
    window.appendChild(textareaCompose);
    window.appendChild(sentCompose);
    // Add elements in headerCompose
    let paraf = document.createElement('p');
    let icon = document.createElement('i');
    paraf.textContent = "New Message";
    icon.setAttribute('class','fas fa-times cross');

    // Add class list css
    headerCompose.classList.add('headerCompose');

    headerCompose.appendChild(paraf);
    headerCompose.appendChild(icon);

    // Add AppendChild in destinedCompose
    destinedCompose.setAttribute('placeholder','To');
    destinedCompose.classList.add('toInput');

    // Add AppendChild in AffairCompose
    subjectCompose.setAttribute('placeholder','Subject');
    subjectCompose.classList.add('subjectInput')

    // Add lists in TextArea
    textareaCompose.classList.add('textareaCompose');

    // Button send
    let name = document.createElement('p');
    name.textContent = "Send"
    sentCompose.appendChild(name);
    sentCompose.classList.add('sendButton');



    window.classList.add('modal');

    mainContainer.appendChild(window);
}