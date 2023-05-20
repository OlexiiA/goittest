## Getting Started

To run the project, use the following command: 
- npm install
- npm run dev

# User Cards

This project aims to implement user cards based on the provided design layout. User cards display information about the user and the "Subscribe" button, the text of which, when clicked, changes to "Subscribe", and the color of the button also changes. In addition, the number of subscribers will increase by 1, including your own.

## Features

- User cards displaying user information
- Follow button functionality:
  - Changes text to "Following" upon click
  - Updates button color
  - Increases follower count by 1
- Persistence of user actions:
  - Even after refreshing the page, the Follow button remains in the "Following" state with the appropriate color
  - Follower count does not revert to the initial value
- Reverting button state:
  - Clicking the button again changes its text and color back to the initial state
  - Follower count decreases by 1

## Implementation

The user data is fetched from a custom backend created using the UI service mockapi.io. The "users" resource is utilized, and the user object is described as follows:

- id: Unique identifier for each user
- user: User's name
- tweets: Number of tweets by the user
- followers: Number of followers
- avatar: URL of the user's avatar image

Implemented pagination by displaying 3 tweets per page and downloading more tweets on click of the "Load more" button.

Implemented routing with React Router:

- "/" - Home component: The main page of the application. You can style and design it as per your preference.
- "/tweets" - Tweets component: Displays the tweets. Added a back button that redirects to the home page.

Also added the filtering function using the drop-down list:

- Dropdown options: "show all", "follow", "followings"
  - "show all": Displays all tweets
  - "follow": Shows tweets with the "follow" status
  - "followings": Displays tweets with the "following" status



