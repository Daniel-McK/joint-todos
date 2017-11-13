import Action from './action';

export default class ActionCreator {
  type: string;

  constructor(type: string) {
    this.type = type;
  }

  create(payload?: any): Action {
    return {
      type: this.type,
      payload
    };
  }
}