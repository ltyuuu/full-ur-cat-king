document.addEventListener('DOMContentLoaded', () => {
    // 右半部分：生成掉落的石頭
    const rightSection = document.querySelector('.right-section');

    function createRock() {
        const rock = document.createElement('div');
        rock.classList.add('rock');
        rock.style.left = Math.random() * 90 + '%'; // 隨機水平位置
        rock.style.animationDelay = Math.random() * 2 + 's';
        rock.style.width = Math.random() * 40 + 20 + 'px'; // 隨機大小
        rock.style.height = rock.style.width; // 保持石頭是正方形
        rightSection.appendChild(rock);

        // 移除掉出畫面的石頭
        setTimeout(() => {
            rock.remove();
        }, 5000);
    }

    // 每 500ms 生成一顆新石頭
    setInterval(createRock, 500);
});
