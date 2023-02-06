# GetUsers

A simple react app that fetches user data from an API.

# Method used

## HTML & CSS

I used basic HTML to build the structure of the app. I also used CSS flexbox while styling the content and made sure that the page is fully responsive.

## Fetch data from API

Here I used axios to make get request to the API to fetch data.

## Handling data

I used React's useState to handle data coming from API.

## Track of how to render the data

Here I used React's useEffect so that it is easy to understand when the data was fetched from API and how we received data. I have commented out the useEffect I used for user reference.

## Loading animation

I built a simple component for the loading animation which gets triggered when a user clicks on 'Get Users' button, making the UI seem attractive to the user.

## Rendering the data in our app

Finally I used the .map() method of javascript to map the data inside the container div. Here each item coming from the API gets rendered as a separate card in our app.