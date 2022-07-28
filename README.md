# NC-News: Northcoders Frontend Project

Solo project for the Frontend portion of the Northcoders Web Development bootcamp.

# Hosted

A hosted version of this project can be found [here.](https://nc-news-fe-ae.netlify.app/)

## The Project

The aim of this project was to provide an interface to interact with an API that was developed during the Backend portion of the course, which can be found [here](https://github.com/AdamEth98/be-nc-news). The API exposes a number of endpoints for GET, POST, PATCH and DELETE requests, all of which are utilised by this project.

Users can view a list of all available articles, choose the way they're displayed through sorting and continue on to read the full article on it's own separate page. Here, the user will also find a form to comment on the article, along with a list of all previous comments, as well as buttons to update the article or individual comments.

A user may also delete comments they've made.

## Cloning

Fork and clone this repo, and then:

1.  Run `npm install` to install the required dependencies
2.  Run `npm start` in order to run the project. A new browser tab/window will open.
3.  Once any changes have been made and it's ready for deployment, run `npm run build`
4.  You can now deploy this app, providing `./build` as the deployment directory

## Stack

This repo uses React for rendering, alongside react-router-dom in order to manage routing. All http requests are made using axios.
