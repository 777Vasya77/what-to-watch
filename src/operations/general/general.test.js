import {operations} from "~/operations/oparations";

describe(`General operations tests`, () => {

  it(`Init operation should work correctly`, () => {
    const dispatch = jest.fn();
    const initOperation = operations.general.init();
    dispatch.mockResolvedValue(`test`);

    return initOperation(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
      });

  });
});
