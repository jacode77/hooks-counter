import React from "react";
import { CenteredBox } from "./styled-components";

export const CapacitySetter = (props) => {
  const { onInputChange, capacity } = props;

  return (
    <CenteredBox height="10vh" direction="column" display="block">
      <label
        htmlFor="capacity"
        style={{ fontSize: "2em", marginBottom: "0.25em" }}
      >
        Set Capacity
      </label>
      <input
        name="capacity"
        id="capacity"
        type="number"
        onChange={onInputChange}
        value={capacity}
        style={{ fontSize: "2em" }}
      />
    </CenteredBox>
  );
};
