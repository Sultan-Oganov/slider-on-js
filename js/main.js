const slides = [
    {
        color: "#c62828",
        text: "RED"
    },
    {
        color: "#ad1457",
        text: "PINK"
    },
    {
        color: "#6a1b9a",
        text: "PURPLE"
    },
    {
        color: "#4527a0",
        text: "DEEP_PURPLE"
    },
    {
        color: "#283593",
        text: "INDIGO"
    },
    {
        color: "#1565c0",
        text: "BLUE"
    },
    {
        color: "#0277bd",
        text: "LIGHT_BLUE"
    },
    {
        color: "#00838f",
        text: "CYAN"
    },
    {
        color: "#00695c",
        text: "TEAL"
    },
    {
        color: "#2e7d32",
        text: "GREEN"
    },
    {
        color: "#558b2f",
        text: "LIGHT_GREEN"
    },
    {
        color: "#827717",
        text: "LIME"
    },
    {
        color: "#ef6c00",
        text: "ORANGE"
    },
    {
        color: "#d84315",
        text: "DEEP_ORANGE"
    },
    {
        color: "#4e342e",
        text: "BROWN"
    }
]


const slider = () => {
    let slider = document.getElementById("slider");
    let sliderWidth = slider.offsetWidth;
    let slideList = document.getElementById("slidePage");

    slides.forEach(el => {
        let li = document.createElement('li')
        slideList.append(li)
        li.innerHTML = el.text
        li.style.background = el.color
    })


    let count = 1;
    let items = slides.length;

    window.addEventListener('resize', () => {
        sliderWidth = slider.offsetWidth;
    });


    const next__slide = () => {
        if (count < items) {
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
    };

    setInterval(() => {
        next__slide()
    }, 2500);

};

window.onload = () => {
    slider();
}