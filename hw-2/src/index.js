import './index.css';

const addMessage = (message) => {
  Array.from(document.getElementsByClassName("messages")).forEach((messages) => {
    const newMessage = document.createElement("li");
    newMessage.setAttribute("class", "message");
    const time = document.createElement("span");
    time.setAttribute("class", "message-time");
    time.textContent = new Date(message["date"]).toLocaleString("ru-RU");
    const sender = document.createElement("span");
    sender.setAttribute("class", "message-sender");
    sender.textContent = message["sender"];
    const text = document.createElement("span");
    text.setAttribute("class", "message-text");
    text.textContent = message["text"];
    newMessage.append(time, sender, text);
    messages.appendChild(newMessage);
  });
};

const saveMessageToStorage = (message) => {
  let messagesFromStorage = localStorage.getItem("messages");
  messagesFromStorage = messagesFromStorage ? JSON.parse(messagesFromStorage) : [];
  messagesFromStorage.push(message);
  localStorage.setItem("messages", JSON.stringify(messagesFromStorage));
};

const sendMessage = (message) => { addMessage(message), saveMessageToStorage(message) };

const messagesFromStorage = localStorage.getItem("messages");
if (messagesFromStorage) JSON.parse(messagesFromStorage).forEach(addMessage);

const sender = prompt("Введите Ваше имя: ");

Array.from(document.getElementsByClassName('send-message-form')).forEach((sendMessageForm) => {
  sendMessageForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const messageTextInput = sendMessageForm.getElementsByClassName("send-message-form-text-input")[0];
    if (!messageTextInput.value) return;
    sendMessage({ sender, date: Date.now(), text: messageTextInput.value });
    messageTextInput.value = "";
  });
});
