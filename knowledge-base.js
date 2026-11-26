(() => {
    const page = document.querySelector('.kb-page');
    if (!page) return;

    for (const link of page.querySelectorAll('.kb-skip-link, .kb-hero-actions a[href="#videos"]')) {
        link.addEventListener('click', () => {
            page.querySelector(link.hash).focus({ preventScroll: true });
        });
    }

    const grid = page.querySelector('#kb-grid');
    const search = page.querySelector('.kb-search');
    const query = page.querySelector('#kb-query');
    const filters = page.querySelector('.kb-filters');
    const count = page.querySelector('#kb-count');
    const empty = page.querySelector('#kb-empty');
    const more = page.querySelector('#kb-more');
    const pageSize = 12;
    let activeFilter = 'all';
    let visibleLimit = pageSize;

    function normalize(text) {
        return text.normalize('NFKD').replace(/\p{M}/gu, '').toLowerCase().replaceAll('ı', 'i');
    }

    const cards = [...grid.children].map(card => ({
        element: card,
        category: card.dataset.category,
        searchText: normalize(card.textContent + ' ' + card.querySelector('.kb-original').content.textContent),
    }));

    function updateLibrary() {
        const terms = normalize(query.value).trim().split(/\s+/).filter(Boolean);
        let matches = 0;
        let firstRevealed;
        for (const card of cards) {
            const sameTopic = activeFilter === 'all' || card.category === activeFilter;
            const matchesQuery = terms.every(term => card.searchText.includes(term));
            if (sameTopic && matchesQuery) matches += 1;
            const hide = !sameTopic || !matchesQuery || matches > visibleLimit;
            if (!hide && card.element.hidden) firstRevealed ??= card.element;
            card.element.hidden = hide;
        }
        const order = activeFilter === 'all' && terms.length === 0 ? ' · Newest first' : '';
        const label = matches === 1 ? 'video' : 'videos';
        count.textContent = `${matches} ${label}${order}`;
        empty.hidden = matches > 0;
        more.hidden = matches <= visibleLimit;
        return firstRevealed;
    }

    const filterButtons = [...filters.querySelectorAll('button')];
    function setFilter(key) {
        activeFilter = key;
        for (const button of filterButtons) {
            button.setAttribute('aria-pressed', String(button.dataset.filter === key));
        }
    }

    filters.addEventListener('click', event => {
        const button = event.target.closest('button[data-filter]');
        if (!button) return;
        setFilter(button.dataset.filter);
        visibleLimit = pageSize;
        updateLibrary();
    });

    query.addEventListener('input', () => {
        visibleLimit = pageSize;
        updateLibrary();
    });

    page.querySelector('#kb-reset').addEventListener('click', () => {
        query.value = '';
        setFilter('all');
        visibleLimit = pageSize;
        updateLibrary();
        query.focus();
    });

    more.querySelector('button').addEventListener('click', () => {
        visibleLimit += pageSize;
        updateLibrary()?.querySelector('.kb-thumbnail').focus();
    });

    search.hidden = false;
    filters.hidden = false;
    updateLibrary();

})();
