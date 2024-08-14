import TelegramApi from 'node-telegram-bot-api';
import { generateRandomCat } from './generateRangomCat.js';
import { DOMAIN } from '../app/env.js';
import { catArr } from './generateRangomCat.js';
import { sendLinkToPlay } from './sendLinkToPlay.js'

const bot = new TelegramApi('7043939905:AAEfVxsP-aiPu7KKrWNWoEgiZc7jZ7hRVAw', { polling: true });
const stickerId = 'CAACAgIAAxkBAAEMndVms6oa7hd7QsewWaoSrhvFAAFqq2MAAlIBAAIw1J0REcIGUv8PNaQ1BA';
const webAppUrl = `https://${DOMAIN}/game`;

bot.on('message', async msg => {
  const text = msg.text;
  const chatId = msg.chat.id;
  const userId = msg.from.id;

  try {
    if (text === '/start') {
      await bot.sendSticker(chatId, stickerId);

      bot.sendMessage(chatId, 'Welcome to IdzaBotix!');
      return sendLinkToPlay(userId, bot, msg, webAppUrl);
    }

    if (text === '/game' || text === '/start') {
      return sendLinkToPlay(userId, bot, msg, webAppUrl);
    }

    bot.sendMessage(chatId, `Meow! ${generateRandomCat(catArr)}`);
  } catch (e) {
    console.log(e);
  }
});


export default bot;
