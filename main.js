document.getElementById('startButton').addEventListener('click', function() {
    
    this.style.display = 'none';


    const audio = new Audio('./love.mp3'); 
    audio.loop = true;
    audio.volume = 0.3; 
    audio.play();

    
    const textElement = document.getElementById('typing-text');
    const messages = [
        "Иногда жизнь дарит нам встречи, которые меняют всё. ",
        "Не громко, не с фанфарами — а тихо, почти незаметно, будто кто-то приоткрыл окно, и в комнату вошёл солнечный свет.",
        "Так в моей жизни появилась ты, Акавия",
        "Иногда слова кажутся такими слабыми рядом с тем, что я чувствую к тебе.",
        "Но если бы ты могла хотя бы на мгновение заглянуть в моё сердце — ты бы увидела, насколько глубоко ты в нём живёшь.",
        "Ты — не просто важный человек в моей жизни. ",
        "Ты — её светлая часть.",
        "Та, из-за которой хочется просыпаться с улыбкой, становиться лучше, учиться терпению и заботе.",
        "С тобой я чувствую себя дома, даже в полной тишине.",
        "В тебе столько доброты, нежности и света, что рядом с тобой весь мир будто дышит легче.",
        "Ты умеешь быть рядом по-настоящему. Без лишних слов, просто — всей собой.",
        "И именно это даёт мне ощущение глубокой тишины внутри, той, в которой живёт настоящее счастье.",
        "Я не ищу сказку.",
        "Я нашёл реальность, в которой есть ты. ",
        "И она дороже любых мечтаний.",
        "Мне дорого каждое твоё слово, каждый жест, каждый твой взгляд, в котором я нахожу и себя, и смысл.",
        "И самое главное — я верю в нас.",
        "В то, что впереди у нас ещё много.",
        "Много смеха, разговоров до ночи, путешествий, общих привычек, маленьких традиций и большого тепла.",
        "Впереди уютный дом, где будет пахнуть кофе, книгами и твоими духами. ",
        "Где я смогу быть рядом, чтобы поддерживать, слушать, обнимать и просто любить тебя — каждый день.",
        "Акавия, спасибо, что ты есть.",
        "Ты — не просто часть моей жизни.",
        "Ты и есть моя жизнь. Моё настоящее. Моё будущее.",
        "С любовью, Жанемка",
        "❤️❤️❤️",
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
