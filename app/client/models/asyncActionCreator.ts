import Action from './action';

export default class AsyncActionCreator {
  requestType: string;
  successType: string;
  failureType: string;

  constructor(type: string) {
    this.requestType = `${type}_REQUEST`;
    this.successType = `${type}_SUCCESS`;
    this.failureType = `${type}_FAILURE`;
  }

  public request(payload?: any): Action {
    return this.create(this.requestType, payload);
  }

  public success(payload?: any): Action {
    return this.create(this.successType, payload);
  }

  public failure(payload?: any): Action {
    return this.create(this.failureType, payload);
  }

  private create(type: string, payload?: any): Action {
    return {
      type,
      payload
    };
  }
}