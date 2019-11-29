import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

const TitleText = props => {
  return <Container style={{ ...props.style }}>{props.children}</Container>;
};

export default TitleText;

const Container = styled.Text`
  font-family: "poppins_bold";
  font-size: 18px;
  text-align: center;
`;
