import ScheduleNotificationsHelper from "./helper";
import AWS from "aws-sdk";
import ScheduleNotificationsDb from "./db";
class ScheduleNotificationsService extends ScheduleNotificationsHelper {
  private sqs = new AWS.SQS({
    region: "ap-south-1",
  });
  private dbService: ScheduleNotificationsDb | null;

  constructor() {
    super();
    this.dbService = null;
  }
  execute = async () => {
    try {
      const notifications = await this.fetchAllNotifications();
      const sqsMessages = this.buildSQSMessages(notifications);
      console.log(sqsMessages);
      const allSettledPromises = await Promise.allSettled(
        sqsMessages.map(async (msg: any) => {
          try {
            const res = await this.sqs.sendMessage(msg).promise();
            return {
              result: JSON.stringify(res),
              success: true,
            };
          } catch (e) {
            return {
              result: JSON.stringify(e),
              success: false,
            };
          }
        })
      );
      console.log(allSettledPromises);
    } catch (e) {
      console.log(e);
    }
  };
}

export default ScheduleNotificationsService;
