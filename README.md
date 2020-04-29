## re-com

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This code is live at https://re-com.herokuapp.com/

## Config and Development

1. Install dependencies locally with
   ```
   npm install
   ```
2. Setup images to work correctly
3. Setup `firebase` database and related authentication
   ```
   1. npm install firebase (if not already done)
   2. Create a new project for firebase
   3. Click project overview in the left panel and add Firebase to web app
   4. Copy the config value and paste in src/firebase/firebase.utils.js : firebaseConfig
   5. If config for the first time then navigate to the firebase console
      1. Develop -> Authentication -> Set up sign-in method
      2. Enable needed auth methods : sign in with gmail
      3. Create a firestore database in test mode with a root `users` collection
      4. Enable sign in with Email/Password
      5. Check console log if any error occurs.
   ```
4. Setup `stripe` for payment and credit card mocking
   ```
   1. npm install react-stripe-checkout (if not already installed)
   2. Signup or sign into stripe payments
   3. In developers tab -> API keys -> copy publishable key
   4. Paste info in src/components/stripe-button/stripe-button-component.jsx
   ```
5. Run locally
   ```
   npm run develop
   ```
6. Deploy to `heroku`
   ```
   1. Install heroku-cli
   2. Create a heroku account and log in in the terminal
   3. heroku create *YOUR_APP_NAME* --buildpack mars/create-react-app
   4. git push heroku master
   5. Click on the deployed link at https://*YOUR_APP_NAME*.herokuapp.com/
   ```
7. ENJOY!!!
