import React from "react";
import { View, Text, Platform, StyleSheet } from "react-native";
import styled, { css } from "styled-components/native";

import Colors from "../../constants/colors";

const Header = props => {
  return (
    <Container
      style={Platform.select({
        ios: style.ios,
        android: style.android
      })}
    >
      <TextS>{props.title}</TextS>
    </Container>
  );
};

const style = StyleSheet.create({
  ios: {
    backgroundColor: Colors.white,
    borderBottomColor: Colors.accent,
    borderBottomWidth: 1
  },
  android: {
    backgroundColor: Colors.primary,
    borderBottomColor: "transparent",
    borderBottomWidth: 1
  }
});
const Container = styled.View`
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;
  padding-top: 36px;
  padding-bottom: 10px;
`;

const TextS = styled.Text`
  color: ${Platform.OS === "ios" ? Colors.primary : Colors.white};
  font-size: 18px;
  font-weight: 800;
  font-family: "poppins_bold";
`;

export default Header;
