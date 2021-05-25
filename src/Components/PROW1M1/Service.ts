import * as data from "./dialog.json";

function createBEVService() {
  function handleMenu(language: any) {
    const { dsDialog, dialogKeyboard, cdNextMenu } = data;
    const a = dsDialog.map((el) => el[language]);
    return {
      dialogMessage: a,
      dialogKeyboard: dialogKeyboard[language],
      cdNextMenu,
    };
  }

  return { handleMenu };
}

export default createBEVService;
