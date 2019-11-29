import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
  FlatList
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../constants/colors";
import styled from "styled-components";
import NumberContainer from "../element/NumberContainer";
import Card from "../element/Card";
import TitleText from "../element/TitleText";
import MainButton from "../element/MainButton";
import SecondaryButton from "../element/SecondaryButton";
import BodyText from "../element/BodyText";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const renderListItem = (listLength, itemData) => (
  <ListItem>
    <BodyText>#{listLength - itemData.index}</BodyText>
    <BodyText>{itemData.item}</BodyText>
  </ListItem>
);

const GameScreen = props => {
  const initialGuess = generateRandomBetween(1, 99, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;
  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = direction => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "higher" && currentGuess > userChoice)
    ) {
      Alert.alert("Don't Lie!!", "You know that this is wrong...", [
        { text: "Sorry", style: "cancel" }
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigh.current = currentGuess - 1;
    } else {
      currentLow.current = currentGuess + 1;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    // setRounds(rounds => rounds + 1);
    setPastGuesses(curPastGuesses => [
      nextNumber.toString(),
      ...curPastGuesses
    ]);
  };

  return (
    <Container>
      <TitleText>Opponent's Guess</TitleText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={style.buttonContainer}>
        <ButtonS>
          <SecondaryButton onPress={() => nextGuessHandler("lower")}>
            <Ionicons name="md-remove" size={24} color="white" />
          </SecondaryButton>
        </ButtonS>
        <ButtonS>
          <MainButton onPress={() => nextGuessHandler("higher")}>
            <Ionicons name="md-add" size={24} color="white" />
          </MainButton>
        </ButtonS>
      </Card>
      <ListView>
        {/* <ScrollView contentContainerStyle={style.list}>
          {pastGuesses.map((guess, index) =>
            renderListItem(guess, pastGuesses.length - index, index)
          )}
        </ScrollView> */}
        <FlatList
          keyExtractor={item => item}
          data={pastGuesses}
          renderItem={renderListItem.bind(this, pastGuesses.length)}
          contentContainerStyle={style.list}
        />
      </ListView>
    </Container>
  );
};

export default GameScreen;

const style = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 24,
    width: 372,
    maxWidth: "90%"
  },
  list: {
    flexGrow: 1,
    justifyContent: "flex-end"
    // alignItems: "center"
  }
});

const Container = styled.View`
  flex: 1;
  padding: 16px;
  align-items: center;
`;

const ButtonS = styled.View`
  width: 45%;
`;

const ListView = styled.View`
  flex: 1;
  width: 60%;
  margin: 24px;
`;

const ListItem = styled.View`
  border-color: ${colors.gray};
  padding: 16px;
  margin: 8px auto;
  background-color: white;
  border-width: 1px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  border-radius: 16px;
`;
