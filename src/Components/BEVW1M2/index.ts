import { TelegrafMenu } from "donato";
import createBEVService from "./Service";
import createMenuHelpers from "../../Utils/Menu";

class BEVW1M2 extends TelegrafMenu {
  service = createBEVService();

  menuHelpers = createMenuHelpers();

  firstHandler = async (ctx: any) => {
    try {
      const { language } = ctx.session;
      const { dialogMessage, keyboard, dialogKeyboard } =
        this.service.handleMenu(language);
      ctx.session.dialogKeyboard = dialogKeyboard;
      ctx.session.textKeyboard = keyboard;
      await ctx.reply(dialogMessage, this.keyboard.create(keyboard));

      return ctx.wizard.next();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      ctx.reply("Algo Deu Errado");
      return ctx.scene.leave();
    }
  };

  subscribeComposer = () => {
    this.composer.hears(this.menuHelpers.verifier, async (ctx: any) => {
      try {
        const { dialogKeyboard } = ctx.session;
        const selectedButton = dialogKeyboard.find(
          (el) => el.dsDialogKeyboard === ctx.session.selection
        );
        return ctx.scene.enter(selectedButton.cdNextMenuKeyboard);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
        await ctx.reply("Descurpa");
        return ctx.scene.leave();
      }
    });
  };
}

export default new BEVW1M2("BEVW1M2").init();
