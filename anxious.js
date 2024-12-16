function createStone() {
    const stone = document.createElement('div');
    stone.classList.add('stone');
    // Randomize position
    stone.style.left = Math.random() * window.innerWidth + 'px';
    // Append to body
    document.body.appendChild(stone);

    // Remove stone when it finishes falling
    stone.addEventListener('animationiteration', () => {
        stone.remove();
    });
}

// Generate stones every 200ms
setInterval(createStone, 200);
