export function sendLinkToPlay(userId, bot, msg, webAppUrl) {
  return bot.sendMessage(msg.chat.id, 'PRESS START:', {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{
          text: '👾 START GAME 👾',
          web_app: { url: webAppUrl + `/${userId}` }
        }]
      ]
    })
  });
}
