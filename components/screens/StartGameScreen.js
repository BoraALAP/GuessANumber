import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView
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
  const [buttonDimensions, setButtonDimensions] = useState(
    Dimensions.get("window").width / 4
  );

  useEffect(() => {
    const updateLayout = () => {
      setButtonDimensions(Dimensions.get("window").width / 4);
    };

    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

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
    <ScrollView>
      <KeyboardAvoidingView
        behavior="position"
        // keyboardVerticalOffset={32}
      >
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
                <ButtonS style={{ buttonDimensions }}>
                  <SecondaryButton
                    onPress={resetInputHandler}
                    disabled={entered === ""}
                  >
                    Reset
                  </SecondaryButton>
                </ButtonS>
                <ButtonS style={{ buttonDimensions }}>
                  <MainButton onPress={startGameHandler}>Confirm</MainButton>
                </ButtonS>
              </ButtonContainer>
            </Card>
            {confirmedOutput}
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
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
  padding: 24px;
  align-items: center;
  justify-content: center;
`;

const TextS = styled.Text`
  font-size: 20px;
  margin-bottom: 16px;
  text-align: center;
  font-family: "poppins_bold";
`;

const ButtonContainer = styled.View`
  flex-direction: ${Dimensions.get("window").height > 600
    ? "row"
    : "column-reverse"};
  width: 100%;
  justify-content: space-between;
  padding: 0px 16px;
  margin-top: 16px;
`;

const ButtonS = styled.View`
  /* width: ${Dimensions.get("window").height > 600 ? "48%" : "100%"}; */
  margin-bottom: ${Dimensions.get("window").height > 600 ? "0px" : "16px"};
`;
