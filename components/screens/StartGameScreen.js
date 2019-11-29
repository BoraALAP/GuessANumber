import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";
import styled from "styled-components";
import Card from "../element/Card";
import Colors from "../../constants/colors";
import Input from "../element/Input";
import NumberContainer from "../element/NumberContainer";
import BodyText from "../element/BodyText";
import TitleText from "../element/TitleText";
import MainButton from "../element/MainButton";
import SecondaryButton from "../element/SecondaryButton";

const StartGameScreen = props => {
  const [entered, setEntered] = useState("");
  const [userConfirmed, setUserConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = inputText => {
    setEntered(inputText.toString().replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEntered("");
    setUserConfirmed(false);
  };

  const startGameHandler = () => {
    const chosenNumber = parseInt(entered);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    } else {
      setUserConfirmed(true);
      setEntered("");
      setSelectedNumber(chosenNumber);
      Keyboard.dismiss();
    }
  };

  let confirmedOutput;
  if (userConfirmed) {
    confirmedOutput = (
      <Card style={style.summaryContainer}>
        <TitleText>You selected</TitleText>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={() => props.onStartGame(selectedNumber)}>
          Start Game
        </MainButton>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <TextS>Start a New Game!</TextS>
        <Card style={style.card}>
          <BodyText>Select a Number</BodyText>
          <Input
            placeholder="##"
            style={style.input}
            blurOnSubmit
            autoCapitilize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            value={entered}
            onChangeText={numberInputHandler}
          />
          <ButtonContainer>
            <ButtonS>
              <SecondaryButton
                onPress={resetInputHandler}
                disabled={entered === ""}
              >
                Reset
              </SecondaryButton>
            </ButtonS>
            <ButtonS>
              <MainButton onPress={startGameHandler}>Confirm</MainButton>
            </ButtonS>
          </ButtonContainer>
        </Card>
        {confirmedOutput}
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;

const style = StyleSheet.create({
  card: {
    width: "100%",
    maxWidth: 340
  },
  input: {
    width: 50
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center"
  }
});

const Container = styled.View`
  flex: 1;
  padding: 10%;
  align-items: center;
`;

const TextS = styled.Text`
  font-size: 20px;
  margin: 10px auto;
  font-family: "poppins_bold";
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 0px 16px;
  margin-top: 16px;
`;

const ButtonS = styled.View`
  width: 48%;
`;
