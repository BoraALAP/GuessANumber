import React from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import styled from "styled-components";
import colors from "../../constants/colors";

const MainButton = props => {
  return (
    <ViewButton>
      <TouchableOpacity onPress={props.onPress} disabled={props.disabled}>
        <Container>
          <TextS>{props.children}</TextS>
        </Container>
      </TouchableOpacity>
    </ViewButton>
  );
};

export default MainButton;

const ViewButton = styled.View`
  border-radius: 24px;
  overflow: hidden;
`;

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
