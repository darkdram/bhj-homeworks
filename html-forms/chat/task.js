let activeChat = document.querySelector('.chat-widget__side');

let messages = document.querySelector('#chat-widget__messages');
let botWait = null;

let botMessages = [
    "Добрый день!",
    "Никого нет, приходите никогда!",
    "Всего доброго!"
];

function sendMessageFromBot(message = null) {
    if (!message) {
        message = botMessages[Math.floor(Math.random() * botMessages.length)];
    }

    return sendMessage(message, 'message');
}

function sendMessageFromClient(message) {
    return sendMessage(message, 'message message_client');
}

function sendMessage(message, selector=null) {
    let now = new Date(),
        time = now.getHours() + ':' + now.getMinutes();

    let messageHtml = `
      <div class="${selector}">
        <div class="message__time">${time}</div>
        <div class="message__text">
          ${message}
        </div>
      </div>`;

    return messageHtml;
}

activeChat.addEventListener('click', () => {
    document.querySelector('.chat-widget').classList.add('chat-widget_active');
    let textField = document.querySelector('#chat-widget__input');

    textField.focus();
    textField.addEventListener("keyup", (event) => {
        if (event.keyCode === 13) {
            let message = textField.value;
            if (message.length > 0) {
                messages.innerHTML += sendMessageFromClient(message);
                messages.innerHTML += sendMessageFromBot();
                textField.value = '';

                let messageContainer = document.querySelector('.chat-widget__messages-container');
                messageContainer.scrollTo(0,messageContainer.scrollHeight);

                if (botWait) {
                    clearTimeout(botWait);
                }

                botWait = setTimeout(() => {
                    messages.innerHTML += sendMessageFromBot('Вам помочь?');
                }, 30000);

            }
        }
    });
});