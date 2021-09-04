# Postcode Checker Web App

This app was written for the Scottish Tech Army to aid with directing customers to their local distributer of free feminine hygiene products.

The app takes in a postcode - which should be for an address in Scotland - and returns information based on the Council Area corresponding to this postcode.

## How It Works

The free API https://api.postcodes.io is used to retrieve the council area corresponding to the postcode entered.  Then, a Firebase Realtime Database (created and updated by the author) is accessed to get the "Dignity Period" information for that council area.  If the relevant body has gone live with its online ordering service, that page is opened in a new tab.  If not, a message is displayed with a link to the council's TSI (Third Sector Industry / Voluntary Service).  If the postcode is invalid or is not for a scottish address, an error message is returned.  

## API

A "No Sql" database hosted on Firebase.  The latest JSON file is in this project under /db/perioddignitydb.json.  The link to the hosted db is:

https://perioddignitydb-default-rtdb.europe-west1.firebasedatabase.app/.json

## Running the app

Clone the repo and in the project directory, run: 

### `npm install`

Then you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


