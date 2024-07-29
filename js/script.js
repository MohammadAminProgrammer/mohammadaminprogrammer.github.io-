if (localStorage.getItem("theme") == "dark") {
    $("body").toggleClass("dark-theme-variables");
    $("#changer i").addClass("fa-moon-o");
    $("#changer i").removeClass("fa-sun-o");
    $("*").attr("data-bs-theme", "dark");
    $("#changer i").css("margin-right", "0");
    $("#changer i").css("margin-left", "38px");
} else {
    $("*").attr("data-bs-theme", "light");
    $("#changer i").addClass("fa-sun-o");
    $("#changer i").removeClass("fa-moon-o");
    $("#changer i").css("margin-left", "0");
    $("#changer i").css("margin-right", "35px");
}

$("#changer i").click(function (e) { 
    $("body").toggleClass("dark-theme-variables");
    $("#changer i").toggleClass("fa-moon-o");
    $("#changer i").toggleClass("fa-sun-o");
    
    if($("body").attr("data-bs-theme") == "light") {
        console.log($("body").attr("data-bs-theme"));
        $("*").attr("data-bs-theme", "dark");
        localStorage.setItem("theme", "dark");
        $("#changer i").css("margin-right", "0");
        $("#changer i").css("margin-left", "38px");
    } else {
        $("*").attr("data-bs-theme", "light");
        localStorage.setItem("theme", "light");
        $("#changer i").css("margin-left", "0");
        $("#changer i").css("margin-right", "35px");
    }
});





let text = $("#type");
let list = ["Front-End Developer", "Back-End Developer", "Game Developer"];

let listIndex = 0;
let IndexItem = 0;

function start() {
    if (IndexItem < list[listIndex].length) {
        text.html(text.html() + list[listIndex].charAt(IndexItem));
        IndexItem ++;
        setTimeout(start, 140);
    } else {
        setTimeout(end, 2000);
    }
}

function end() {
    if (IndexItem > 0) {
        text.html(list[listIndex].substring(0, IndexItem - 1));
        IndexItem --;
        setTimeout(end, 100);
    } else {
        listIndex ++;
        if (listIndex > list.length - 1) {
            listIndex = 0;
        }
        setTimeout(start, 1000);
    }
}

let numbers = $("#numbers");
let itemNumber = Number(numbers.html());
let i = 0;

let numbersH = $("#numbersH");
let itemNumberH = Number(numbersH.html());
let u = 0;

function number_start() {
    if (i <= itemNumber) {
        numbers.html(i);
        i ++;
        setTimeout(number_start, 120);
    } else {
        numbers.html(itemNumber);
    }
}

function number_start_2() {
    if (i <= itemNumberH) {
        numbersH.html(i);
        i ++;
        setTimeout(number_start_2, 120);
    } else {
        numbersH.html(itemNumberH);
    }
}

window.addEventListener("DOMContentLoaded", start);

const Observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            number_start();
        }
    });
})

const ObserverH = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            number_start_2();
        }
    });
})

const myNumber = document.querySelectorAll("#numbers");
const myNumber2 = document.querySelectorAll("#numbersH");
myNumber.forEach((el) => Observer.observe(el));
myNumber2.forEach((el) => ObserverH.observe(el));



$(document).ready(function () {
    $(document).scroll(function () {
        if ($(document).scrollTop() > 1) {
            // console.log($("#menu").height());
            $("#menu").addClass("shadow");
        } else {
            // console.log($("#menu").height());
            $("#menu").removeClass("shadow");
        }
    });
});



const progressesShow = document.querySelectorAll(".progress-ab");
let progresses = document.querySelectorAll(".progress-ab");

function progress_show() {
    progresses.forEach(progress => {
        progress.style.width = progress.dataset.progress + "%";
    });
}

const Observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            progress_show();
        }
    });
})

progressesShow.forEach((el) => Observer2.observe(el));

let tech_bars = document.querySelectorAll(".tech-bar");
tech_bars.forEach(el => {
    let backgroundColor = el.dataset.techLang ==  "HTML" ? "orange" : el.dataset.techLang ==  "SCSS/CSS" ? "royalblue" : el.dataset.techLang ==  "JS" ? "yellow" : el.dataset.techLang ==  "Jquery" ? "gold" : el.dataset.techLang ==  "PHP" ? "cornflowerblue" : el.dataset.techLang ==  "Construct3" ? "gray" : "#353535";
    el.style.width = el.dataset.tech + "%";
    el.style.backgroundColor = (backgroundColor);

    let parent_progrees = el.parentNode;
    let names = parent_progrees.nextElementSibling;
    
    names.innerHTML += "<section class='name'><div style='background-color: " + backgroundColor + ";'></div> <b>" + el.dataset.techLang + "</b></section>";
});

