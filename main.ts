type Sender = 'user' | 'bot';

const form = document.getElementById('chat-form') as HTMLFormElement;
const input = document.getElementById('user-input') as HTMLInputElement;
const chatWindow = document.getElementById('chat-window') as HTMLDivElement;

form.addEventListener('submit', async (e: Event) => {
  e.preventDefault();

  const message = input.value.trim();
  if (!message) return;

  appendMessage('user', message);
  input.value = '';

  setTimeout(() => {
    const botReply = getBotResponse(message);
    appendMessage('bot', botReply);
  }, 500);
});

function appendMessage(sender: Sender, text: string): void {
  const msg = document.createElement('div');
  msg.classList.add('chat-message', sender);
  msg.textContent = text;
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function getBotResponse(userMsg: string): string {
  // to do
  return `You said: "${userMsg}" — complete the codes you lazy human!`;
}
