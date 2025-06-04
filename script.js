const loadReviews = () => {
    console.log("Loading Reviews...");

    let reviewsList = document.querySelector('#reviews-list');

    for (const review of reviews) {
        const elem = createReviewElement(review);
        reviewsList.appendChild(elem);
    }
}

const handleReviewSubmit = () => {
    console.log("handleReviewSubmit called!");
}

const createReviewElement = (review) => {
    elem = document.createElement('div');
    elem.className = 'review-item';
    elem.innerHTML = `
    <p class="book-title">${review.title}</p>
    <p>${review.reviewText}</p>
    <p>Rating: ${review.rating}</p>
    <button>Likes ${review.likes}</button>
    <button>Reposts ${review.reposts}</button>
    `;

    return elem;
}

document.addEventListener("DOMContentLoaded", () => {
    loadReviews();
    let submitButton = document.querySelector('button');
    submitButton.addEventListener('click', handleReviewSubmit);
});
