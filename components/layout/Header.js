import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";

import Colors from "../../constants/colors";

const Header = props => {
  return (
    <Container>
      <TextS>{props.title}</TextS>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  height: 100px;
  background-color: ${Colors.primary};
  align-items: center;
  justify-content: center;
  padding-top: 36px;
  padding-bottom: 10px;
`;

const TextS = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 800;
  font-family: "poppins_bold";
`;

export default Header;
