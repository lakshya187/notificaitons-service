import {
  NotificationTypeEnum,
  NotificationChannelEnum,
  NotificationStatusEnum,
} from "./enums";

export interface INotification {
  id: string;
  eventId: string;
  userId: string;
  type: NotificationTypeEnum;
  channel: NotificationChannelEnum;
  message: string;
  status: NotificationStatusEnum;
  scheduledTime?: string;
  createdAt: string;
  updatedAt: string;
}
