import * as data from "./dialog.json";
// import createMenuHelpers from "../../Utils/Menu";
import createDialogService from "../Dialog/Service";
// import createAcepptedLanguages from "../../Utils/languages";

function createBEVService() {
  // const menuHelpers = createMenuHelpers();
  // const acceptedLanguages = createAcepptedLanguages();
  const dialogService = createDialogService();

  function handleMenu(language: any) {
    const { dsDialog, dialogKeyboard } = data;

    return {
      dialogMessage: dsDialog[language],
      dialogKeyboard: dialogKeyboard[language],
      keyboard: dialogService.textKeyboard(dialogKeyboard[language]),
    };
  }

  return { handleMenu };
}

export default createBEVService;
