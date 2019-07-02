import firebase from './firebase.config';

class SendData {
    sendData = (key, value) => {
        firebase.database().ref(`/devices/${key}`).push(value).then((d) => console.log('firebasefirebase', d));
    }
}

export default SendData;