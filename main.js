document.getElementById('startButton').addEventListener('click', function() {
    // Скрываем кнопку после первого клика
    this.style.display = 'none';

    // Запуск музыки
    const audio = new Audio('./love.mp3'); // Путь к вашему файлу
    audio.loop = true;
    audio.volume = 0.3; // Уменьшаем громкость
    audio.play();

    // Запуск анимации текста
    const textElement = document.getElementById('typing-text');
    const messages = [
        "Привет, я хочу признаться тебе в одном важном чувстве. ",
        "С самого первого дня, когда я тебя увидел, мое сердце начало биться сильнее.",
        "Я думал, что это пройдет, но я ошибался.",
        "Каждый день я думал о тебе и мечтал признаться в своих чувствах.",
        "Но так и не находил подходящего момента. И  я не хочу упускать этот шанс",
        "Ты мне очень нравишься ❤️",
        "Почему я тебя по-люблю?",
        "Есть на это  причины:",
        "1. Твоя улыбка — она божественно красива.",
        "2. Твои глаза — в них словно целый мир, нет, целая вселенная.",
        "3. Твой голос — он звучит как ангельская мелодия или даже лучше.",
        "Я мог бы написать ещё больше причин, но словами невозможно выразить всё, что я чувствую.",
        "Если ты согласна, давай встретимся."
    ];

    let index = 0;
    let charIndex = 0;
    let currentMessage = "";
    let isDeleting = false;

    function typeEffect() {
        if (!isDeleting && charIndex < messages[index].length) {
            currentMessage += messages[index].charAt(charIndex);
            charIndex++;
        } else if (isDeleting && charIndex > 0) {
            currentMessage = currentMessage.slice(0, -1);
            charIndex--;
        } else {
            if (!isDeleting) {
                setTimeout(() => {
                    isDeleting = true;
                    typeEffect();
                }, 4000);
                return;
            } else {
                isDeleting = false;
                index++;
                charIndex = 0;
                currentMessage = "";
                if (index >= messages.length) {
                    showButtons();
                    return;
                }
            }
        }
        textElement.innerHTML = currentMessage;
        setTimeout(typeEffect, isDeleting ? 20 : 50);
    }

    setTimeout(typeEffect, 2000);

    function showButtons() {
        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('buttons-container');

        const yesButton = document.createElement('button');
        yesButton.innerText = "Да";
        yesButton.classList.add('button');
        yesButton.onclick = () => {
            textElement.innerHTML = "Рад, что ты не отвергла мои чувства. Давай встретимся 15.02 в 20:10 у главного входа в драмтеатр";
            buttonsContainer.remove();
        };

        const noButton = document.createElement('button');
        noButton.innerText = "Нет";
        noButton.classList.add('button');
        noButton.onclick = () => {
            textElement.innerHTML = "Ладно, хорошо)";
            buttonsContainer.remove();
        };

        buttonsContainer.appendChild(yesButton);
        buttonsContainer.appendChild(noButton);
        document.body.appendChild(buttonsContainer);
    }

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        document.body.appendChild(heart);
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
        setTimeout(() => heart.remove(), 3000);
    }
    setInterval(createHeart, 500);
});
