# MOVIE MASTER PROJECT
Movie Master is an app with a movie database, which will provide you information such as movie title, description, poster, and genres etc.

# FEATURES
User will be able to:
- check the basic information of 10 movies on home page (alphabetic order by movie title)
- see the list of movie titles and their genres
- read details of each movie when clicking the poster
- edit the title and/or description of a selected movie and save
- add/remove a genre for a selected movie
- search movie by title keyword (case insensitive, support ambiguous match)

There is also an admin interface which requires login (not secured for now). User will be able to add/remove genres after logging into the admin page.

## Database Setup

1. Create a database named `saga_movies_weekend`
2. Run the queries from `database.sql` on the `saga_movies_weekend` database.
3. You will need to create the junction table between the `movies` and `genres` tables!

## Install Dependencies

1. `npm install`
2. `npm run server`
3. `npm run client`

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

### General Tasks

As one of your last projects, it's possible you will be sharing this with employers, so be sure to follow best practices and make it look good!

- [ ] Invest some time in styling it up!
    - [ ] Research grids for you movie posters on the Move List page
    - [ ] Add route change animations
- [ ] Commit your code frequently! You should have at 15+ commits on a project of this size. Use branches to help break down your features.
- [ ] Comment your code.
- [ ] Update this README to include a description of the project in your own words.

## Stretch Goals

- [ ] Display the current values in the input (title) and textarea (description) on the Edit Page
- [ ] Display all genres on movie list page. Research [array_agg](https://stackoverflow.com/questions/43458174/how-to-save-and-return-javascript-object-with-subarray-in-normalized-sql) to make this possible.
- [ ] Move sagas and reducers out of your `index.js` and into separate files (ideally in `src/redux/reducers` and `src/redux/sagas` folders).
- [ ] Allow the user to refresh the details or edit page. The url for the details page would be something like `/details/1` for movie with id of `1`. Research [react router params](https://reacttraining.com/react-router/web/example/url-params).
- [ ] Allow the user to add a genre to a movie.
- [ ] Allow the user to remove a genre from a movie.
- [ ] Only display the top 10 movies, and allow the user to search for movie titles with a search bar on the home page (you can do this on the client side or the server side, server side is a bigger stretch, but good practice).
- [ ] Create an `Admin` page. Add a link from the `Home` page to the `Admin` page. The page should initially display a login form (an input for username and an input for password). When the user enters the correct username (`camera`) and password (`action`), the page should display a form to add genres to the database, and a list of all of the genres with an `x` to remove them from the database. Note: This isn't actually secure, but it's pretty fun, and really good practice.
