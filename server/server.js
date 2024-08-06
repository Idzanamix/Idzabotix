import { PORT, DOMAIN } from './app/env.js';
import { app } from './app/appExpress.js';
import { renderMiddleware } from './middlewares/renderMiddleware.js';
import TelegramApi from 'node-telegram-bot-api';


const bot = new TelegramApi('7043939905:AAEfVxsP-aiPu7KKrWNWoEgiZc7jZ7hRVAw', { polling: true });


bot.on('message', async msg => {
  const text = msg.text;
  const chatId = msg.chat.id;

  try {
    if (text === '/start') {
      await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/7.webp')
      return bot.sendMessage(chatId, `Добро пожаловать в телеграм бот Idzanamix`);
    }
    if (text === '/info') {
      return bot.sendMessage(chatId, `Тебя зовут ${msg.from?.first_name} ${msg.from?.last_name}`);
    }

    return bot.sendMessage(chatId, 'Я тебя не понимаю, попробуй еще раз!)');
  } catch (e) {
    return bot.sendMessage(chatId, 'Произошла какая то ошибочка!)');
  }

})

// Serve HTML
app.use('*', renderMiddleware);

// Start http server
app.listen(PORT, () => {
  console.log(`Server started at ${DOMAIN}`);
});



