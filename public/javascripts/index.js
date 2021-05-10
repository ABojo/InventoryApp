const deleteButtons = document.querySelectorAll('.btn-delete');
deleteButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const { url, name } = btn.dataset;
    const popup = document.createElement('div');
    const popupBox = document.createElement('div');
    const popupMessage = document.createElement('h1');
    const confirmButton = document.createElement('a');
    const rejectButton = document.createElement('button');

    popup.className = 'popup';
    popupBox.className = 'popup-box';
    popupMessage.className = 'popup-message';
    confirmButton.className = 'popup-btn confirm';
    confirmButton.href = url;
    rejectButton.className = 'popup-btn reject';
    popupMessage.textContent = `Are you sure you want to delete ${name}?`;
    confirmButton.textContent = 'Yes';
    rejectButton.textContent = 'No';

    rejectButton.addEventListener('click', () => {
      popup.remove();
    });

    popupBox.append(popupMessage, confirmButton, rejectButton);
    popup.append(popupBox);
    document.body.append(popup);
  });
});
