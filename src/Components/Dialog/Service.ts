import { dialogKeyboardType } from "./DTO";

function createDialogService() {
  const textKeyboard = (dialogKeyboard: dialogKeyboardType[]) =>
    dialogKeyboard.map((el) => el.dsDialogKeyboard);
  return { textKeyboard };
}

export default createDialogService;
