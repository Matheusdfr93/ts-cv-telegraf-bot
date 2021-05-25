import { telegrafStage } from "donato";

import BEVW1M1 from "../Components/BEVW1M1";
import BEVW1M2 from "../Components/BEVW1M2";
import GENW1M1 from "../Components/GENW1M1";
import CONW1M1 from "../Components/CONW1M1";
import ACAW1M1 from "../Components/ACAW1M1";
import PROW1M1 from "../Components/PROW1M1";
import EXTW1M1 from "../Components/EXTW1M1";

const scenes = telegrafStage;

scenes.subscribeScene(BEVW1M1);
scenes.subscribeScene(BEVW1M2);
scenes.subscribeScene(GENW1M1);
scenes.subscribeScene(CONW1M1);
scenes.subscribeScene(ACAW1M1);
scenes.subscribeScene(PROW1M1);
scenes.subscribeScene(EXTW1M1);

export default scenes;
