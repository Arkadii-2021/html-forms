const messages = document.querySelector('.chat-widget__messages');
const chatWidget = document.querySelector('.chat-widget');
const chatWidgetInput = document.getElementById('chat-widget__input');
const ChatContainer = document.querySelector('.chat-widget__messages-container');

activWidgetChat();

function activWidgetChat() {
	chatWidget.addEventListener('click', () => {
		chatWidget.classList.add('chat-widget_active');
	});
	chatWidgetInput.addEventListener('keydown', (event) => {
	if (event.key == 'Enter' && chatWidgetInput.value != '') {
		messages.innerHTML += `
		<div class="message message_client">
		 <div class="message__time">${getTime()}</div>
		 <div class="message__text">
		  ${chatWidgetInput.value}
		 </div>
		</div>
		`;
		ChatContainer.scrollTop = 9999;
		chatWidgetInput.value = '';
		setTimeout(botMsg, randomInteger(1000, 3000));
	}
})};

function getTime() {
	var time = new Date();
    return `${time.getHours()}:${time.getMinutes()}`;
};
    
function botMsg() {
	words = ['Ожидайте ответа', 'Не понял вопроса', 'ОК!'];
	messages.innerHTML += `
	<div class="message">
	 <div class="message__time">${getTime()}</div>
	 <div class="message__text">
	  ${getRandomPhrase(words)}
	 </div>
	</div>
	`;
	ChatContainer.scrollTop = 9999;
};

function getRandomPhrase(phrases) {
	return phrases[Math.floor(Math.random() * phrases.length)]
};

function randomInteger(minTime, maxTIme) {
  return Math.floor(minTime + Math.random() * (maxTIme + 1 - minTime));
};