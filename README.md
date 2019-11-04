# Redux Feedback Loop

Duration: Weekend Sprint

To see the fully functional site, please visit:   [DEPLOYED VERSION OF FEEDBACK LOOP](https://feedback-searl.herokuapp.com/)

The React Gallery is a full-stack display of images from a Postgres database.  Users can Like, Delete, View full sized, add from a url, and upload photos too.

The hardest parts about creating this app were:
* Using React Classes with Material-UI
* Material-UI
* Configuring Uppy file uploader


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