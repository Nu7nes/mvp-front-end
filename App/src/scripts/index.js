import { ToggleMenu } from "./controller/ToggleMenuController.js";
import { ChooseTime } from "./controller/ChooseTimeButtonController.js";
import { SubmitSchedule } from "./controller/SubmitScheduleController.js";
import { DateInputScheduleControler } from "./controller/DateInputScheduleController.js";

const toggleMenu = new ToggleMenu();
const chooseTime = new ChooseTime();
const submitSchedule = new SubmitSchedule();
const dateInputScheduleControler = new DateInputScheduleControler();
dateInputScheduleControler.init();