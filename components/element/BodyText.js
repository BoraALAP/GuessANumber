import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

const BodyText = props => {
  return <Container style={{ ...props.style }}>{props.children}</Container>;
};

export default BodyText;

const Container = styled.Text`
  font-family: "poppins";
  text-align: center;
  font-size: 14px;
`;
