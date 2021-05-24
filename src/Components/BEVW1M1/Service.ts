import * as data from "./dialog.json";
import createMenuHelpers from "../../Utils/Menu";
import createDialogService from "../Dialog/Service";

function createBEVService() {
  const menuHelpers = createMenuHelpers();
  const dialogService = createDialogService();
  function handleMenu(name: any) {
    const { dsDialog, dialogKeyboard } = data;
    const dialogMessage = menuHelpers.replacer(dsDialog, [
      {
        "#{name}": name,
      },
    ]);
    return {
      dialogMessage,
      dialogKeyboard,
      keyboard: dialogService.textKeyboard(dialogKeyboard),
    };
  }

  return { handleMenu };
}

export default createBEVService;
