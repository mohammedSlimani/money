import firebase from "firebase"
import config from "./config"

export default class DB {

    static instance = null;

    constructor() {
        if (!firebase.apps.length)
            this.instance = firebase.initializeApp(config.firebaseConfig);

    }

    getInstance = () => {
        return this.instance;
    }

    addItem = (item, price) => {
        let payload = {
            "item": item,
            "price": price,
            "date_added": this.instance.ServerValue.TIMESTAMP,
        }
        this.instance.database().ref('items').push(payload)
            .then((res) => console.log("added", res))
            .catch(err => console.log("err", err));
    }

    getAllItems = async () => {
        let myItems = null;
        let db = this.instance.database()
        let itemRef = db.ref().child("items");
        await itemRef.orderByChild("item").once("value").then(data => myItems = data.val());
        return myItems;
    }
}