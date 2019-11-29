import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";

import Colors from "../../constants/colors";

const Card = props => {
  return (
    <Container style={{ ...style.card, ...props.style }}>
      {props.children}
    </Container>
  );
};

export default Card;

const style = StyleSheet.create({
  card: {
    elevation: 5,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4
  }
});

const Container = styled.View`
  width: 100%;
  max-width: 300px;
  align-items: center;
  background-color: ${Colors.white};
  border-radius: 16px;
  padding: 16px;
`;
