let reviewId = 0;

const loadReviews = () => {
    console.log("Loading Reviews...");

    let reviewsList = document.querySelector('#reviews-list');

    for (const review of reviews) {
        const elem = createReviewElement(review);
        reviewsList.appendChild(elem);
    }
}

const handleReviewSubmit = (event) => {
    console.log("handleReviewSubmit called!");
    event.preventDefault();

    // extract title, rating, likes, reposts when i get home
    const titleInput = document.querySelector('#book-title');
    const title = titleInput.value;
    const reviewInput = document.querySelector('#review-text');
    const reviewText = reviewInput.value;
    const ratingInput = document.querySelector('#rating');
    const rating = ratingInput.value;


    let review = {
        title,
        reviewText,
        rating,
        likes: 0,
        reposts: 0,
    }

    const newReviewElement = createReviewElement(review);

    const reviewsList = document.querySelector('#reviews-list');
    reviewsList.insertBefore(newReviewElement, reviewsList.firstChild);
    console.log(review);
    
    event.target.reset();
}

const createReviewElement = (review) => {
    review.id = reviewId++;
    const elem = document.createElement('div');
    elem.className = 'review-item';
    elem.innerHTML = `
    <p class="book-title">${review.title}</p>
    <p>${review.reviewText}</p>
    <p>Rating: ${review.rating}</p>
    <button id="like-${review.id}" data-liked="false">Likes ${review.likes || 0}</button>
    <button id="repost-${review.id}">Reposts ${review.reposts || 0}</button>
    `;

    const likeButton = elem.querySelector(`#like-${review.id}`);
    likeButton.addEventListener('click', toggleLike);

    const repostButton = elem.querySelector(`#repost-${review.id}`);
    repostButton.addEventListener('click', repostReview);

    return elem;
}

function toggleLike(event) {
    const likeButton = event.target;
    const liked = likeButton.dataset.liked === 'true';
    const likeCount = parseInt(likeButton.textContent.split(' ')[1]);
    const updatedLikeCount = liked ? likeCount - 1 : likeCount + 1;
    likeButton.textContent = `Likes ${updatedLikeCount}`;
    likeButton.dataset.liked = !liked;
}

function repostReview(event) {
    const repostButton = event.target;
    const repostCount = parseInt(repostButton.textContent.split(' ')[1]) + 1;
    repostButton.textContent = `Reposts ${repostCount}`;
}

document.addEventListener("DOMContentLoaded", () => {
    loadReviews();
    const reviewForm = document.querySelector('#review-form');
    reviewForm.addEventListener('submit', handleReviewSubmit);
});
