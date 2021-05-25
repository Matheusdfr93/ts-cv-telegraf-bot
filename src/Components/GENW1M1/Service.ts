import * as data from "./dialog.json";

function createGENService() {
  function handleMenu(language: any) {
    const { cdNextMenu, dsDialog, dialogKeyboard } = data;
    const a = dsDialog.map((el: any) => el[language]);
    return {
      dialogMessage: a,
      dialogKeyboard: dialogKeyboard[language],
      cdNextMenu,
    };
  }

  return { handleMenu };
}

export default createGENService;
