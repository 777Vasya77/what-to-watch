import general from "~/reducers/general/general";
import ActionType from "~/actions/general/action-types";

describe(`General reducer work correctly`, () => {
  it(`reducer should correctly set app is ready status`, () => {
    expect(general({
      isAppReady: false
    }, {
      type: ActionType.SET_APP_IS_READY,
      payload: true
    })).toEqual({
      isAppReady: true
    });
  });
});
