import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import colors from "../../constants/colors";

const MainButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} disabled={props.disabled}>
      <Container>
        <TextS>{props.children}</TextS>
      </Container>
    </TouchableOpacity>
  );
};

export default MainButton;

const Container = styled.View`
  background-color: ${props => (props.disabled ? colors.gray : colors.primary)};
  padding: 12px 30px;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
`;

const TextS = styled.Text`
  color: ${colors.white};
  text-align: center;
  font-family: "poppins_semibold";
  font-size: 15px;
  align-items: center;
  justify-content: center;
`;
