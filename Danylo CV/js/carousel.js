(function() {
    const educationJson = `[
        {
            "id": "001",
            "name": "Education",
            "desc": "Lviv Polytechnic National University. (2019-2023)"
    
        },
        {
            "id": "002",
            "name": "Finished courses",
            "desc": "SoftServe. HTML/CSS/JS Fundamentals. Created my mini-project."
        }
  ]`;

    const education = JSON.parse(educationJson);

    let educationHtml = [];

    function showEducation(education) {
        const alleducation = [...education];
        for (const thing of alleducation) {
            educationHtml.push(`
          <div class="carousel-items">
          <h3 class="carousel-text carousel-inner">${thing.name}</h3>
          <p class="carousel-desc carousel-inner">${thing.desc}</p>
          </div>
          `);
        }
        return educationHtml;
    }
    showEducation(education);

    const slidesThings = [...educationHtml];
    let currentThingSlideIdx = 0;

    function showCurrentThingSlide() {
        const slideThingContainer = document.querySelector(
            ".education-carousel"
        );
        slideThingContainer.innerHTML = slidesThings[currentThingSlideIdx];
    }

    function nextThingSlide() {
        currentThingSlideIdx++;
        if (currentThingSlideIdx >= slidesThings.length)
            currentThingSlideIdx = 0;
        showCurrentThingSlide();
    }

    function previousThingSlide() {
        currentThingSlideIdx--;
        if (currentThingSlideIdx < 0)
            currentThingSlideIdx = slidesThings.length - 1;
        showCurrentThingSlide();
    }
    setInterval(nextThingSlide, 8000);
    showCurrentThingSlide();

    document
        .querySelector(".education .next-click")
        .addEventListener("click", nextThingSlide);

    document
        .querySelector(".education .previous-click")
        .addEventListener("click", previousThingSlide);
})();