import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import Colors from "../../constants/colors";

const NumberContainer = props => {
  return (
    <Container>
      <TextS>{props.children}</TextS>
    </Container>
  );
};

export default NumberContainer;

const Container = styled.View`
  border-width: 2px;
  border-color: ${Colors.pink};
  border-radius: 10px;
  padding: 16px;
  margin: 16px auto;
  align-items: center;
  justify-content: center;
`;

const TextS = styled.Text`
  color: ${Colors.pink};
  font-size: 22px;
  font-family: "poppins";
`;
