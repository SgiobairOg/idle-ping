import * as actions from "../actions";

import React from "react";
import useGlobalHook from "use-global-hook";

const initialState = {
  clicks: 0,
  rate: 1,
  autoRate: 0,
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;