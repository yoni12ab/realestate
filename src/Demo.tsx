import { observable } from 'mobx';
import React from 'react';
import { observer } from 'mobx-react';
import { Input, InputState } from './Input';

export class DemoState {
  @observable
  input1 = new InputState();

  @observable
  input2 = new InputState();
}

export const Demo: React.FC<{ state: DemoState }> = observer(({ state }) => (
  <>
    <Input state={state.input1} />
    <Input state={state.input2} />
  </>
));
