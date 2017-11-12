export default class ActionCreator {
  type: string;

  constructor(type: string) {
    this.type = type;
  }

  create(payload?: any) {
    return {
      type: this.type,
      payload
    };
  }
}