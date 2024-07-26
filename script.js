// NOTE: Firebase の設定情報
var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

// NOTE: Firebase の初期化
firebase.initializeApp(firebaseConfig);

// NOTE: 通知許可のリクエスト
Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
        // 通知を許可した場合
        console.log('Notification permission granted.');
    } else {
        // 通知を拒否した場合
        console.log('Unable to get permission to notify.');
    }
});

// NOTE: デバイストークンの取得
const messaging = firebase.messaging();
Notification.requestPermission().then((permission) => {
if (permission === 'granted') {
    // 通知を許可した場合
    console.log('Notification permission granted.');

    messaging.getToken().then((currentToken) => {
    if (currentToken) {
        console.log("currentToken:");
        console.log(currentToken);
        document.getElementById('outputText').textContent = currentToken;
    } else {
        console.log("failed to get token");
        document.getElementById('outputText').textContent = "failed to get token✖▽✖";
    }
    });
} else {
    // 通知を拒否した場合
    console.log('Unable to get permission to notify.');
}
});

messaging.onMessage((payload) => {
    console.log('Message received. ', payload);
    // メッセージを表示するなどの処理を追加します
});