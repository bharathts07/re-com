## re-com

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Built following a react tutorial

## Config and Development

1. Install dependencies locally with
   ```
   npm install
   ```
2. Setup images to work correctly
3. Setup firestore database and related authentication
   1. npm install firebase (if not already done)
   2. Create a new project
   3. Click project overview in the left panel and add Firebase to web app
   4. Copy the config value and paste in src/firebase/firebase.utils.js : firebaseConfig
   5. If config for the first time then navigate to the firebase console
      1. Develop -> Authentication -> Set up sign-in method
      2. Enable needed auth methods : sign in with gmail
      3. Create a firestore database in test mode with a root `users` collection
      4. Enable sign in with Email/Password
      5. Check console log if any error occurs.
4. Setup stripe for payment and credit card mocking
5. Run locally
6. Deploy to heroku
7. ENJOY!!!
