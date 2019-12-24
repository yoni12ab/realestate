import { observable, action } from 'mobx';
import React from 'react';
import { observer } from 'mobx-react';

export class InputState {
  @observable
  value: string = '';

  @action
  onChange(newValue: string): void {
    this.value = newValue;
  }
}

export const Input: React.FC<{ state: InputState }> = observer(({ state }) => (
  <input value={state.value} onChange={e => state.onChange(e.target.value)} />
));
