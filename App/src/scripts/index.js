import { ToggleMenu } from "./controller/ToggleMenuController.js";
import { ChooseTimeButtonController } from "./controller/ChooseTimeButtonController.js";
// import { SubmitSchedule } from "./controller/SubmitScheduleController.js";
import { DateInputScheduleControler } from "./controller/DateInputScheduleController.js";
import { FormatNumberPhoneController } from "./controller/FormatNumberPhoneController.js";
import { ConcludeScheduleButtonController } from "./controller/ConcludeScheduleButtonController.js";

const toggleMenu = new ToggleMenu();
const formatNumberPhone = new FormatNumberPhoneController();
const chooseTimeButtonController = new ChooseTimeButtonController();
const dateInputScheduleControler = new DateInputScheduleControler();
dateInputScheduleControler.init();
const concludeScheduleButtonController = new ConcludeScheduleButtonController();
// const submitSchedule = new SubmitSchedule();
