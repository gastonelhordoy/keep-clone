import { Action } from '@ngrx/store';
import { type } from '../util';
import {card} from '../models/card';

export const ActionTypes = {
  LOAD: type('[Data] Load Cards'),
  LOAD_SUCCESS: type('[Data] Load Cards Success'),
  ADD: type('[Data] Add Card'),
  REMOVE: type('[Data] Remove Card'),
  REMOVE_SUCCESS: type('[Data] Server Remove Success Card'),
  TOGGLE_PINNED: type('[Data] Toggle Pinned Card'),
  UPDATE: type('[Data] Update Card'),
  UPDATE_SUCCESS: type('[Data] Server Update Success'),
  SERVER_ADD_SUCCESS: type('[Data] Server Add Card Successful'),
  SERVER_FAIL: type('[Data] Server Failure'),
  REFRESH_TOKEN: type('[Data] Refresh Token'),
  REFRESH_TOKEN_SUCCESS: type('[Data] Refresh Token Success'),
  REFRESH_TOKEN_FAIL: type('[Data] Refresh Token Fail'),
};

export class LoadAction implements Action {
  readonly type = ActionTypes.LOAD;

  constructor(public payload: any) { }
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: any) { }
}

export class AddAction implements Action {
  readonly type = ActionTypes.ADD;

  constructor(public payload: string) { }
}

export class RemoveAction implements Action {
  readonly type = ActionTypes.REMOVE;

  constructor(public payload: card) { }
}

export class RemoveSuccessAction implements Action {
  readonly type = ActionTypes.REMOVE_SUCCESS;

  constructor(public payload: card) { }
}

export class TogglePinnedAction implements Action {
  readonly type = ActionTypes.TOGGLE_PINNED;

  constructor(public payload: card) { }
}

export class UpdateAction implements Action {
  readonly type = ActionTypes.UPDATE;

  constructor(public payload: any) { }
}

export class UpdateSuccessAction implements Action {
  readonly type = ActionTypes.UPDATE_SUCCESS;

  constructor(public payload: any) { }
}

export class ServerAddSuccessAction implements Action {
  readonly type = ActionTypes.SERVER_ADD_SUCCESS;

  constructor(public payload: any) { }
}

export class ServerFailAction implements Action {
  readonly type = ActionTypes.SERVER_FAIL;

  constructor(public payload: any) { }
}

export class RefreshTokenAction implements Action {
  readonly type = ActionTypes.REFRESH_TOKEN;

  constructor(public payload: any) { }
}
export class RefreshTokenSuccessAction implements Action {
  readonly type = ActionTypes.REFRESH_TOKEN_SUCCESS;

  constructor(public payload: any) { }
}
export class RefreshTokenFailAction implements Action {
  readonly type = ActionTypes.REFRESH_TOKEN_FAIL;

  constructor(public payload: any) { }
}

export type Actions
  = LoadAction
  | LoadSuccessAction
  | AddAction
  | RemoveAction
  | RemoveSuccessAction
  | TogglePinnedAction
  | UpdateAction
  | UpdateSuccessAction
  | ServerAddSuccessAction
  | ServerFailAction
  | RefreshTokenAction
  | RefreshTokenSuccessAction
  | RefreshTokenFailAction;
