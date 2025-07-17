import { notification } from 'antd';

const getCurrentNotification = () => {
    const notifications = notification.instance;

    for (const key in notifications) {
        const notificationItem = notifications[key];
        if (notificationItem && notificationItem.state === 'open') {
            return {
                type: notificationItem.type,
                message: notificationItem.message,
                description: notificationItem.description
            };
        }
    }

    return null;
};

const NotificationToast = (type, message, description) => {

    const currentNotification = getCurrentNotification();

    console.log(currentNotification);

    if (currentNotification && currentNotification.type === type && currentNotification.description === description) {
        return;
    }

    notification[type]({
        message: message,
        description: description,
        duration: 10,
    });
};

export default NotificationToast;
