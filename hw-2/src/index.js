import './index.css';

const addMessage = (message) => {
  Array.from(document.getElementsByClassName("messages")).forEach((messages) => {
    const newMessage = document.createElement("li");
    newMessage.textContent = `${new Date(message["date"]).toLocaleString("ru-RU")} \
    | ${message["sender"]} \
    > ${message["text"]}`;
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

Array.from(document.getElementsByClassName('send-message-form')).forEach((sendMessageForm) => {
  sendMessageForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const messageTextInput = sendMessageForm.getElementsByClassName("send-message-form-text-input")[0];
    sendMessage({ sender: "Alexander Gavrilov", date: Date.now(), text: messageTextInput.value });
    messageTextInput.value = "";
  });
});

//? Стилизовать форму отправки сообщений (в меру возможности), в соответствии с макетом, для позиционирования элементов формы можно использовать CSS Flexbox
//? Настроить деплой ваших страничек на GitHub Pages 
