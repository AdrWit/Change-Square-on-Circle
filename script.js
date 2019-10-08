const btn = document.querySelector("button");
let number = 1;

const addElement = function () {
    const div = document.createElement("div");
    div.textContent = number;

    if (number % 2 == 0) {
        div.classList.add("circle")
    }

    document.body.appendChild(div);
    number++;
    // console.log(number);
}

btn.addEventListener("click", addElement)