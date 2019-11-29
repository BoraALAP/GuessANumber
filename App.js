import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import styled from "styled-components";

import Header from "./components/layout/Header";
import StartGameScreen from "./components/screens/StartGameScreen";
import GameScreen from "./components/screens/GameScreen";
import GameOverScreen from "./components/screens/GameOverScreen";

import * as Font from "expo-font";
import { AppLoading } from "expo";

const fetchFonts = () => {
  return Font.loadAsync({
    "poppins": require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins_medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "poppins_semibold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "poppins_bold": require("./assets/fonts/Poppins-Bold.ttf")
  });
};

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = numberOfRounds => {
    setGuessRounds(numberOfRounds);
  };

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        guessNumber={guessRounds}
        userNumber={userNumber}
        onRestart={configureNewGameHandler}
      />
    );
  }

  return (
    <AppContainer>
      <Header title="Guess a Number" />
      {content}
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.View`
  flex: 1;
  font-family: "poppins";
`;
