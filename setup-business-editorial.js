(function () {
    'use strict';

    function setupBusinessFormRail() {
        var card = document.querySelector('.business-setup-editorial .sidebar-form-card');
        var formationHeading = document.querySelector('.business-setup-editorial #formation');

        if (!card || !formationHeading) return;

        var desktopQuery = window.matchMedia('(min-width: 921px)');
        var originalTop = 0;
        var cardHeight = 0;
        var formationTop = 0;
        var topOffset = 96;
        var endGap = 28;

        function documentTop(element) {
            var top = 0;
            var current = element;

            while (current) {
                top += current.offsetTop || 0;
                current = current.offsetParent;
            }

            return top;
        }

        function measure() {
            card.style.transform = 'none';
            originalTop = documentTop(card);
            cardHeight = card.offsetHeight;
            formationTop = documentTop(formationHeading);
        }

        function update() {
            if (!desktopQuery.matches) {
                card.style.transform = '';
                return;
            }

            // Keep the release point live: late-loading fonts and responsive
            // content can change the heading's document position after the
            // first measurement.
            formationTop = documentTop(formationHeading);
            cardHeight = card.offsetHeight;

            var desired = window.scrollY + topOffset - originalTop;
            var maximum = formationTop - endGap - cardHeight - originalTop;
            var translate = Math.min(Math.max(desired, 0), Math.max(maximum, 0));

            card.style.transform = 'translate3d(0, ' + translate + 'px, 0)';
        }

        function remeasureAndUpdate() {
            measure();
            update();
        }

        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', remeasureAndUpdate);
        desktopQuery.addEventListener('change', remeasureAndUpdate);

        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(remeasureAndUpdate);
        }

        // Re-measure after the browser has completed its first layout pass and
        // after any webfont/layout shifts that happen immediately afterward.
        window.addEventListener('load', remeasureAndUpdate);
        window.setTimeout(remeasureAndUpdate, 300);
        window.setTimeout(remeasureAndUpdate, 1200);

        remeasureAndUpdate();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupBusinessFormRail);
    } else {
        setupBusinessFormRail();
    }
})();
