import { notification } from "antd";
import { Notification } from "../types/TNotification";

export const openNotification = ({ message, description, type }: Notification): void => {
  if (type === "error") {
    notification.error({
      message: message,
      description: description,
      duration: 3,
    });
  }

  if (type === "success") {
    notification.success({
      message: message,
      description: description,
      duration: 3,
    });
  }
};
