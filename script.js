const btn = document.querySelector("button");
const items = document.querySelectorAll("li");
let size = 10;

// I Solution - FOR EACH

const growItems = function () {
    size++;
    items.forEach(item => {
        item.style.display = "block";
        item.style.fontSize = size + "px";
    })
};

// II Solution - FOR

// const growItems = function () {
//     size++;
//     for (i = 0; i < items.length; i++) {
//         items[i].style.display = "block";
//         items[i].style.fontSize = size + "px";
//     }
// }

btn.addEventListener("click", growItems)