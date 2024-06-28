function showLoveMessage() {
    document.getElementById('love-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('love-modal').style.display = 'none';
}

document.addEventListener('click', function(event) {
    if (event.target == document.getElementById('love-modal')) {
        closeModal();
    }
});
