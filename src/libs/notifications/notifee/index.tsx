import notifeeApi from '@notifee/react-native';

class Notifee {

    async requestPermission() {
        return await notifeeApi.requestPermission();
    }

    async createChannel(channel: any) {
        return await notifeeApi.createChannel(channel);
    }

    async displayNotification(data: { title: string; body: string }) {
        return await notifeeApi.displayNotification({
            title: data.title,
            body: data.body,
        });
    }

}

export const notifee = new Notifee();