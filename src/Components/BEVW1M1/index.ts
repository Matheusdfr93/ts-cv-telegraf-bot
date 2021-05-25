import { TelegrafMenu } from "donato";
import createBEVService from "./Service";
import createMenuHelpers from "../../Utils/Menu";

class BEVW1M1 extends TelegrafMenu {
  service = createBEVService();

  menuHelpers = createMenuHelpers();

  firstHandler = async (ctx: any) => {
    try {
      ctx.session.name = ctx.update.message.from.first_name;
      const { name } = ctx.session;
      const { dialogMessage, keyboard, dialogKeyboard } =
        this.service.handleMenu(name);
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
        ctx.session.language = selectedButton.dsDialogLabel;
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

export default new BEVW1M1("BEVW1M1").init();
