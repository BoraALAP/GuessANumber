import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styled from "styled-components";
import colors from "../../constants/colors";

const SecondaryButton = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.75}
      disabled={props.disabled}
    >
      <Container>
        <TextS>{props.children}</TextS>
      </Container>
    </TouchableOpacity>
  );
};

export default SecondaryButton;

const Container = styled.View`
  background-color: ${props => (props.disabled ? colors.gray : colors.accent)};
  padding: 12px 30px;
  border-radius: 24px;
`;

const TextS = styled.Text`
  color: ${colors.white};
  text-align: center;
  font-family: "poppins_semibold";
  font-size: 15px;
  align-items: center;
`;
