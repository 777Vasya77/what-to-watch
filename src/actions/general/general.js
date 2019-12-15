import ActionType from "~/actions/general/action-types";

export const setAppIsReady = (isReady) => ({
  type: ActionType.SET_APP_IS_READY,
  payload: isReady
});
