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
  const [warning, setWarning] = useState("");

  const increment = () => {
    setCount(count + 1);
  };

  //   first argument is a callback
  //   second argument is an array of dependencies, if they change the callback will run again
  useEffect(() => {
    console.log("I'm inside the useEffect");
    document.title = `Capacity: ${capacity}`;
  }, [capacity]);

  //   return is purely jsx
  return (
    <>
      <CenteredBox direction="column">
        {warning && <Warning centered>{warning}</Warning>}
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
