document.addEventListener("DOMContentLoaded", function () {
    // Sidebar Toggle for Login & Sign-Up
    const sidebar = document.querySelector(".sidebar");
    const loginBtn = document.querySelector(".login-btn");
    const signupBtn = document.querySelector(".signup-btn");
    const closeSidebar = document.querySelector(".close-sidebar");

    if (loginBtn && signupBtn && closeSidebar) {
        loginBtn.addEventListener("click", function () {
            sidebar.classList.add("open");
        });

        signupBtn.addEventListener("click", function () {
            sidebar.classList.add("open");
        });

        closeSidebar.addEventListener("click", function () {
            sidebar.classList.remove("open");
        });
    }

    // Feedback Modal
    const feedbackBtn = document.querySelector(".feedback-btn");
    const feedbackModal = document.getElementById("feedbackModal");
    
    if (feedbackBtn && feedbackModal) {
        const closeFeedbackBtn = feedbackModal.querySelector(".close-btn");

        feedbackBtn.addEventListener("click", function () {
            feedbackModal.style.display = "block";
        });

        closeFeedbackBtn.addEventListener("click", function () {
            feedbackModal.style.display = "none";
        });

        document.getElementById("submitFeedback").addEventListener("click", function () {
            let feedbackText = document.getElementById("feedbackText").value;
            if (feedbackText.trim() !== "") {
                alert("Thank you for your feedback!");
                document.getElementById("feedbackText").value = "";
                feedbackModal.style.display = "none";
            } else {
                alert("Please enter some feedback before submitting.");
            }
        });
    }

    // Contact Modal
    const contactBtn = document.getElementById("contactBtn");
    const contactModal = document.getElementById("contactModal");

    if (contactBtn && contactModal) {
        const closeContactBtn = contactModal.querySelector(".close-btn");

        contactBtn.addEventListener("click", function () {
            contactModal.style.display = "block";
        });

        closeContactBtn.addEventListener("click", function () {
            contactModal.style.display = "none";
        });
    }

    // Login Modal
    const loginModal = document.getElementById("loginModal");

    if (loginModal) {
        const closeLoginBtn = loginModal.querySelector(".close-btn");
        
        document.querySelector(".login-btn").addEventListener("click", function () {
            loginModal.style.display = "block";
        });

        closeLoginBtn.addEventListener("click", function () {
            loginModal.style.display = "none";
        });
    }

    // Signup Modal
    const signupModal = document.getElementById("signupModal");

    if (signupModal) {
        const closeSignupBtn = signupModal.querySelector(".close-btn");

        document.querySelector(".signup-btn").addEventListener("click", function () {
            signupModal.style.display = "block";
        });

        closeSignupBtn.addEventListener("click", function () {
            signupModal.style.display = "none";
        });
    }

    // Payment Modal
    const paymentModal = document.getElementById("paymentModal");

    if (paymentModal) {
        const closePaymentBtn = paymentModal.querySelector(".close-btn");
        const submitPayment = document.getElementById("submitPayment");

        document.querySelectorAll(".select-plan").forEach(button => {
            button.addEventListener("click", function() {
                paymentModal.style.display = "flex";
            });
        });

        closePaymentBtn.addEventListener("click", function () {
            paymentModal.style.display = "none";
        });

        submitPayment.addEventListener("click", function () {
            let cardHolder = document.getElementById("cardHolder").value;
            let cardNumber = document.getElementById("cardNumber").value;
            let expiryDate = document.getElementById("expiryDate").value;
            let cvv = document.getElementById("cvv").value;

            if (cardHolder && cardNumber && expiryDate && cvv) {
                alert("Payment Successful! 🎉");
                paymentModal.style.display = "none";
            } else {
                alert("Please fill in all details.");
            }
        });
    }

    // Close modals when clicking outside
    window.addEventListener("click", function (event) {
        if (event.target === feedbackModal) {
            feedbackModal.style.display = "none";
        }
        if (event.target === contactModal) {
            contactModal.style.display = "none";
        }
        if (event.target === loginModal) {
            loginModal.style.display = "none";
        }
        if (event.target === signupModal) {
            signupModal.style.display = "none";
        }
        if (event.target === paymentModal) {
            paymentModal.style.display = "none";
        }
    });

    // External Links
    window.redirectToShorts = function () {
        window.open("https://www.youtube.com/@GAMINGWORLD628/shorts", "_blank");
    };

    window.redirectToGames = function () {
        window.open("https://www.miniclip.com/", "_blank");
    };

    window.redirectToCards = function () {
        window.open("https://www.woohoo.in/?srsltid=AfmBOopuSpz62tma_iSqCBAiy7fvEdJRfod8yqS76b34wHVrmI3nxOTy", "_blank");
    };

    // Newsletter Subscription
    const subscribeForm = document.querySelector('.subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            
            if (email) {
                console.log('Subscribed email:', email);
                alert('Thank you for subscribing! You will receive updates at ' + email);
                this.querySelector('input').value = '';
                
                const button = this.querySelector('button');
                button.textContent = 'Subscribed!';
                button.style.backgroundColor = '#0F9D58';
                
                setTimeout(() => {
                    button.textContent = 'Subscribe';
                    button.style.backgroundColor = '#e50914';
                }, 2000);
            } else {
                alert('Please enter a valid email address');
            }
        });
    }

    // Custom Cursor
    const cursor = document.createElement("div");
    cursor.id = "custom-cursor";
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    document.addEventListener("click", (e) => {
        const glitter = document.createElement("div");
        glitter.classList.add("click-effect");
        glitter.style.left = `${e.clientX}px`;
        glitter.style.top = `${e.clientY}px`;
        document.body.appendChild(glitter);

        setTimeout(() => {
            glitter.remove();
        }, 500);
    });

    // Background elements animation
    function adjustBackgroundElements() {
        const elements = document.querySelectorAll('.red-circle, .blue-circle, .red-square, .blue-square');
        elements.forEach(el => {
            el.style.animation = 'float 15s infinite linear';
        });
    }
    adjustBackgroundElements();
});

// Kesari Movie Player Functionality
document.addEventListener("DOMContentLoaded", function () {
    const playBtn = document.getElementById("play-kesari-btn");
    const kesariImg = document.getElementById("kesari-img");
    const kesariPlayer = document.getElementById("kesari-player");
    const kesariPoster = document.getElementById("kesari-poster");
    const closeBtn = document.getElementById("close-player");

    function showPlayer() {
        kesariPoster.style.display = "none";
        kesariPlayer.style.display = "block";
        window.scrollTo({ top: kesariPlayer.offsetTop - 100, behavior: 'smooth' });
    }

    if (playBtn && kesariImg && kesariPlayer && kesariPoster && closeBtn) {
        playBtn.addEventListener("click", function(event) {
    event.preventDefault();
    showPlayer();
});
kesariImg.addEventListener("click", function(event) {
    event.preventDefault();
    showPlayer();
});


        closeBtn.addEventListener("click", function () {
            kesariPlayer.style.display = "none";
            kesariPoster.style.display = "block";
        });
    }
});
