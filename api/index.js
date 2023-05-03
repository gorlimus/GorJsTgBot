module.exports = (request, response) => {
  response.json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
};
// const TgAPI = require("node-telegram-bot-api");
// const { gameOptions, againOptions } = require("../options.js");
// require("dotenv").config();
// const TOKEN = process.env.TOKEN;

// const bot = new TgAPI(TOKEN, { polling: true });
// const chats = {};

// const play = async (chatId, username) => {
//   await bot.sendMessage(chatId, `I generated a a random number from 0 to 9`);
//   const rndNumb = Math.floor(Math.random() * 10);
//   chats[chatId] = rndNumb;
//   console.log(chats[chatId]);

//   await bot.sendMessage(chatId, `Try to guess, @${username}.`, gameOptions);
// };

// const start = () => {
//   bot.setMyCommands([
//     { command: "/start", description: "Greeting" },
//     { command: "/play", description: "Start the game." },
//   ]);

//   bot.on("message", async (msg) => {
//     const text = msg.text;
//     const chatId = msg.chat.id;

//     if (text === "/start") {
//       await bot.sendSticker(
//         chatId,
//         `https://media.giphy.com/media/yoJC2B1sHdXJjPTnEs/giphy.gif`
//       );
//       return bot.sendMessage(
//         chatId,
//         `Hello, ${msg.from.username}. To start a game type '/play'`
//       );
//     }

//     if (text === "/play") {
//       return play(chatId, msg.from.username);
//     }

//     return bot.sendMessage(chatId, `sorry`);
//   });

//   bot.on("callback_query", async (msg) => {
//     const chatId = msg.message.chat.id;
//     const data = msg.data;

//     if (data == "/again") {
//       return play(chatId, msg.from.username);
//     }

//     if (data == chats[chatId]) {
//       return bot.sendMessage(
//         chatId,
//         `Congrats, @${msg.from.username}! It is ${chats[chatId]}.`,
//         againOptions
//       );
//     } else {
//       return bot.sendMessage(
//         chatId,
//         `@${msg.from.username}, you selected ${data} and you didn't guess. Try again.`,
//         againOptions
//       );
//     }
//   });
// };

// start();
