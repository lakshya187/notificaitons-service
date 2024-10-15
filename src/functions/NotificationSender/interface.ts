import {
  NotificationChannelEnum,
  NotificationStatusEnum,
  NotificationType,
  NotificationTypeEnum,
} from "./enums";
export type IVariable = {
  [key: string]: {
    type: string;
    value: string;
  };
};
export interface IWhatsappMessageConfig {
  templateName: string;
  to: string[];
  variables: IVariable;
}

export interface ISendNotificationConfig {
  notification: IWhatsappMessageConfig;
  type: NotificationType;
}

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
  variables: IVariable;
  receiver: string;
  templateName: string;
}
