import { useEffect, useRef } from "react"
import { firebaseMessaging } from "./firebase"
import { userModel } from "../../entities/user/UserModel";
import { userService } from "../../entities/user/UserService";
import { notifee } from "./notifee";

export const useNotifications = () => {
    const token = userModel.token;
    const unsubscribe = useRef<Function | null>(null);

    useEffect(() => {
        notifee.requestPermission();
    }, []);

    useEffect(() => {
        if (token) {
            unsubscribe.current = firebaseMessaging.subscribeAppWithFCM(onMessage);
            firebaseMessaging.getFCMToken()
                .then((token) => { token && userService.addToken(token); })
                .catch(console.error);
        } else {
            unsubscribe.current?.();
        }
        return () => {
            unsubscribe.current?.();
        }
    }, [token]);

    const onMessage = (remoteMessage: any, type: 'onMessage') => {
        if (type === 'onMessage') {
            const { title, body } = remoteMessage.notification;
            notifee.displayNotification({ title, body });
        }
    }

};