let technologies = $(".technologies");
let blackBG = $(".blackBG");
let techBtn = $(".tech");

techBtn.click(function (e) { 
    e.preventDefault();
    if (!$(this).hasClass("inactive")) {
        let all = document.querySelectorAll(".w");
        all.forEach(el => {
            el.style.display = "none";
        });
        let id = this.id;
        let w = document.querySelector("." + id);
        w.style.display = "block";
        technologies.css("display", "flex");
        w.style.animation = "scale 1s";
        $(".technologies .back").css("display", "block");
    }
});

$(".technologies .back").click(function (e) {
    e.preventDefault();
    if (technologies.css("display") == "flex") {
        technologies.css("display", "none");
        this.style.display = "none";
        $(".technologies .back").css("display", "none");
    }
});

let fullG = $("#full-g");
let full = $("#full");
let full_img = $("#full-g img");

$(".glory .image img").click(function (e) { 
    e.preventDefault();
    let src = this.src;
    fullG.css("display", "flex");
    full.css("animation", "scale 1s");
    full_img.attr("src", src);
});

$(".close-full").click(function (e) { 
    e.preventDefault();
    fullG.css("display", "none");
});


let lang = "fa";
let website = {
    "title": {
        "fa": "سید محمد امین حسینی",
        "en": "Seyyed Mohammad Amin Hosseini"
    },
    "about-us": {
        "fa": "درباره من",
        "en": "About me"
    },
    "abilitiesS": {
        "fa": "تخصص‌ها",
        "en": "Abilities"
    },
    "gloriesS": {
        "fa": "افتخارات",
        "en": "Glories"
    },
    "worksS": {
        "fa": "نمونه کارها",
        "en": "Works"
    },
    "contact": {
        "fa": "ارتباط با من",
        "en": "Contact me"
    },
    "header-title": {
        "fa": "سید محمد امین حسینی",
        "en": "Seyyed Mohammad Amin Hosseini"
    },
    "me-1": {
        "fa": "من",
        "en": "I'm"
    },
    "me-2": {
        "fa": "هستم!",
        "en": "!"
    },
    "download": {
        "fa": "<i class='fa fa-download'></i> دانلود رزومه",
        "en": "<i class='fa fa-download'></i> Download Resume"
    },
    "about-title": {
        "fa": "درباره سید محمد امین حسینی",
        "en": "About Seyyed Mohammad Amin Hosseini"
    },
    "about-p": {
        "fa": "من سید محمد امین حسینی هستم. فرانت اند کار، بک اند کار (MVC)، طراح بازی، طراح گرافیک و موسس گروه MaSo و گروه آموزشی MAgram هستم. <br>متولد 1388 ساکن مشهد هستم؛ از سال 1398 به صورت حرفه‌ای بازی‌سازی رو شروع کردم. از سال 1399 آموزش برنامه نویسی رو شروع کردم. از سال 1401 وارد حوزه پایتون و دنیای بک اند (PHP) شدم. <br>از سال 1399 آموزش برنامه نویسی و برگزاری دوره‌های غیرحضوری رو شروع کردم. از سال 1399، تاکنون مدرس بیش از 50 دانشجو هستم. <br>در سال 1402 با تولید بازی Master of Codes: Solution توانستیم نخست رتبه اول استان خراسان رضوی و سپس رتبه دوم کشوری نهمین دوره جشنواره نوجوان خوارزمی رو بدست آوردیم. <br>",
        "en": "I am Seyyed Mohammad Amin Hosseini. I am Front-end work, back end work (MVC), game designer, graphic designer and the founder of MaSo group and MAgram educational group. I was born in 2009 and live in Mashhad. I started making games professionally since 2018. I started teaching programming since 2019. Since 2022, I entered the field of Python and the world of Back-end (PHP). <br>Since 2019, I have started teaching programming and holding non-attendance courses. Since 2019, I have taught more than 50 students. <br>In 2022, by producing the game Master of Codes: Solution, we were able to get the first place in Razavi Khorasan Province and then the second place in the country in the 9th Khwarazmi Youth Festival. <br>"
    },
    "finished": {
        "fa": "پروژه تکمیل شده",
        "en": "Finished projects"
    },
    "happy": {
        "fa": "مشتری خوشحال",
        "en": "Happy customers"
    },
    "abilities-title": {
        "fa": "تخصص‌ها",
        "en": "Abilities"
    },
    "desc-ab a": {
        "fa": "حرفه‌ای",
        "en": "Professional"
    },
    "desc-ab b": {
        "fa": "پیشرفته",
        "en": "Advanced"
    },
    "desc-ab c": {
        "fa": "متوسط",
        "en": "Average"
    },
    "desc-ab d": {
        "fa": "تازه‌کار",
        "en": "Novice"
    },
    "works-title": {
        "fa": "نمونه کارها",
        "en": "Works"
    },
    "desc-ab a": {
        "fa": "پیشرفته",
        "en": "Advanced"
    },
    "tech-btn": {
        "fa": "تکنولوژی‌ها",
        "en": "Technologies"
    },
    "view": {
        "fa": "مشاهده",
        "en": "View"
    },
    "w-a": {
        "fa": "وبسایت دبیرستان شهید هاشمی نژاد 2",
        "en": "HashemiNejad 2 Website"
    },
    "w-b": {
        "fa": "وبسایت فوتبالیتو",
        "en": "Footballito Website"
    },
    "w-c": {
        "fa": "Master of Codes: Solution",
        "en": "Master of Codes: Solution"
    },
    "graphic_work": {
        "fa": "برای دیدن نمونه کارهای گرافیکی، به لینک زیر مراجعه کنید",
        "en": "To see examples of graphic works, refer to the link below"
    },
    "glories-title": {
        "fa": "افتخارات",
        "en": "Glories"
    },
    "g-a": {
        "fa": "رتبه اول استان - نهمین دوره جشنواره نوجوان خوارزمی",
        "en": "The first rank of the province - the 9th Khwarazmi Youth Festival"
    },
    "g-b": {
        "fa": "رتبه دوم کشور - نهمین دوره جشنواره نوجوان خوارزمی",
        "en": "The second rank of the country - the 9th Khwarazmi Youth Festival"
    },
    "g-c": {
        "fa": "رتبه اول ناحیه - جشنواره فرهنگی و هنری",
        "en": "First in the district - cultural and artistic festival"
    },
    "contact-title": {
        "fa": "ارتباط با من",
        "en": "Contact me"
    },
    "logo-p email": {
        "fa": "آدرس ایمیل",
        "en": "Email address"
    },
    "logo-p proj": {
        "fa": "سفارش پروژه",
        "en": "Project order"
    },
    "ask-order": {
        "fa": "لطفا از راه ارتباطی زیر برای پرسیدن سوالات خود استفاده نکنید",
        "en": "Please don't use the contact form below to ask questions"
    },
    "a email": {
        "fa": "برای ارسال ایمیل کلیک کنید",
        "en": "Click to send email"
    },
    "a proj": {
        "fa": "برای ارسال پیام کلیک کنید",
        "en": "Click to send message"
    },
    "footer-p": {
        "fa": "&copy; 1403 تمامی حقوق مادی و معنوی این سایت متعلق به سید محمد امین حسینی است",
        "en": "&copy; 2024 All material and moral rights of this site belong to Seyed Mohammad Amin Hosseini"
    },
}

