import React, { useState } from "react";
import { pinPositionData , pinPositionData2} from "./Data";

const PinPosition = (initialState) => {
  const [pinPosition, setPinposition] = useState(initialState);
  const ChangePinPosition = (destination) => {
    for (let i = 0; i < pinPositionData.length; i++) {
      const building = pinPositionData[i];
      if (building[0] === destination) {
        const x = building[1];
        const y = building[2];
        setPinposition([x, y]);
      }
    }
  };
  return [pinPosition, ChangePinPosition];
};
export default PinPosition;


const PinPosition2 = (initialState) => {
  const [pinPosition, setPinposition] = useState(initialState);
  const ChangePinPosition = (destination) => {
    for (let i = 0; i < pinPositionData2.length; i++) {
      const building = pinPositionData2[i];
      if (building[0] === destination) {
        const x = building[1];
        const y = building[2];
        setPinposition([x, y]);
      }
    }
  };
  return [pinPosition, ChangePinPosition];
};

export {PinPosition2};
