# Redux Feedback Loop

Duration: Weekend Sprint

To see the fully functional site, please visit:   [DEPLOYED VERSION OF FEEDBACK LOOP](https://feedback-searl.herokuapp.com/)

My last reminder of the day and last reminder of everyday is... Feedback! 
This simple application makes the student's job of giving feedback a breeze. Upon submission, feedback is stored in a database, and allows an administrator to see and sort and manage all feedback that has been given.

This full-stack CRUD application stores the user's feedback a global store using Redux and React-Redux.  The user can go back and change feedback before submitting.  The application tracks that real input has been given before allowing the user to proceed.  Timed messages give users clues as to what they should do if they can't figure out the UI. 

The administrator function is available at /admin or /#/admin.  Responses are presented by most recent by default, but the table uses Material Table so it is sortable by any dimension.  Moment.js is used to show how recently each piece of feedback came in rather than a confusing time stamp.


The coolest features of this application are
* Redux state managing active page view, user input, and validation
* Input Sliders for the 0-10 feedback questions
* Material-UI steppers and conditionally displayed buttons
* Material Table and Moment.js making the /Admin page powerful and easy to use
* DRY code - The Back/Next buttons, the Score chips and the Header are abstracted out into their own elements
* 


### React & Material-UI
Over the weekend I realized most of the documentation on Material-UI is written in a style of React I don't yet know. It took a while to figure out how to change it to a style I could work with reliably.  I don't know if it is Me or the Docs that are behind.

### Material-UI
This framework is powerful but I have a lot to learn about using themes and the makeStyle functions.  It was a struggle for the previously mentioned reason, but after a weekend of using it I did get much faster at implementing Material-UI features.

It was fun to mix conditional rendering with Material-UI icons for the "details and editing" parts of my cards.

### Uppy
Uppy was a struggle.  I did get file uploading to work.  In the future I'll add the upload from URL method, and store the files locally.  Configuring the Express server was outside of the scope of my project for the weekend and I focused on usability and UI.



## Screen Shots

![Main Page](/screenshots/Main.png)

#### Clicking the picture lets you view Full sized and Delete
![Card](/screenshots/Card.png)

#### Adding an image from a url or path
![Adding From Path](/screenshots/Path.png)

#### Uploading to the cloud using Uppy
![Uploading](/screenshots/Upload.png)


## Prerequisites

Node.js is required to run this on your machine.  To install all of the other dependencies run ` npm install ` and Node will take care of the rest.

Need Node?
- [Node.js](https://nodejs.org/en/)

## Installation

You can view the deployed version on Heroku  [REACT GALLERY](https://gallery-searl.herokuapp.com/) or

1. run `git clone http://...` to fork and clone from this repository
2. run `npm install` to install dependencies like Uppy and Material-ui - these are listed in the package.json file
3. use the `database.sql` file to create a postgreSQL database on your machine.  If you need to point this to a different folder look in the todo.router.js.
  * database is called `react_gallery`
  * table is called `gallery`
  * CREATE TABLE instructions included
  * note: priority/difficulty defaults to false/easy
4. run `npm run server` to start the server
5. then run `npm run client` to start the client.  React will open up a browser when the project loads.

## Usage
Try uploading photos. Try adding some from your machine.

On the upload page, notice the small pencil icon next to the thumbnail to add a description.
Adding photos from a path you'll have a much easier time seeing how to add a description.
To 'Like' a photo click the heart image.
To delete click the image to see the description and more actions. Then click the trash and confirm to delete.
To view an image full-sized, click the center 'Full Screen' button.

## Built With

React, Material-ui, Uppy, Pg, and Node.js


## Acknowledgement
Thanks to the Scytale cohort of  [Prime Digital Academy](www.primeacademy.io) in Minneapolis.

## Support
If you have suggestions or issues, please email me at [dhsearl@gmail.com](mailto:dhsearl@gmail.com)

---