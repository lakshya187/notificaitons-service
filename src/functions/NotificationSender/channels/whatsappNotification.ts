import axios from "axios";
import { IWhatsappMessageConfig } from "../interface";
import Notifications from "./NotificationService";
class Whatsapp extends Notifications {
  private baseUrl =
    "https://api.msg91.com/api/v5/whatsapp/whatsapp-outbound-message/bulk/";
  private authKey = "";
  public execute = (config: IWhatsappMessageConfig) => {
    return this.sendWhatsappMessage(config);
  };
  private async sendWhatsappMessage(config: IWhatsappMessageConfig) {
    const data = {
      integrated_number: "917217699559",
      content_type: "template",
      payload: {
        messaging_product: "whatsapp",
        type: "template",
        template: {
          name: config.templateName,
          language: {
            code: "en",
            policy: "deterministic",
          },
          namespace: null,
          to_and_components: [
            {
              to: config.to,
              components: config.variables,
            },
          ],
        },
      },
    };

    const headers = {
      "Content-Type": "application/json",
      authkey: this.authKey,
    };

    try {
      const response = await axios.post(this.baseUrl, data, { headers });
      console.log("WhatsApp message sent successfully:", response.data);
    } catch (error: any) {
      console.error(
        "Error sending WhatsApp message:",
        error.response?.data || error.message
      );
    }
  }
}

export default Whatsapp;
