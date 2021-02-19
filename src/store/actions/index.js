import { All_TRUE, All_FALSE, OTHER_INPUT } from "../types/types";

export const other_input = (payload, booleon) => ({ type: OTHER_INPUT, name: payload, bool: booleon });
export const all_true = () => ({ type: All_TRUE });
export const all_false = () => ({ type: All_FALSE });

// export const filterWithoutTransfers = () => ({ type: FILTER_WITHOUT_TRANSFER });
// export const filterOneTransfers = () => ({ type: FILTER_ONE_TRANSFER });
// export const filterTwoTransfers = () => ({ type: FILTER_TWO_TRANSFER });
// export const filterThreeTransfers = () => ({ type: FILTER_THREE_TRANSFER });