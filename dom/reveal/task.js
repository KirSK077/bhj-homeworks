const reveal = Array.from(document.querySelectorAll(".reveal"));

let revealBounding;

reveal.forEach(reveal => {
    window.addEventListener("scroll", () => {
        revealBounding = reveal.getBoundingClientRect();
        // console.log(revealBounding.bottom, window.scrollY, window.innerHeight);
        if (revealBounding.bottom < window.innerHeight && revealBounding.bottom > 0) {
            reveal.classList.add("reveal_active");
        } else {
            reveal.classList.remove("reveal_active");
        }
    })
})
