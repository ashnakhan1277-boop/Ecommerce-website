let cartCount = 0;

const cartButtons = document.querySelectorAll(".cart-btn");
const cartCounter = document.getElementById("cart-count");

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        cartCounter.textContent = cartCount;

        alert("Product added to cart!");

    });

});
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup", function() {

    const value = searchInput.value.toLowerCase();

    products.forEach(product => {

        const name = product.querySelector("h3").textContent.toLowerCase();

        if(name.includes(value)){
            product.style.display = "block";
        }
        else{
            product.style.display = "none";
        }

    });

});
const modal = document.getElementById("productModal");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".product-card").forEach(card => {

    card.addEventListener("click", () => {

        const title = card.querySelector("h3").textContent;
        const price = card.querySelector("p").textContent;

        document.getElementById("modal-title").textContent = title;
        document.getElementById("modal-price").textContent = price;

        modal.style.display = "block";
    });

});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if(e.target == modal){
        modal.style.display = "none";
    }
});
const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeBtn.innerHTML = "☀️";
    }
    else{
        themeBtn.innerHTML = "🌙";
    }

});
let endDate = new Date();
endDate.setDate(endDate.getDate() + 2);

function updateCountdown(){

    let now = new Date().getTime();
    let distance = endDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}

setInterval(updateCountdown,1000);