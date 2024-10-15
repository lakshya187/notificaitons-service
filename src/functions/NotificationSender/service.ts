import Whatsapp from "./channels/whatsappNotification";
import { NotificationType } from "./enums";
import { ISendNotificationConfig, IWhatsappMessageConfig } from "./interface";

class NotificationSenderService {
  private whatsappService: Whatsapp;
  constructor() {
    this.whatsappService = new Whatsapp();
  }
  public execute = async (config: ISendNotificationConfig) => {
    switch (config.type) {
      case NotificationType.WHATSAPP:
        await this.sendWhatsappMessageService(config.notification);
        break;
    }
  };

  private sendWhatsappMessageService = async (
    config: IWhatsappMessageConfig
  ) => {
    await this.whatsappService.execute(config);
  };
}

export default NotificationSenderService;
