const list = document.querySelector('.messages');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));
let html=data;

list.innerHTML+=html;


// This function will enables us to add the message to the DOM
function addMessage(text){


    //Render message to the screen

    list.insertAdjacentHTML("beforeend",
        `<p class="message-item">
            <span>${text}</span>
        </p>`);

    html+=`<p class="message-item">
            <span>${text}</span>
        </p>`
    localStorage.setItem('items', JSON.stringify(html));

}

//Create event listener to detect when a message has been submitted
const form = document.querySelector('.message-form');


form.addEventListener('submit', event => {
    event.preventDefault();

    //input to save the message itself
    const input = document.querySelector('.typedMessage');

    //This helps us to detect empty messages and ignore them
    const text = input.value.trim();

    if(text !== ''){
        addMessage(text);
        input.value = '';
        input.focus();

    }
});