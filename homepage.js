document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("getStartedBtn");
    const target = document.getElementById("scroll");

    btn.addEventListener("click", function () {
        target.scrollIntoView({ behavior: "smooth" });
    });
});
