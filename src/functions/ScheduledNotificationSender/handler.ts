import { APIGatewayEvent, Context } from "aws-lambda";
import AWS from "aws-sdk";
// import { getScheduledNotifications } from "../utils/dynamoDB";

const sqs = new AWS.SQS({
  region: "ap-south-1",
});

const handler = async (event: APIGatewayEvent, context: Context) => {
  try {
    console.log("pushing notificaitons in the queue");

    const notifications: any = [];
    // const sqsURL =
    //   "https://sqs.ap-south-1.amazonaws.com/851725575166/notification-service-dev";
    // const sqsMessages = notifications.map((notification: any) => ({
    //   QueueUrl: sqsURL,
    //   MessageBody: JSON.stringify(notification),
    // }));

    // await Promise.all(
    //   sqsMessages.map((msg: any) => sqs.sendMessage(msg).promise())
    // );

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Notifications pushed to SQS" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error pushing notifications", error }),
    };
  }
};

export default handler;
