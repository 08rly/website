'user strict'
//firstViewアニメーション
setTimeout(
    function(){
        const firstview = document.getElementById('firstview');
        firstview.style.visibility = "visible";
        firstview.animate([{opacity: '0'}, {opacity: '1'}], 1000);
}, 1000)
//全体的なスクロールアニメーション
const target = document.getElementsByClassName('wrapper');
document.addEventListener("scroll", function() {
    for (let i = 0; i < target.length; i++) {
        const getDistance = target[i].getBoundingClientRect().top + target[i].clientHeight * .3;
        if (window.innerHeight > getDistance) {
            target[i].classList.add("is_show");
        }else if (window.innerHeight < getDistance) {
            target[i].classList.remove("is_show");
        }
    }
})
//Personalityの説明文
let swapText = [
    "現実的に可能かどうかは考えず、常にぼやっと考え更けてることが多く、「したい」で溢れてます...!!",
    "ファッション, 旅行, 音楽, 映画, アニメ, ゲームなど、基本何でも興味ありです（笑）",
    "中高と運動部で動くことが好きです。最近はよく高校の友達とバスケしてます!"
];
//表示,非表示
function Over(num, txt) {
    document.getElementById(txt).innerHTML = swapText[num];
    document.getElementById(txt).style.visibility = "visible";
}
function Out(txt) {
    document.getElementById(txt).style.visibility = "hidden";
}

//スムーススクロール (nav押したら各ページにゆっくり飛ぶ)
const scroll = document.querySelectorAll('a[href^="#"]');
for (let i=0; i < scroll.length; i++) {
    scroll[i].addEventListener('click', (e) => {
    e.preventDefault();
    let href = scroll[i].getAttribute('href');
    let target = document.getElementById(href.replace('#', ''));
    console.log(target)
    const rect = target.getBoundingClientRect().top;
    const offset = window.pageYOffset;
    const gap = 60;
    const destination = rect + offset - gap;
    window.scrollTo ({
        top: destination,
        behavior: 'smooth',
    });
});
}

//Personalityの横スライドアニメーション
const person_fadeIn = document.querySelectorAll(".about__container__head, .about__container__profile, .about__container__personality");
window.addEventListener('scroll', function() {
    for (let i = 0; i < person_fadeIn.length; i++) {
        const elemPos = person_fadeIn[i].getBoundingClientRect().top;
        const scroll = window.pageYOffset || document.documentElement.scrollTop;
        const offset = elemPos + scroll;
        const windowHeight = window.innerHeight;
        if (scroll > offset - windowHeight + 200) {
            person_fadeIn[i].classList.add("personality_scroll");
        } else if (scroll < offset - windowHeight + 200) {
            person_fadeIn[i].classList.remove("personality_scroll");
        }
    }
})
//Serviceの縦スライドアニメーション
const service_fadeIn = document.getElementsByClassName('item');
window.addEventListener('scroll', function() {
    for (let i = 0; i < service_fadeIn.length; i++) {
        const elemPos = service_fadeIn[i].getBoundingClientRect().top;
        const scroll = window.pageYOffset || document.documentElement.scrollTop;
        const offset = elemPos + scroll;
        const windowHeight = window.innerHeight;
        if (scroll > offset - windowHeight + 200) {
            service_fadeIn[i].classList.add("service_scroll");
        } else if (scroll < offset - windowHeight + 200) {
            service_fadeIn[i].classList.remove("service_scroll");
        }
    }
})

