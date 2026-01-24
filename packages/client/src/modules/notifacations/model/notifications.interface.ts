export interface INotification {
  id: string;
  message: string;
  type: TNotificationType;
}

export type TNotificationType = "success" | "error" | "warning" | "info";

export type CreateNotificationDto = Omit<INotification, "id">;
