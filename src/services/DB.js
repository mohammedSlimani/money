import firebase from "firebase"
import config from "./config"

export default class DB {

    static instance = null;

    async constructor() {
        if(this.instance == null)    
            this.instance = await firebase.initializeApp(config.firebaseConfig);
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

    getAllItems = () =>{
        let myItems = null;
        let db = this.instance.database()
        let itemRef = db.ref().child("items");
        await itemRef.orderByChild("item").once("value").then(data => myItems = data.val());
        return myItems;
    }
}