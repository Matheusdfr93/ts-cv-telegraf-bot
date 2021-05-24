import { Context, Telegram } from "telegraf";
import { Update } from "telegraf/typings/telegram-types";

function createMockContext(
  update: Update = { update_id: 0 },
  contextExtra = {}
) {
  const tg = new Telegram("", {});
  tg.callApi = (method, data): Promise<void> => {
    return new Promise(() => console.log(`mocked tg callApi ${method}`, data));
  };

  const ctx = new Context(update, tg, {});
  const mockedContext = {
    ...ctx,
    scene: null,
    session: {},
    reply: null,
    debug: {
      currentScene: "",
      replies: [],
      replyMessages: () =>
        mockedContext.debug.replies.map(({ message }) => message),
    },
    contextExtra,
  };

  mockedContext.reply = (message, extra = undefined) => {
    mockedContext.debug.replies.push({ message, extra });
  };

  mockedContext.scene = {
    enter: (sceneName: string) => {
      mockedContext.debug.currentScene = sceneName;
    },
    leave: () => {
      mockedContext.debug.currentScene = "";
    },
  };

  return mockedContext;
}

export default createMockContext;
