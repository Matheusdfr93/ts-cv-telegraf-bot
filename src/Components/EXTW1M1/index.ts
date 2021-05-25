import { TelegrafMenu } from "donato";
import createBEVService from "./Service";
import createMenuHelpers from "../../Utils/Menu";

class EXTW1M1 extends TelegrafMenu {
  service = createBEVService();

  menuHelpers = createMenuHelpers();

  firstHandler = async (ctx: any) => {
    try {
      const { language } = ctx.session;
      const { dialogMessage, dialogKeyboard } =
        this.service.handleMenu(language);
      ctx.session.dialogKeyboard = dialogKeyboard;

      await ctx.replyWithMarkdown(dialogMessage);

      return ctx.scene.leave();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      ctx.reply("Algo Deu Errado");
      return ctx.scene.leave();
    }
  };
}

export default new EXTW1M1("EXTW1M1").init();
