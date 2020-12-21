const mails = document.getElementById('mailbox');
const mainContainer = document.getElementById('main__container')
// Array para guardar todos los correos



function articleMail(to, subject, textcontent){
    const mailArticle = document.createElement('article');
    // Create Article in MailBox
    mailArticle.setAttribute('id','mail');
    mailArticle.classList.add('main__mailArticle');
    mailArticle.classList.add('col-xs-12');

    // Add this Article in Section mailbox
    // mails.appendChild(mailArticle);

    // Create content in mailArticle
    const checkboxes = document.createElement('figure');
    const checkBox = document.createElement('input');
    const star = document.createElement('input');
    const fixed = document.createElement('input');
    const toTitle = document.createElement('figure');
    const subjectMain = document.createElement('figure');
    const textareaFooter = document.createElement('figure');

    // Add classes in checkboxes figure
    checkboxes.setAttribute('class','col-xs-1');
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


    // Clases and Atributtes in Mails Content
    toTitle.setAttribute('id','first');
    toTitle.setAttribute('class','col-xs-3');
    subjectMain.setAttribute('id','second');
    subjectMain.setAttribute('class','col-xs-3');
    textareaFooter.setAttribute('id','third');
    textareaFooter.setAttribute('class','col-xs-5');

    // Add content in Article
    checkboxes.appendChild(checkBox);
    checkboxes.appendChild(star);
    checkboxes.appendChild(fixed);
    mailArticle.appendChild(checkboxes);
    mailArticle.appendChild(toTitle);
    mailArticle.appendChild(subjectMain);
    mailArticle.appendChild(textareaFooter);

    toTitle.innerHTML = to;
    subjectMain.innerHTML = subject;
    textareaFooter.innerHTML = textcontent;


    return mailArticle;
}




// Create Modal window compose

let ContMailBox = [];
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
    sentCompose.setAttribute('id','exit');
    let paraf = document.createElement('p');
    let icon = document.createElement('i');
    paraf.textContent = "New Message";
    icon.setAttribute('class','fas fa-times cross');
    icon.setAttribute('id','close');
    paraf.setAttribute('class','textTitle')

    // Add class list css
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



    window.classList.add('modal');

    mainContainer.appendChild(window);




    const close = document.getElementById('close');
    close.addEventListener('click', exit);

    function exit(){
        window.remove();
    }

    const sendButton = document.getElementById('send');
    sendButton.addEventListener('click', Mail);


    function Mail(){
        const toInput = document.getElementById('toInput').value;
        const subjectInput = document.getElementById('subjectInput').value;
        const textareaInput = document.getElementById('textareaInput').value;

        MailContent={
            to: toInput,
            subject: subjectInput,
            textcontent: textareaInput
        }
        // console.log(MailContent);

        capturar();

        function capturar(){
            // console.log('Dani Jimenez Maquina')
            ContMailBox.push(MailContent);
        }
        // console.log(ContMailBox);

        let first = document.getElementById('first');
        let second = document.getElementById('second');
        let third = document.getElementById('third');

        window.remove();
        mails.innerHTML = "";
        ContMailBox.forEach(e => {
            console.log(e.textcontent, e.subject, e.to);
            let variable = articleMail(e.to, e.subject, e.textcontent);
            mails.appendChild(variable);
            console.log(variable);
        });
    }


}



