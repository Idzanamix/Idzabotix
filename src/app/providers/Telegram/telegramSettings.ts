import { postEvent } from "@telegram-apps/sdk";

export function telegramSettings() {
  postEvent('web_app_setup_closing_behavior', { need_confirmation: true });
  postEvent('web_app_expand');
}
