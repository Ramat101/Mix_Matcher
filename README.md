# Mix & Matcher
Utility intended to sort mutual matches post a matching event (ex. speed dating event).

## Screenshots
### Form Page
![Form Page](https://github.com/Ramat101/Mix_Matcher/blob/master/public/Form.png)

### Results Page
![Results Page](https://github.com/Ramat101/Mix_Matcher/blob/master/public/Results.png)

## How to use:
1. Create a user feedback form (ex. [Google Forms](https://www.google.com/forms/about/))
2. Gather user's responses, download collective user responses as a .csv file
3. In the [common/utils/utils.js](./src/common/utils/utils.js) file, update the INTERESTED_SET, MAYBE_SET, and the EVENT_FEEDBACK_FORM_KEYS variables with the relevant keys
4. Locally run the app (npm start)
4. Upload user response .csv file into the app
5. Generate matches
6. Click the user's email, to draft an email containing user's event matches


## Scripts
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
