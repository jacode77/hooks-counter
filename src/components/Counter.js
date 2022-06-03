import React, { useEffect, useState } from "react";
import {
  StyledButton,
  CenteredBox,
  Row,
  Heading,
  Warning,
} from "./styled-components";

export const Counter = (props) => {
  // array destructuring to set up count state
  const { capacity } = props;
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    document.title = `Capacity: ${capacity}`;
  });

  //   return is purely jsx
  return (
    <>
      <CenteredBox direction="column">
        <Warning centered>Warning</Warning>
        <Heading centered>{count}</Heading>
        <Row>
          <StyledButton onClick={() => setCount(count - 1)} variant="danger">
            Decrease
          </StyledButton>
          <StyledButton onClick={increment} variant="success">
            Increase
          </StyledButton>
        </Row>
      </CenteredBox>
    </>
  );
};
