import { SQSEvent, Context } from "aws-lambda";
import NotificationSenderService from "./service";
import { INotification } from "./interface";

const handler = async (event: SQSEvent, context: Context) => {
  const notificationService = new NotificationSenderService();
  try {
    console.log(`Event received, ${event.Records?.length + 1}`);

    for (const record of event.Records) {
      const notification: INotification = JSON.parse(record.body);

      await notificationService.execute({
        type: notification.channel as any,
        notification: {
          templateName: notification.templateName,
          to: [notification.receiver],
          variables: notification?.variables,
        },
      });
    }
    return { statusCode: 200, body: "Notifications sent successfully" };
  } catch (error) {
    console.error("Error sending notifications:", error);
    return { statusCode: 500, body: "Failed to send notifications" };
  }
};

export default handler;
