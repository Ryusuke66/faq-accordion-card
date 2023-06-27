let question = document.querySelectorAll(".question"),
    answer = document.querySelectorAll(".answer"),
    arrow = document.querySelectorAll(".arrow");

for (let i = 0; i < question.length; i++) {
    question[i].addEventListener("click", function () {
        question.forEach(function (e) {
            if(e === question[i]) {
                return;
            } else {
                e.classList.remove("open");
            }
        });
        this.classList.toggle("open");

        answer.forEach((e) => e.style.display = "none");
        arrow.forEach((e) => e.classList.remove('up'));

        if (this.classList.contains("open")) {
            answer[i].style.display = "block";
            arrow[i].classList.add("up");
        }
        
    });
}

