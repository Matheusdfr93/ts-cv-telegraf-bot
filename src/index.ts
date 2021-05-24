import { Telegraf, session } from "telegraf";
import { TelegrafContext } from "telegraf/typings/context";

import scenes from "./Scenes";
// import { exit } from '@Scenes/Middlewares/Generic';

class App {
  public bot: Telegraf<TelegrafContext>;

  constructor() {
    this.bot = new Telegraf(process.env.TELEGRAM_TOKEN);
  }

  handleBot = (configs?): Promise<void> => {
    this.bot.use(session());
    this.bot.use(scenes.subscribeStage().middleware());

    // this.bot.hears('Sair', exit);

    this.bot.start(async (ctx: any) => {
      ctx.session.history = [];
      ctx.scene.enter("BEVW1M1");
    });
    console.log("AQUI");
    this.bot.hears(
      /(oi|ol[aAáÁ]|boa tarde|boa noite|bom dia|opa|eae|iae|i ae|hi|hello)/gi,
      async (ctx: any) => {
        ctx.session.history = [];
        ctx.scene.enter("BEVW1M1");
      }
    );

    return this.bot.launch(configs);
  };

  init = async (configs?) => {
    try {
      await this.handleBot(configs);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };
}

export default App;
