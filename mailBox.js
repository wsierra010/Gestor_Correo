const mails = document.getElementById('mailbox');
const mailArticle = document.createElement('article');

// Create Article in MailBox
mailArticle.setAttribute('id','mail');
mailArticle.classList.add('main__mailArticle');
mailArticle.classList.add('col-xs-12');

// Add this Article in Section mailbox
mails.appendChild(mailArticle);

// Create content in mailArticle
const titleArticle = document.createElement('h2');
const paragraphArticle = document.createElement('p');

// Clases and ID
titleArticle.classList.add('text');
paragraphArticle.classList.add('text');

// TextContent
titleArticle.textContent = 'Assembler School BCN';
paragraphArticle.textContent = 'Wednesday: Join us at "From 0 to product, a decision-driven path to success"'

// Add content in Article
mailArticle.appendChild(titleArticle);
mailArticle.appendChild(paragraphArticle);