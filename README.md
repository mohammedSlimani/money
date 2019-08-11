# money
A React Native app to keep track of my money. 

## How to run this project in your machine 
- Install React native. Follow [this Tutorial](https://facebook.github.io/react-native/docs/getting-started)
- clone the repository 
- You need to have your own FireBase Configuration. It is very simple to get. 
  - You make your app [at firebase](https://console.firebase.google.com/)
  - You get your configuration that will be used to initialize your app
  - Copy and paste them in a file named config.js in the service directory like this
```
  export default config={
    firebaseConfig:{
        apiKey: "YOUR_KEYS",
        authDomain: "YOUR_KEYS",
        databaseURL: "YOUR_KEYS",
        projectId: "YOUR_KEYS",
        storageBucket: "YOUR_KEYS",
        messagingSenderId: "YOUR_KEYS",
        appId: "YOUR_KEYS"
    }
}
  ```
- inside the directory of the project run the following
```
yarn install
yarn start
```
Leave the terminal open. You have now started the server that will server JS to your app
- Then in another terminal, and inside the project directory run 
```
react-native run-android
```
(You can use your android phone or you emulator)

- That's it. The app should be installing in your phone 


