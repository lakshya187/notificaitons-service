import ScheduleNotificationsDb from "./db";
import { INotification } from "./interfaces";

class ScheduleNotificationsHelper extends ScheduleNotificationsDb {
  protected buildSQSMessages = (notifications: INotification[]) => {
    const sqsURL =
      "https://sqs.ap-south-1.amazonaws.com/851725575166/notification-service-dev";
    const sqsMessages = notifications.map((notification) => ({
      QueueUrl: sqsURL,
      MessageBody: JSON.stringify(notification),
    }));
    return sqsMessages;
  };
}

export default ScheduleNotificationsHelper;
