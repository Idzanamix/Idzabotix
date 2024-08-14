import { postEvent } from "@telegram-apps/sdk";
import { initSwipeBehavior } from '@telegram-apps/sdk';



export function telegramSettings() {
  const [swipeBehavior] = initSwipeBehavior();

  swipeBehavior.disableVerticalSwipe();
  window.Telegram.WebApp.disableVerticalSwipes();
  postEvent('web_app_setup_closing_behavior', { need_confirmation: true });
  postEvent('web_app_expand');
}
