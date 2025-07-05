document.addEventListener('DOMContentLoaded', function() {
    // Создаем элементы для взрыва
    const explosionOverlay = document.createElement('div');
    explosionOverlay.id = 'explosionOverlay';
    explosionOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, rgba(255,200,0,0.8) 0%, rgba(255,0,0,0.9) 70%);
        z-index: 1000;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.5s;
    `;
    
    const explosionText = document.createElement('div');
    explosionText.id = 'explosionText';
    explosionText.textContent = 'HEMI[GD] УНИЧТОЖЕН!';
    explosionText.style.cssText = `
        font-size: 4rem;
        font-weight: bold;
        color: #000;
        text-shadow: 0 0 10px #fff;
        margin-bottom: 20px;
        text-align: center;
        transform: scale(0);
        transition: transform 0.5s;
    `;
    
    const countdown = document.createElement('div');
    countdown.id = 'countdown';
    countdown.style.cssText = `
        font-size: 2rem;
        color: #000;
        font-weight: bold;
        opacity: 0;
        transition: opacity 0.5s;
    `;
    
    const rickrollMessage = document.createElement('div');
    rickrollMessage.id = 'rickrollMessage';
    rickrollMessage.textContent = 'Наслаждайтесь классикой...';
    rickrollMessage.style.cssText = `
        font-size: 1.5rem;
        color: #000;
        margin-top: 20px;
        opacity: 0;
        transition: opacity 0.5s;
        text-align: center;
    `;
    
    explosionOverlay.appendChild(explosionText);
    explosionOverlay.appendChild(countdown);
    explosionOverlay.appendChild(rickrollMessage);
    document.body.appendChild(explosionOverlay);
    
    // Получаем кнопку
    const exposeBtn = document.getElementById('exposeBtn');
    const container = document.querySelector('.container');
    
    // Звуковые эффекты
    const sounds = {
        explosion: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-explosion-1684.mp3'),
        alarm: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3'),
        success: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3')
    };
    
    // Предзагрузка звуков
    Object.values(sounds).forEach(sound => {
        sound.preload = 'auto';
        sound.volume = 0.7;
    });
    
    // Функция тряски элемента
    function shake(element, intensity = 10, duration = 500) {
        const startTime = Date.now();
        const originalTransform = element.style.transform || '';
        
        function animate() {
            const elapsed = Date.now() - startTime;
            if (elapsed < duration) {
                const x = (Math.random() - 0.5) * intensity * 2;
                const y = (Math.random() - 0.5) * intensity;
                element.style.transform = `${originalTransform} translate(${x}px, ${y}px)`;
                requestAnimationFrame(animate);
            } else {
                element.style.transform = originalTransform;
            }
        }
        
        animate();
    }
    
    // Обработчик клика на кнопку
    exposeBtn.addEventListener('click', function() {
        // Блокируем кнопку
        exposeBtn.disabled = true;
        exposeBtn.textContent = 'РАЗОБЛАЧЕНИЕ НАЧАТО';
        exposeBtn.style.backgroundColor = '#333';
        
        // Запускаем звук тревоги
        sounds.alarm.loop = true;
        sounds.alarm.play();
        
        // Анимация перед взрывом
        let count = 3;
        const countdownInterval = setInterval(() => {
            shake(container, 15);
            sounds.success.play();
            countdown.textContent = `Перенаправление через: ${count}`;
            
            if (count <= 0) {
                clearInterval(countdownInterval);
                startExplosion();
            }
            count--;
        }, 1000);
    });
    
    // Запуск взрыва
    function startExplosion() {
        // Останавливаем звук тревоги
        sounds.alarm.pause();
        sounds.alarm.currentTime = 0;
        
        // Показываем оверлей взрыва
        explosionOverlay.style.opacity = '1';
        explosionOverlay.style.pointerEvents = 'auto';
        
        // Анимация текста взрыва
        setTimeout(() => {
            explosionText.style.transform = 'scale(1)';
            sounds.explosion.play();
            shake(document.body, 30, 2000);
        }, 100);
        
        // Показываем счетчик
        setTimeout(() => {
            countdown.style.opacity = '1';
        }, 500);
        
        // Показываем сообщение о рикролле
        setTimeout(() => {
            rickrollMessage.style.opacity = '1';
        }, 1000);
        
        // Запускаем обратный отсчет перед рикроллом
        let redirectCount = 3;
        countdown.textContent = `Перенаправление через: ${redirectCount}`;
        
        const redirectInterval = setInterval(() => {
            redirectCount--;
            countdown.textContent = `Перенаправление через: ${redirectCount}`;
            
            if (redirectCount <= 0) {
                clearInterval(redirectInterval);
                // Перенаправляем на рикролл
                window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
            }
        }, 1000);
    }
});document.addEventListener('DOMContentLoaded', function() {
    // Элементы DOM
    const exposeBtn = document.getElementById('exposeBtn');
    const explosion = document.getElementById('explosion');
    const container = document.querySelector('.container');
    
    // Звуковые эффекты
    const sounds = {
        explosion: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-explosion-1684.mp3'),
        beep: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3'),
        error: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-explosion-2759.mp3')
    };
    
    // Предзагрузка звуков
    Object.values(sounds).forEach(sound => {
        sound.preload = 'auto';
        sound.volume = 0.7;
    });
    
    // Анимация тряски
    function shake(element, intensity = 10, duration = 500) {
        const startTime = Date.now();
        const originalPosition = window.getComputedStyle(element).position;
        
        element.style.position = 'relative';
        
        function animate() {
            const elapsed = Date.now() - startTime;
            if (elapsed < duration) {
                const x = (Math.random() - 0.5) * intensity * 2;
                const y = (Math.random() - 0.5) * intensity;
                element.style.transform = `translate(${x}px, ${y}px)`;
                requestAnimationFrame(animate);
            } else {
                element.style.transform = '';
                element.style.position = originalPosition;
            }
        }
        
        animate();
    }
    
    // Анимация взрыва
    function activateExpose() {
        // Блокируем кнопку
        exposeBtn.disabled = true;
        exposeBtn.textContent = 'РАЗОБЛАЧЕНИЕ АКТИВИРОВАНО';
        exposeBtn.style.backgroundColor = '#333';
        
        // Запускаем звук сирены
        sounds.beep.loop = true;
        sounds.beep.play();
        
        // Анимация перед взрывом
        let count = 3;
        const countdown = setInterval(() => {
            shake(container, 15);
            sounds.error.play();
            
            if (count <= 0) {
                clearInterval(countdown);
                executeExpose();
            }
            count--;
        }, 1000);
    }
    
    // Основной взрыв
    function executeExpose() {
        // Останавливаем сирену
        sounds.beep.pause();
        sounds.beep.currentTime = 0;
        
        // Проигрываем звук взрыва
        sounds.explosion.play();
        
        // Показываем анимацию взрыва
        explosion.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Анимация увеличения
        let scale = 1;
        const growInterval = setInterval(() => {
            scale += 0.1;
            explosion.style.transform = `scale(${scale})`;
            
            if (scale >= 5) {
                clearInterval(growInterval);
            }
        }, 50);
        
        // Тряска всей страницы
        shake(document.body, 30, 2000);
        
        // Редирект через 3 секунды
        setTimeout(() => {
            window.location.href = "#exposed";
        }, 3000);
    }
    
    // Обработчик клика
    exposeBtn.addEventListener('click', activateExpose);
    
    // Подтверждение перед выходом
    window.addEventListener('beforeunload', function(e) {
        if (exposeBtn.disabled) {
            e.preventDefault();
            e.returnValue = 'Разоблачение HEMI[GD] в процессе. Вы уверены, что хотите уйти?';
        }
    });
});