import moment from "moment";
import { INotification } from "./interfaces";
import axiosClient from "../../utils/axios";

class ScheduleNotificationsDb {
  public fetchAllNotifications = async () => {
    const currentDate = moment();
    const offsettedDate = moment(currentDate).add(5, "minutes").toString();
    console.log(`FETCHING FROM ${currentDate.toString()} TO ${offsettedDate}`);
    const { data } = await axiosClient.get(
      `/notifications?type=scheduled&status=pending&startTime=${currentDate.toString()}&endTime=${offsettedDate}`
    );

    return data.data as unknown as INotification[];
  };
}

export default ScheduleNotificationsDb;
