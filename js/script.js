// Dark Mode Toggle with localStorage
const toggle = document.getElementById("darkModeToggle");
const icon = toggle.querySelector("i");

toggle.addEventListener("click", () => {

document.body.classList.toggle("dark-mode");

// Save preference
if(document.body.classList.contains("dark-mode")){
localStorage.setItem("darkMode","enabled");
icon.classList.remove("fa-moon");
icon.classList.add("fa-sun");
}else{
localStorage.setItem("darkMode","disabled");
icon.classList.remove("fa-sun");
icon.classList.add("fa-moon");
}

});


// Applying saved dark mode preference on page load
    window.addEventListener("DOMContentLoaded", () => {

if(localStorage.getItem("darkMode") === "enabled"){
document.body.classList.add("dark-mode");
icon.classList.remove("fa-moon");
icon.classList.add("fa-sun");
}

});

// Menu Filters
    function filterMenu(category) {
        const items = document.querySelectorAll('.card-menu');
        items.forEach(item => {
            item.style.display = (category === 'all' || item.dataset.category === category) ? 'block' : 'none';
        });
    }

// Initialize Rellax for Parallax
    var rellax = new Rellax('.rellax');


// Function to show Bootstrap alert
    function showAlert(message, type = 'success') {
        const alertContainer = document.getElementById('alertContainer');
        const alertId = 'alert-' + new Date().getTime(); 
        const alertHtml = `
            <div id="${alertId}" class="alert alert-${type} alert-dismissible fade show" role="alert">
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        alertContainer.innerHTML = alertHtml;
        
        setTimeout(() => {
            const alert = document.getElementById(alertId);
            if (alert) {
                alert.classList.remove('show');
                setTimeout(() => alert.remove(), 200);
            }
        }, 3000);
    }



// Submit Order Form Submission
    document.querySelector('#orderModal .btn-primary').addEventListener('click', function() {
        const name = document.getElementById('customerName').value;
        const phone = document.getElementById('customerPhone').value;
        const details = document.getElementById('orderDetails').value || 'No details provided';
        if (name && phone) {
            showAlert(`Thank you, ${name}! Your order has been submitted. We'll contact you at ${phone}.`, 'success');
            document.getElementById('orderModal').querySelector('form').reset(); 
            bootstrap.Modal.getInstance(document.getElementById('orderModal')).hide(); 
        } else {
            showAlert('Please enter your name and phone number.', 'danger');
        }
    });

// Claim Gift Form Submission
    document.querySelector('#giftModal .btn-primary').addEventListener('click', function() {
        const email = document.getElementById('customerEmail').value;
        const name = document.getElementById('customerName').value || 'Customer';
        if (email) {
            showAlert(`Thank you, ${name}! Your gift has been claimed for ${email}. Check your email for details!`, 'success');
            document.getElementById('giftModal').querySelector('form').reset(); 
            bootstrap.Modal.getInstance(document.getElementById('giftModal')).hide();
        } else {
            showAlert('Please enter a valid email address.', 'danger');
        }
    });



    /* =====================================================
   ACTIVE NAVBAR LINK ON SCROLL
   ===================================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {

let currentSection = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 120;
const sectionHeight = section.clientHeight;

if (window.scrollY >= sectionTop) {
currentSection = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href").includes(currentSection)) {
link.classList.add("active");
}

});

});

/* =====================================================
   SCROLL ANIMATION
   ===================================================== */

const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

},{threshold:0.2});

fadeElements.forEach(el=>{
observer.observe(el);
});


