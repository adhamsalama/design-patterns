export interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

export interface Button {
  height: number;
  width: number;
  color: string;
  click(): void;
}

export interface Checkbox {
  height: number;
  width: number;
  color: string;
  status: boolean;
  toggle(): void;
}

export class WindowsGUIFactory implements GUIFactory {
  createButton(): Button {
    return new WindowsButton();
  }
  createCheckbox(): Checkbox {
    return new WindowsCheckbox();
  }
}

export class WindowsButton implements Button {
  height = 4;
  width = 4;
  color = "blue";
  click(): void {
    console.log(`I clicked on a ${this.color} windows button!`);
  }
}

export class WindowsCheckbox implements Checkbox {
  height = 4;
  width = 4;
  color = "blue";
  status = false;
  toggle(): void {
    this.status = !this.status;
    console.log(`Windows checkbox is ${this.status ? "checked" : "unchecked"}`);
  }
}

export class LinuxGUIFactory implements GUIFactory {
  createButton(): Button {
    return new LinuxButton();
  }
  createCheckbox(): Checkbox {
    return new LinuxCheckbox();
  }
}

export class LinuxButton implements Button {
  height = 6;
  width = 6;
  color = "brown";
  click(): void {
    console.log(`I clicked on a ${this.color} linux button!`);
  }
}

export class LinuxCheckbox implements Checkbox {
  height = 6;
  width = 6;
  color = "brown";
  status = false;
  toggle(): void {
    this.status = !this.status;
    console.log(`Linux checkbox is ${this.status ? "checked" : "unchecked"}`);
  }
}
