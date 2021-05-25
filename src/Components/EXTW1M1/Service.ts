import * as data from "./dialog.json";

function createGENService() {
  function handleMenu(language: any) {
    const { cdNextMenu, dsDialog, dialogKeyboard } = data;
    return {
      dialogMessage: dsDialog[language],
      dialogKeyboard: dialogKeyboard[language],
      cdNextMenu,
    };
  }

  return { handleMenu };
}

export default createGENService;
