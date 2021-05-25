import { TelegrafMenu } from "donato";
import createBEVService from "./Service";
import createMenuHelpers from "../../Utils/Menu";

class ACAW1M1 extends TelegrafMenu {
  service = createBEVService();

  menuHelpers = createMenuHelpers();

  firstHandler = async (ctx: any) => {
    try {
      const { language } = ctx.session;
      const { dialogMessage, dialogKeyboard, cdNextMenu } =
        this.service.handleMenu(language);
      console.log(dialogMessage);
      ctx.session.dialogKeyboard = dialogKeyboard;
      // ctx.session.textKeyboard = keyboard;
      for (let i = 0; i < dialogMessage.length; i += 1) {
        // eslint-disable-next-line no-await-in-loop
        await ctx.replyWithMarkdown(dialogMessage[i]);
      }
      // await ctx.reply(dialogMessage, this.keyboard.create(keyboard));

      return ctx.scene.enter(cdNextMenu);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      ctx.reply("Algo Deu Errado");
      return ctx.scene.leave();
    }
  };
}

export default new ACAW1M1("ACAW1M1").init();