$("#changerLang").hover(function () {
    $(".list-langs").css("display", "block")   
    }, function () {
        setTimeout(() => {
            $(".list-langs").css("display", "none")
        }, 500);
    }
);

$("#fa").click(function (e) { 
    e.preventDefault();
    let lang = "fa";
    langF(lang);
    $(".fan").css("display", "block");
    $(".en").css("display", "none");
});

$("#en").click(function (e) { 
    e.preventDefault();
    let lang = "en";
    langF(lang);
    $(".fan").css("display", "none");
    $(".en").css("display", "block");
});

function langF(lang) {
    let all = document.querySelectorAll("*");
    all.forEach(el => {
        if (lang == "fa") {
            el.style.direction = "rtl";
            $(".change-lang").css("margin", "10px auto 0 10px");
            $(".download i").css("margin", "0 0 0 10px");
            $(".desc-ab").css("margin", "10px auto 10px 0");
            $(".desc-ab").css("font-size", "14px");
        } else {
            el.style.direction = "ltr";
            $(".change-lang").css("margin", "10px 10px 0 auto");
            $(".download i").css("margin", "0 10px 0 0");
            $(".desc-ab").css("margin", "10px 0 10px auto");
            $(".tech-btn").css("font-size", "12px");
            $(".view").css("font-size", "15px");
        }
        try {
            el.innerHTML = website[el.className][lang];
        } catch {
            return;
        }
    });
}

$("#open").click(function (e) { 
    e.preventDefault();
    $("#menu").css("left", "0");
});

$("#close").click(function (e) { 
    e.preventDefault();
    $("#menu").css("left", "-50%");
});