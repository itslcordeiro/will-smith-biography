const movieCards = document.querySelectorAll('.movie-card');
const movieInfo = document.getElementById('movie-info');
const movieTitle = document.getElementById('movie-title');
const movieDescription = document.getElementById('movie-description');
const movieRating = document.getElementById('movie-rating');

movieCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        movieTitle.textContent = card.getAttribute('data-title');
        movieDescription.textContent = card.getAttribute('data-description');
        movieRating.textContent = card.getAttribute('data-rating');
        
        movieInfo.style.display = 'block';
    });
    
    card.addEventListener('mouseleave', () => {
        movieInfo.style.display = 'none';
    });
});

