This project uses the [Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/)

## What can you do with this project:

A. Give Feedback/Review on a Product
This project allows you to give a feedback/review on a product, it requires only four(4) information:

1. Name
2. Email
3. Rating
4. Comment

Please note that all fields are required, and the UI will prompt you with suggestive hints on what is required for a specific invalid field

B. View Feedback/Review:
You can view the comments of a review, including the email of the author of such review.
This page also allows you to see the distribution of the review ratings overtime.

### Requirements:

To run this project you must have:

1. docker
2. docker compose

### How to run this project

1. Clone this repository
2. Cd into this repository (you just cloned)
3. Run `docker-compose up`
4. You can now view the application on your browser by going to `http://localhost:3000/`

### Having problem running the app:

1. Be sure to confirm that you do not have another project running on port 3000

### What more can be improved?

1. Creating a wrapper component (molecule) that can be used for validation
