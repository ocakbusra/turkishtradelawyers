(function () {
    var pdfUrl = '/output/pdf/TTL_Residence_Permits_for_Foreign_Investors.pdf';
    var overlay = document.getElementById('residence-download-modal');
    var openButton = document.getElementById('openResidenceDownloadBtn');
    var closeButton = document.getElementById('residenceDownloadClose');
    var form = document.getElementById('residence-download-form');
    var emailInput = document.getElementById('residence-download-email');
    var submitButton = document.getElementById('residence-download-submit');
    var error = document.getElementById('residenceDownloadError');
    var success = document.getElementById('residenceDownloadSuccess');
    var fallback = document.getElementById('residenceDownloadFallback');
    var previousFocus;

    if (!overlay || !openButton || !closeButton || !form || !emailInput ||
        !submitButton || !error || !success || !fallback) return;

    function openModal() {
        previousFocus = document.activeElement;
        overlay.hidden = false;
        document.body.style.overflow = 'hidden';
        emailInput.focus();
    }

    function closeModal() {
        overlay.hidden = true;
        document.body.style.overflow = '';
        if (previousFocus && previousFocus.focus) previousFocus.focus();
    }

    function startDownload() {
        var link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'TTL_Residence_Permits_for_Foreign_Investors.pdf';
        document.body.appendChild(link);
        link.click();
        link.remove();

        if (typeof window.gtag === 'function') {
            window.gtag('event', 'pdf_download', {
                event_category: 'lead',
                event_label: 'Foreign Investor Residence Permits Decision 11994'
            });
        }
    }

    openButton.addEventListener('click', openModal);
    closeButton.addEventListener('click', closeModal);
    overlay.addEventListener('click', function (event) {
        if (event.target === overlay) closeModal();
    });
    overlay.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeModal();
            return;
        }
        if (event.key !== 'Tab') return;
        var controls = Array.prototype.filter.call(
            overlay.querySelectorAll('button, input, a[href]'),
            function (element) { return !element.closest('[hidden]') && !element.disabled; }
        );
        if (!controls.length) return;
        if (event.shiftKey && document.activeElement === controls[0]) {
            event.preventDefault();
            controls[controls.length - 1].focus();
        } else if (!event.shiftKey && document.activeElement === controls[controls.length - 1]) {
            event.preventDefault();
            controls[0].focus();
        }
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var email = emailInput.value.trim();
        if (!email || !emailInput.checkValidity()) {
            error.textContent = 'Please enter a valid email address.';
            error.hidden = false;
            emailInput.focus();
            return;
        }

        error.hidden = true;
        fallback.hidden = true;
        submitButton.disabled = true;
        submitButton.textContent = 'Preparing your download…';

        fetch('https://formspree.io/f/mnneobaw', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({
                email: email,
                _subject: 'PDF Download Lead - Foreign Investor Residence Permits Decision 11994',
                message: 'English translation download from the foreign investor residence permits guide.',
                source: 'foreign-investor-residence-permits-turkiye-2026.html'
            })
        }).then(function (response) {
            if (!response.ok) throw new Error('Form submission failed');
            form.hidden = true;
            success.hidden = false;
            startDownload();
        }).catch(function () {
            error.textContent = 'We could not submit your email. Please try again, or use the direct PDF link below.';
            error.hidden = false;
            fallback.hidden = false;
        }).finally(function () {
            submitButton.disabled = false;
            submitButton.innerHTML = '<i class="fas fa-download" aria-hidden="true"></i> Download the English translation';
        });
    });
})();
