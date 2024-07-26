# SimplestPushNotification
Firebase Cloud Messaing を利用した PUSH 通知テスト web アプリ

デバイストークンの取得と PUSH 通知の表示のみを行う

# 実行方法
1. `./.env` ファイルに定義されている `PORT` を任意の値に書き換える
2. プロジェクトフォルダ直下で `go run main.go` を実行
3. ブラウザのリンクに `localhost:<指定PORT番号>` を入力

# 事前準備
1. `./script.js` の Firebase 設定情報を必要に応じて書き換える
```javascript
var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};
```
