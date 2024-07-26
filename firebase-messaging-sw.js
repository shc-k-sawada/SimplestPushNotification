// NOTE: Push通知を受け取ると呼ばれる
self.addEventListener('push', function (event) {
    // NOTE: PUSH 通知の内容をセット
    var data = {};
    if (event.data) {
      data = event.data.json();
    }
    var payloadData = event.data.json();
    var pinpointPayload = payloadData.data;
    var title = pinpointPayload["pinpoint.notification.title"];
    var body = pinpointPayload["pinpoint.notification.body"];
    var icon = "/images/icon-192x192.png";
    var notificationUrl = pinpointPayload["pinpoint.url"];

    // NOTE: PUSH 通知を表示
    event.waitUntil(
        self.registration.showNotification(title, {
            body: body,
            icon: icon,
            data: {notificationUrl: notificationUrl}
        })
    );
});

// NOTE: PUSH 通知をクリックした際に呼ばれる
self.addEventListener("notificationclick", function(event) {
    console.log("On notification click: ", event);
  
    event.notification.close();
  
    var notificationData = event.notification;
    var notificationUrl = notificationData.data.notificationUrl;
  
    if (!notificationUrl) {
      console.log("no url to open");
      return;
    }
  
    // NOTE: PUSH 通知に設定されたリンク先へ遷移させる
    event.waitUntil(
      clients
        .matchAll({
          type: "window"
        })
        .then(function(clientList) {
          for (var i = 0; i < clientList.length; i++) {
            var client = clientList[i];
            if (client.url === notificationUrl && "focus" in client) {
              client.focus();
              return;
            }
          }
          if (clients.openWindow) {
            clients.openWindow(notificationUrl);
          }
        })
    );
  });
  