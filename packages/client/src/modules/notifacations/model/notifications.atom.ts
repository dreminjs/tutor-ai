import { atom, createStore } from "jotai";
import { v4 as uuidv4 } from "uuid";
import type {
  CreateNotificationDto,
  INotification,
} from "./notifications.interface";

export const notificationsStore = createStore();

export const notificationsAtom = atom<INotification[]>([]);

export const addNotificationAtom = atom(
  null,
  (get, set, notification: CreateNotificationDto) => {
    const id = uuidv4();
    const duration = 5000;

    const newNotification: INotification = {
      ...notification,
      id,
      type: notification.type || "default",
    };

    set(notificationsAtom, (prev) => [...prev, newNotification]);

    if (duration > 0) {
      setTimeout(() => {
        setTimeout(() => {
          set(notificationsAtom, (prev) => prev.filter((n) => n.id !== id));
        }, 300);
      }, duration);
    }

    return id;
  },
);

export const removeNotificationAtom = atom(null, (get, set, id: number) => {
  const notifications = get(notificationsAtom);
  set(
    notificationsAtom,
    notifications.filter((n) => n.id !== id),
  );
});
