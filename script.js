const data = [
    "Blog post about JavaScript",
    "Understanding HTML and CSS",
    "How to create a search page",
    "Mobile-friendly web design tips",
    "Best practices in coding"
];

document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value.toLowerCase();
    const results = data.filter(item => item.toLowerCase().includes(query));
    
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = results.length 
        ? results.map(r => `<p>${r}</p>`).join('') 
        : '<p>No results found.</p>';
});
