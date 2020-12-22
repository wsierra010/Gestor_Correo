var contador = 0;
const mails = document.getElementById('mailbox');
const mainContainer = document.getElementById('main__container')
// Array que guarda los mails en tipo objeto
let ContMailBox = [];

obtener();
printMail();

function articleMail(to, subject, textcontent, id){

    // Create general container
    const mailArticle = document.createElement('article');
    // Add Clases and Id in MailArticle
    mailArticle.setAttribute('id','mail');
    mailArticle.classList.add('main__mailArticle');
    mailArticle.classList.add('col-xs-12');

    // Create content in mailArticle
    const checkboxes = document.createElement('figure');
        const checkBox = document.createElement('input');
        const star = document.createElement('input');
        const fixed = document.createElement('input');
    // Create figures for put the information mails
    const toTitle = document.createElement('figure');
    const subjectMain = document.createElement('figure');
    const textareaFooter = document.createElement('figure');

    // Add classes in checkboxes figure
    checkboxes.setAttribute('class','col-xs-1');
        // checkbox
        checkBox.setAttribute('type','checkbox');
        checkBox.setAttribute('value',id);
        checkBox.classList.add('delete');
        checkBox.addEventListener('click', deletMail);
        // star favorites checkbox
        star.setAttribute('type','checkbox');
        star.setAttribute('id','favorites');
        star.setAttribute('checked','true');
        star.classList.add('star');
        // fixed checkbox
        fixed.setAttribute('type','checkbox');
        fixed.setAttribute('id','fixed');


    // Clases and Atributtes in Mails Content
    toTitle.setAttribute('id','first');
    toTitle.setAttribute('class','col-xs-3');
    subjectMain.setAttribute('id','second');
    subjectMain.setAttribute('class','col-xs-3');
    textareaFooter.setAttribute('id','third');
    textareaFooter.setAttribute('class','col-xs-5');

    // Add checkbox in first figure
    checkboxes.appendChild(checkBox);
    checkboxes.appendChild(star);
    checkboxes.appendChild(fixed);
    // Add figures in MailArticle
    mailArticle.appendChild(checkboxes);
    mailArticle.appendChild(toTitle);
    mailArticle.appendChild(subjectMain);
    mailArticle.appendChild(textareaFooter);

    // Asignation parameters function
    toTitle.innerHTML = to;
    subjectMain.innerHTML = subject;
    textareaFooter.innerHTML = textcontent;

    return mailArticle;
}

// Create Modal window compose
const CreateModal = document.getElementById('compose');
CreateModal.addEventListener('click', createCompose);

function createCompose(){
    // Create Compose window Modal
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

    // Add elements in HeaderCompose
    sentCompose.setAttribute('id','exit');
    // Paragraph Text
    let paraf = document.createElement('p');
    paraf.setAttribute('class','textTitle')
    paraf.textContent = "New Message";
    // Icon Fontawesome
    let icon = document.createElement('i');
    icon.setAttribute('class','fas fa-times cross');
    icon.setAttribute('id','close');

    // Add ClassList in HeaderCompose
    headerCompose.classList.add('headerCompose');

    headerCompose.appendChild(paraf);
    headerCompose.appendChild(icon);

    // Add AppendChild in destinedCompose
    destinedCompose.setAttribute('placeholder','To');
    destinedCompose.setAttribute('id','toInput');
    destinedCompose.classList.add('toInput');

    // Add AppendChild in SubjectCompose
    subjectCompose.setAttribute('placeholder','Subject');
    subjectCompose.setAttribute('id','subjectInput');
    subjectCompose.classList.add('subjectInput')

    // Add lists in TextArea
    textareaCompose.classList.add('textareaCompose');
    textareaCompose.setAttribute('id','textareaInput');

    // Button send
    let name = document.createElement('p');
    name.textContent = "Send"
    sentCompose.appendChild(name);
    sentCompose.classList.add('sendButton');
    sentCompose.setAttribute('id','send');

    // Add Class CSS Style in Modal Window
    window.classList.add('modal');

    // Add Modal Window in mainContainer
    mainContainer.appendChild(window);

    // Function Close Modal Window
    const close = document.getElementById('close');
    close.addEventListener('click', exit);

    // Button Close Window Modal
    function exit(){
        window.remove();
    }

    // Function Create Object Mail and Send in mainContainer
    const sendButton = document.getElementById('send');
    sendButton.addEventListener('click', Mail);

    // Function Create Object Mail
    function Mail(){
        contador++;
        const toInput = document.getElementById('toInput').value;
        const subjectInput = document.getElementById('subjectInput').value;
        const textareaInput = document.getElementById('textareaInput').value;

        // Object
        MailContent={
            id: contador,
            to: toInput,
            subject: subjectInput,
            textcontent: textareaInput
        }
        capturar();
        saveLocalStorage();
        // console.log(MailContent);

        // Function push object in ContMail Box Array
        // console.log(ContMailBox);

        // Get Inputs information
        let first = document.getElementById('first');
        let second = document.getElementById('second');
        let third = document.getElementById('third');

        // Close Window Modal After click Send
        window.remove();
        printMail();

    }

    function capturar(){
        // console.log('Dani Jimenez Maquina')
        ContMailBox.push(MailContent);
    }
}           //          Finally Function Create Compose


function printMail(){
    // Empty mailBox Container
    mails.innerHTML = "";
    // Create iterator Foreach every time an object is created
    ContMailBox.forEach(e => {
    // console.log(e.textcontent, e.subject, e.to);
    let variable = articleMail(e.to, e.subject, e.textcontent,e.id);
    mails.appendChild(variable);
    // console.log(variable);
    });
}

function saveLocalStorage(){
    let json = JSON.stringify(ContMailBox);

    localStorage.setItem('mails', json);
    localStorage.setItem('contador',contador);
}

function obtener(){

    if(localStorage.getItem('mails')){
        let json = localStorage.getItem('mails');
        contador = localStorage.getItem('contador');

        ContMailBox = JSON.parse(json);

    }
}

function deletMail(event){
    ContMailBox.forEach((e,i) => {
        // console.log(event.target.value);
        // console.log(e.id);
        if(event.target.value == e.id){
            ContMailBox.splice(i, 1);
        }
    });
    printMail();
    saveLocalStorage();
}






