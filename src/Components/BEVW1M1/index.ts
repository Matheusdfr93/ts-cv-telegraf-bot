import { TelegrafMenu } from "donato";

class BEVW1M1 extends TelegrafMenu {
  // service = createBEVService();

  // menuHelpers = createMenuHelpers();

  firstHandler = async (ctx: any) => {
    try {
      await ctx.reply("Boa tarde!!!");

      return ctx.wizard.next();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      ctx.reply("Algo Deu Errado");
      return ctx.scene.leave();
    }
  };
}

export default new BEVW1M1("BEVW1M1").init();
