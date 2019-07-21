# MOVIE MASTER 2019
Movie Master is an app which has its own movie database with a limit number of movies, and provides user information such as movie title, description, poster, and genres etc. And it also connects to OMDB API, where you can search movie by title and get title, poster, year, released date and director displayed. 

Deployed version at: https://movie-master-2019.herokuapp.com/#/

# FEATURES
User will be able to:
- check the basic information of 10 movies on home page (alphabetic order by movie title)
- see the list of movie titles and their genres
- read details of each movie when clicking the poster
- edit the title and/or description of a selected movie and save
- add/remove a genre for a selected movie
- search movie by title keyword (case insensitive, support ambiguous match)
- search movie by title from OMDB (link from nav bar)

There is also an admin interface which requires login (not secured for now). User will be able to add/remove genres after logging into the admin page.

## Database Setup

1. Create a database named `saga_movies_weekend`
2. Run the queries from `database.sql` on the `saga_movies_weekend` database.
3. You will need to create the junction table between the `movies` and `genres` tables!

## Install Dependencies

1. `npm install`
2. `npm run server`
3. `npm run client`

## Built with
- React (including redux and sagas) as front-end framework
- Node.js/Express for server
- PostgreSQL as database
- Material-UI for UI styling

## Detailed Feature List

### Home / List Page

This should display all of the movies in the movie database. When a movie poster is clicked, a user should be brought to the `/details` view.

### Details Page

This should show all details **including genres**, for the selected movie.

The details page should have the buttons:

- `Back to List` button, which should bring the user to the Home Page
- `Edit` button, which should bring the user to the Edit Page

### Edit Page

This should show:

- an input field (for changing the movie title), for the selected movie.
- a textarea (for changing the movie description)

The details page should have the buttons:

- `Cancel` button, which should bring the user to the Details Page
- `Save` button, which should update the title and description in the database and bring the user to the Details Page

### SearchOMDB Page

This page directly connects to OMDB API and user will be able to search movie by title
