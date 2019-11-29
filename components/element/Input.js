import React from "react";
import { View, Text, TextInput } from "react-native";
import styled from "styled-components";
import Colors from "../../constants/colors";

const Input = props => {
  return (
    <TextInputS
      {...props}
      style={{ ...props.style }}
      placeholder={props.placeholder}
      onChange={props.onChangeText}
      value={props.value}
    />
  );
};

export default Input;

const TextInputS = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.gold};
  padding: 16px;
  /* width: 100%; */
  text-align: center;
  font-family: "poppins";
`;
