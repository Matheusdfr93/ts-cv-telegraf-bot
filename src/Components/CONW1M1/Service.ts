import * as data from "./dialog.json";
// import createMenuHelpers from "../../Utils/Menu";
// import createDialogService from "../Dialog/Service";
// import createAcepptedLanguages from "../../Utils/languages";

function createCONService() {
  // const menuHelpers = createMenuHelpers();
  // const acceptedLanguages = createAcepptedLanguages();
  // const dialogService = createDialogService();

  function handleMenu(language: any) {
    const { dsDialog, dialogKeyboard } = data;
    const a = dsDialog.map((el) => el[language]);
    return {
      dialogMessage: a,
      dialogKeyboard: dialogKeyboard[language],
    };
  }

  return { handleMenu };
}

export default createCONService;
