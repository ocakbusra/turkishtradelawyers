// Glossary Application - Search, Filter, and Navigation
document.addEventListener('DOMContentLoaded', function () {
    // State
    let currentFilter = 'all';
    let searchQuery = '';

    // Elements
    const searchInput = document.getElementById('glossarySearch');
    const glossaryContent = document.getElementById('glossaryContent');
    const alphabetNav = document.getElementById('alphabetNav');
    const tagButtons = document.querySelectorAll('.glossary-tag');

    // Initialize
    initializeAlphabetNav();
    renderGlossary();

    // Event Listeners
    searchInput.addEventListener('input', function (e) {
        searchQuery = e.target.value.toLowerCase();
        renderGlossary();
    });

    tagButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            tagButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.tag;
            renderGlossary();
        });
    });

    // Initialize Alphabet Navigation
    function initializeAlphabetNav() {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        const usedLetters = new Set(glossaryData.map(item => item.term[0].toUpperCase()));

        alphabetNav.innerHTML = alphabet.map(letter => {
            const hasItems = usedLetters.has(letter);
            return `<a href="#letter-${letter}" class="alphabet-link ${!hasItems ? 'disabled' : ''}">${letter}</a>`;
        }).join('');

        // Smooth scroll for alphabet links
        alphabetNav.querySelectorAll('.alphabet-link:not(.disabled)').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    // Filter and Search
    function getFilteredData() {
        return glossaryData.filter(item => {
            const matchesSearch = !searchQuery ||
                item.term.toLowerCase().includes(searchQuery) ||
                item.question.toLowerCase().includes(searchQuery) ||
                item.excerpt.toLowerCase().includes(searchQuery);

            const matchesFilter = currentFilter === 'all' ||
                item.tags.includes(currentFilter);

            return matchesSearch && matchesFilter;
        });
    }

    // Group by Letter
    function groupByLetter(data) {
        const groups = {};
        data.forEach(item => {
            const letter = item.term[0].toUpperCase();
            if (!groups[letter]) groups[letter] = [];
            groups[letter].push(item);
        });
        return groups;
    }

    // Get Tag Label
    function getTagLabel(tagId) {
        const labels = {
            'contract-law': 'Contract Law',
            'commercial-law': 'Commercial Law',
            'company-law': 'Company Law',
            'data-protection': 'Data Protection',
            'employment': 'Employment',
            'tax-law': 'Tax Law',
            'international-trade': 'International Trade',
            'dispute-resolution': 'Dispute Resolution',
            'intellectual-property': 'Intellectual Property',
            'real-estate': 'Real Estate'
        };
        return labels[tagId] || tagId;
    }

    // Get Tag Icon
    function getTagIcon(tagId) {
        const icons = {
            'contract-law': 'fas fa-file-contract',
            'commercial-law': 'fas fa-store',
            'company-law': 'fas fa-building',
            'data-protection': 'fas fa-shield-alt',
            'employment': 'fas fa-users',
            'tax-law': 'fas fa-calculator',
            'international-trade': 'fas fa-globe',
            'dispute-resolution': 'fas fa-gavel',
            'intellectual-property': 'fas fa-lightbulb',
            'real-estate': 'fas fa-home'
        };
        return icons[tagId] || 'fas fa-tag';
    }

    // Render Dictionary Item
    function renderItem(item) {
        return `
            <div class="glossary-item" data-tags="${item.tags.join(',')}" data-id="${item.id}">
                <div class="glossary-term-header">
                    <h3 class="glossary-term">${item.term}</h3>
                    <span class="glossary-term-tag">
                        ${getTagLabel(item.tags[0])}
                    </span>
                </div>
                <div class="glossary-definition">
                    <p>${item.excerpt}</p>
                    <p class="glossary-context"><em>Context: ${item.question}</em></p>
                </div>
            </div>
        `;
    }

    // Render Glossary
    function renderGlossary() {
        const filteredData = getFilteredData();

        if (filteredData.length === 0) {
            glossaryContent.innerHTML = `
                <div class="glossary-no-results">
                    <i class="fas fa-search"></i>
                    <h3>No results found</h3>
                    <p>Try adjusting your search or filter to find what you're looking for.</p>
                </div>
            `;
            return;
        }

        const grouped = groupByLetter(filteredData);
        const letters = Object.keys(grouped).sort();

        glossaryContent.innerHTML = letters.map(letter => `
            <section class="glossary-letter-section" id="letter-${letter}">
                <div class="glossary-letter-header">
                    <span class="glossary-letter">${letter}</span>
                    <span class="glossary-letter-count">${grouped[letter].length} term${grouped[letter].length > 1 ? 's' : ''}</span>
                </div>
                <div class="glossary-list">
                    ${grouped[letter].map(item => renderItem(item)).join('')}
                </div>
            </section>
        `).join('');

        // Update alphabet nav active states
        updateAlphabetNav(letters);
    }

    // Update Alphabet Navigation
    function updateAlphabetNav(activeLetters) {
        alphabetNav.querySelectorAll('.alphabet-link').forEach(link => {
            const letter = link.textContent;
            if (activeLetters.includes(letter)) {
                link.classList.remove('disabled');
            } else {
                link.classList.add('disabled');
            }
        });
    }
});
