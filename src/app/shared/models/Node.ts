export class Node {
  value: any;
  name: string | Date;
  extra: {
    [key: string]: any;
  };

  constructor(value: any, name: string | Date, extra: { [p: string]: any } = {}) {
    this.value = value;
    this.name = name;
    this.extra = extra;
  }
}
