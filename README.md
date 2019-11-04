# Redux Feedback Loop

Duration: Weekend Sprint

To see the fully functional site, please visit:   [DEPLOYED VERSION OF FEEDBACK LOOP](https://feedback-searl.herokuapp.com/)

My last reminder of the day and last reminder of everyday is... Feedback! 
This simple application makes the student's job of giving feedback a breeze. Upon submission, feedback is stored in a database, and allows an administrator to see and sort and manage all feedback that has been given.

This full-stack CRUD application stores the user's feedback a global store using Redux and React-Redux.  The user can go back and change feedback before submitting.  The application tracks that real input has been given before allowing the user to proceed.  Timed messages give users clues as to what they should do if they can't figure out the UI. 

The administrator function is available at /admin or /#/admin.  Responses are presented by most recent by default, but the table uses Material Table so it is sortable by any dimension.  Moment.js is used to show how recently each piece of feedback came in rather than a confusing time stamp.


### The coolest features of this application are
* Redux state managing active page view, user input, and validation
* Input Range Sliders for the 0-10 feedback questions
* Material-UI steppers and conditionally displayed buttons
* Material Table and Moment.js making the /Admin page powerful and easy to use
* DRY code - The Back/Next buttons, the Score chips and the Header are abstracted out into their own elements
* Secret helper text for users who don't know what to do.

## Notes on a few of these

### Redux State
Keeping the user input in Redux was a breeze and saved passing as props their feedback as we move from page to page towards submit.  Managing what page the user was on was more difficult, but some pen, paper and variable tracking helped that out.  Users must input a slider value before they can progress. This is tracked in a simple array in Redux State.

### Input Sliders
I wanted to challenge myself and try a different input method than typing a number.  [REACT INPUT RANGE ON GIT HUB](https://github.com/davidchin/react-input-range)

### Material Table
I am very please at how well this worked for the admin page.  Material Table is a powerful tool and I will be digging into its feature set.  Using Moment.js and Moment-Timezone, the date column works how an administrator that needs to sort feedback would want.


## Screen Shots

#### Input
![Input Sliders](/screenshots/stepper.png)

#### Mobile Responsive
![Input Sliders](/screenshots/mobile.png)

#### User Review
![Review Page](/screenshots/review.png)

#### Administrator View
![Administrator View](/screenshots/admin.png)

## Prerequisites

Node.js is required to run this on your machine.  To install all of the other dependencies run ` npm install ` and Node will take care of the rest.

Need Node?
- [Node.js](https://nodejs.org/en/)

## Installation

You can view the deployed version on Heroku  [REACT GALLERY](https://feedback-searl.herokuapp.com/) or

1. run `git clone http://...` to fork and clone from this repository
2. run `npm install` to install dependencies like Uppy and Material-ui - these are listed in the package.json file
3. use the `database.sql` file to create a postgreSQL database on your machine.  If you need to point this to a different folder look in the feedback.router.js.
  * database is called `prime_feedback`
  * table is called `feedback`
  * CREATE TABLE instructions included
4. run `npm run server` to start the server
5. then run `npm run client` to start the client.  React will open up a browser when the project loads.

## Usage
Submit your feedback for the day. Leave your thoughts on this project.

Then try going to the /Admin page!
See if you can find the hidden user instructions!

## Built With

React, Redux, Material-ui, Material Table, React Input Range, Moment.js, and Node.js


## Acknowledgement
Thanks to the Scytale cohort of  [Prime Digital Academy](www.primeacademy.io) in Minneapolis.

## Support
If you have suggestions or issues, please email me at [dhsearl@gmail.com](mailto:dhsearl@gmail.com)

---