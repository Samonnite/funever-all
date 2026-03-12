/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

import { Bot, Keyboard, InlineKeyboard, GrammyError, HttpError } from "grammy";

const TELEGRAM_BOT_TOKEN =
  process.env.TELEGRAM_BOT_TOKEN ||
  "$YOUR_TOKEN_HERE";
const MINI_APP_HOST =
  process.env.MINI_APP_HOST || "https://test-ton.funever.io";

import { SocksProxyAgent } from "socks-proxy-agent";

const socksAgent = new SocksProxyAgent("socks://127.0.0.1:7890");
export const bot = new Bot(TELEGRAM_BOT_TOKEN, {
  client: {
    // baseFetchConfig: {
    //   agent: socksAgent,
    //   compress: true,
    // },
    timeoutSeconds: 60,
  },
});
const guessnlineKeyboard = new InlineKeyboard().add(
  InlineKeyboard.webApp("参与竞猜", `${MINI_APP_HOST}/home`)
);
const statInlineKeyboard = new InlineKeyboard().add(
  InlineKeyboard.webApp("查看统计", `${MINI_APP_HOST}/home`)
);
// 监听信息
bot.on("message:text", async (ctx) => {
  // ctx.reply("已收到: " + ctx.message.text);
  if (ctx.message.text.includes("竞猜")) {
    return await ctx.api.sendPhoto(
      ctx.chatId,
      "https://funever.io/assets/img/man-2.png",
      {
        caption: "The Ultimate Web3 Gaming And E-sports Aggregator",
        parse_mode: "HTML",
        reply_markup: guessnlineKeyboard,
        protect: true,
      }
    );
  }
  if (ctx.message.text.includes("统计")) {
    return await ctx.api.sendPhoto(
      ctx.chatId,
      "https://funever.io/assets/img/man-2.png",
      {
        caption: "The Ultimate Web3 Gaming And E-sports Aggregator",
        parse_mode: "HTML",
        reply_markup: statInlineKeyboard,
        protect: true,
      }
    );
  }
  return await ctx.reply("Welcome to Funever", {
    reply_markup: keyboard,
  });
});

const keyboard = new Keyboard()
  .text("🎖 竞猜")
  .text("🗂 统计")
  .persistent()
  .resized();
// bot.start();

bot.catch((err) => {
  const ctx = err.ctx;
  console.error(`Error while handling update ${ctx.update.update_id}:`);
  const e = err.error;
  if (e instanceof GrammyError) {
    console.error("Error in request:", e.description);
  } else if (e instanceof HttpError) {
    console.error("Could not contact Telegram:", e);
  } else {
    console.error("Unknown error:", e);
  }
});
