## Table of Contents:

-   [About the Project](#about-the-project)
-   [How does this application work](#how-does-this-application-work)
    -   [Pages](#pages)
-   [Running this application locally and testing](#running-this-application-locally-and-testing)
    -   [Using Docker Compose](#using-docker-compose)
        -   [Prerequisites](#prerequisites)
        -   [How to](#how-to)
    -   [Using npm](#using-npm)
        -   [Prerequisites](#prerequisites-1)
        -   [How to](#how-to-1)
-   [Having problem running the application](#having-problem-running-the-app)
-   [Some Choices made](#some-choices-made)
-   [What could have been done better](#what-could-have-been-done-better)
-   [Recording](#recording)

## About the Project

-   This project enables users to give feedback/reviews on a product/service
-   This project uses the [Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/) to categorize its components
-   Works well on mobile and desktop devices
-   It is built with
    -   [React](https://reactjs.org/),
    -   [Typescript](https://www.typescriptlang.org/),
    -   [React router](https://reactrouter.com/en/main/start/overview) for Route management,
    -   [Context API](https://beta.reactjs.org/learn/passing-data-deeply-with-context) for State management,
    -   [local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) for persistence,
    -   [Docker](https://www.docker.com/),
    -   [Rechart](https://recharts.org/en-US/) for display of the bar chart
-   The application is properly tested(Unit tests) using
    -   [Jest](https://jestjs.io/), and
    -   [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## How does this application work

As mentioned above already, user can give feedback on a product/service through this application. To give a feedback/review on a product, the user must provide the following information:

-   Author: The name of the author (must contain atleast one character)
-   Email: A valid email address (validated with regex)
-   Rating: A value between 1 and 5
-   Comment: Text describing the feedback/review

On submission, if all required information is provided, then the user is directed to the Comments page.
The Comments page displays a bar chart which shows the distribution of the received feedback/reviews over time, and the latest comments (the newest comments are displayed first). Each comment displays the email address of the author and the actual text comment.

### Pages

NB: You need to start the application locally to access the following routes

1. [HomePage](http://localhost:3000/)
2. [Comments](http://localhost:3000/comments)

## Running this application locally and testing

1. Clone this repository
2. Cd into the cloned repository
3. There are two ways you can start or test this application locally:

### Using Docker Compose:

#### Prerequisites:

1.  [Docker](https://docs.docker.com/get-docker/)
2.  [Docker Compose](https://docs.docker.com/compose/install/)

#### How to:

1. To run the tests with docker-compose, simply run:

```
docker-compose up test
```

2. To start the application with docker-compose, simply run:

```
docker-compose up web
```

### Using npm:

#### Prerequisites:

1. [Node](https://nodejs.org/en/) at least v14.18.1
2. [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

#### How to:

1. Install the dependencies with:

```
npm install
```

2. Run the tests with:

```
npm test
```

3. Start the application with:

```
npm start
```

Visit `localhost:3000` on your favourite browser to view the application

## Having problem running the app:

1. Be sure to confirm that you do not have another project running on port 3000

## Some Choices Made:

1. Used the atomic design pattern to ease the categorization of components and avoid the unnecessary nesting across the application
2. Testing hooks is debatable. However, the choice was made in this case as it handles most of the logic on the page

## What could have been done better:

1. Creating a simple wrapper component for the interactive components(Input, TextArea e.t.c), this wrapper component would then handle the label, and errors, hence reducing code duplication. However, that would be a "too early abstraction" in this case
2. Displaying the author's name rather than the email to promote privacy

## Recording

https://user-images.githubusercontent.com/35481645/215287685-f47973d2-59c7-4bff-b10f-da6fa4e7c322.mp4


