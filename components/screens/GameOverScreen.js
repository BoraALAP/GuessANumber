import React from "react";
import { View, Text, Button, Image } from "react-native";
import styled from "styled-components";
import Colors from "../../constants/colors";
import BodyText from "../element/BodyText";
import TitleText from "../element/TitleText";
import colors from "../../constants/colors";
import MainButton from "../element/MainButton";

const GameOverScreen = props => {
  return (
    <Container>
      <TitleText>The Game is Over!!</TitleText>
      <ImgContainer>
        <Img
          fadeDuration={1000}
          // source={require("../../assets/success.png")}
          source={{ uri: "https://source.unsplash.com/random" }}
          resizeMode="cover"
        />
      </ImgContainer>
      <BodyText>
        Your phone needed <TextS>{props.guessNumber}</TextS> rounds to guess the
        number was <TextS>{props.userNumber}</TextS>
      </BodyText>
      <MainButton onPress={props.onRestart}>New Game</MainButton>
    </Container>
  );
};

export default GameOverScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10%;
`;

const ImgContainer = styled.View`
  width: 200px;
  height: 200px;
  overflow: hidden;
  margin: 24px auto;
`;

const Img = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 100px;
`;

const TextS = styled.Text`
  color: ${colors.gold};
  font-family: "poppins_medium";
`;
