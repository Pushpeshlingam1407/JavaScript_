///TODO: Class and Constructor


class student {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }
  getCode() {
    return this.code;
  }
  setcode(code) {
    this.code = code;
  }
  getName() {
    return this.name;
  }
  setname(name) {
    this.name = name;
  }
}

code = 100;
name = "Pushpesh";
const ramesh = new student(code, name);
console.log(ramesh.getCode());
console.log(ramesh.getName());
ramesh.setcode(200);
ramesh.setname("Jon Snow");
console.log(ramesh.getCode());
console.log(ramesh.getName());
