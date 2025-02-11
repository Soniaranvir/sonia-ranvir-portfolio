const tabs = document.querySelectorAll(".tab-menu button");
const sections = document.querySelectorAll(".education-list");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabs.forEach(btn => btn.classList.remove("active"));
        tab.classList.add("active");

        sections.forEach(section => section.style.display = "none");
        sections[index].style.display = "block";
    });
});
