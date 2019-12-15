import {actions} from '~/actions/actions';
import ActionType from '~/actions/general/action-types';

describe(`General action creator work correctly`, () => {
  it(`Action creator setAppIsReady return correctly action`, () => {
    expect(actions.general.setAppIsReady(true)).toEqual({
      type: ActionType.SET_APP_IS_READY,
      payload: true
    });
  });
});
