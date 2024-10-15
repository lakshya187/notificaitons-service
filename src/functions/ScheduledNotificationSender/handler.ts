import { APIGatewayEvent, Context } from "aws-lambda";
import ScheduleNotificationsService from "./service";

const handler = async (event: APIGatewayEvent, context: Context) => {
  try {
    console.log("RUNNING CRON TO SEND SCHEDULED NOTIFICATIONS....");
    await new ScheduleNotificationsService().execute();
    console.log("SUCCESSFULLY PROCESSED SCHEDULED NOTIFICATIONS");

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Notifications pushed to SQS" }),
    };
  } catch (error) {
    console.log(
      `ERROR WHEN SCHEDULING NOTIFICATIONS: ${JSON.stringify(error)}`
    );
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error pushing notifications", error }),
    };
  }
};

export default handler;
