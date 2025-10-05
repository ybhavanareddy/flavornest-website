// Dark Mode Toggle with localStorage
    document.getElementById('darkModeToggle').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    });

// Applying saved dark mode preference on page load
    window.addEventListener('DOMContentLoaded', function() {
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark-mode');
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