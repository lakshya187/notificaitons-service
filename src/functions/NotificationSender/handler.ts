import { SQSEvent, Context } from "aws-lambda";
// import { sendNotification } from "../utils/notificationService";

const handler = async (event: SQSEvent, context: Context) => {
  try {
    console.log("Event received");
    for (const record of event.Records) {
      console.log("Processing record:", record);
    }
    return { statusCode: 200, body: "Notifications sent successfully" };
  } catch (error) {
    console.error("Error sending notifications:", error);
    return { statusCode: 500, body: "Failed to send notifications" };
  }
};

export default handler;
