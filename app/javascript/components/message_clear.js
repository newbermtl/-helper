const messageClear = () => {
  const messageContent = document.getElementById('message_content')
  const chatInput = document.getElementById('new_message');

  chatInput.addEventListener('submit', (event) => {
    setTimeout(() => {
      messageContent.value = '';
    }, 0)
  });
};

export { messageClear };
