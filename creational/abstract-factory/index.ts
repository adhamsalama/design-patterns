import { GUIFactory, WindowsGUIFactory, LinuxGUIFactory } from "./factory";

function clientCode() {
  const windowsGUI: GUIFactory = new WindowsGUIFactory();
  const windowsButton = windowsGUI.createButton();
  windowsButton.click();
  const windowsCheckbox = windowsGUI.createCheckbox();
  windowsCheckbox.toggle();

  const linuxGUIFactory: GUIFactory = new LinuxGUIFactory();
  const linuxButton = linuxGUIFactory.createButton();
  linuxButton.click();
}

clientCode();
