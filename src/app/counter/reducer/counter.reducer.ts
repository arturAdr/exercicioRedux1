import { createReducer, on, createSelector } from '@ngrx/store';
import { initialState } from './counter.state';

import { increment, decrement, reset } from './counter.actions';

const _counterReducer = createReducer(initialState, 
    on(increment, (state) => Object.assign({}, state, {counter: state.counter + 1})),
    on(decrement, (state) => Object.assign({}, state, {counter: state.counter - 1})),
    on(reset, (state) => Object.assign({}, state, {counter: 0}))
);

export function counterReducer(state, action) {
    return _counterReducer(state, action);
}

export const selectFeature = (state) => state.count;
 
export const selectCounter = createSelector(
  selectFeature,
  (state) => state.counter
);
