import styled from "styled-components";
import { pickBackGroundColor, pickHoverColor } from "./button-helpers";

export const StyledButton = styled.button`
  display: inline-block;
  padding: 0.3em 1.2em;
  margin: 0 0.3em 0.3em 0;
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 2rem;
  color: #ffffff;
  background-color: ${pickBackGroundColor};
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: ${pickHoverColor};
  }
  @media (max-width: 375px) {
    font-size: 1.5em;
  }
`;

export const CenteredBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-content: center;
  justify-content: center;
  height: ${(props) => (props.height ? props.height : "80vh")};
  max-width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Heading = styled.h1`
  font-size: 10rem;
  ${(props) => (props.centered ? "align-self: center" : "")}
`;

export const Warning = styled.h1`
  font-size: 5rem;
  color: red;
  ${(props) => (props.centered ? "align-self: center" : "")}
`;
