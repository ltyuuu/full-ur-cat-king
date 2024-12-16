document.addEventListener('DOMContentLoaded', () => {
    const leftSection = document.querySelector('.left-section');
  
    // 紙屑顏色
    const colors = ['#FF69B4', '#FFD700', '#00BFFF', '#32CD32', '#FF4500'];
  
    // 生成紙屑
    function createConfetti() {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.animationDelay = Math.random() * 3 + 's';
      confetti.style.animationDuration = 3 + Math.random() * 2 + 's';
      leftSection.appendChild(confetti);
  
      // 清理超出屏幕的紙屑
      setTimeout(() => {
        confetti.remove();
      }, 5000);
    }
  
    // 每 200ms 生成一片紙屑
    setInterval(createConfetti, 200);
  });
  