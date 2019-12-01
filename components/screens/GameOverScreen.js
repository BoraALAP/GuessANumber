import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet
} from "react-native";
import styled from "styled-components";
import Colors from "../../constants/colors";
import BodyText from "../element/BodyText";
import TitleText from "../element/TitleText";
import colors from "../../constants/colors";
import MainButton from "../element/MainButton";

const GameOverScreen = props => {
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(
    Dimensions.get("window").width
  );
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get("window").height
  );

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceHeight(Dimensions.get("window").height);
      setAvailableDeviceWidth(Dimensions.get("window").width);
    };

    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  let imageSize = availableDeviceWidth / 2;
  if (availableDeviceHeight < 350) {
    imageSize = availableDeviceHeight / 4;
  }
  return (
    <ScrollView>
      <Container>
        <TitleText>The Game is Over!!</TitleText>
        <View
          style={{
            ...style.ImgContainer,
            width: imageSize,
            height: imageSize,
            marginVertical: availableDeviceHeight / 20
          }}
        >
          <Image
            style={{ ...style.Img, borderRadius: imageSize / 2 }}
            fadeDuration={1000}
            // source={require("../../assets/success.png")}
            source={{ uri: "https://source.unsplash.com/random" }}
            resizeMode="cover"
          />
        </View>
        <BodyText>
          Your phone needed <TextS>{props.guessNumber}</TextS> rounds to guess
          the number was <TextS>{props.userNumber}</TextS>
        </BodyText>
        <ButtonS>
          <MainButton onPress={props.onRestart}>New Game</MainButton>
        </ButtonS>
      </Container>
    </ScrollView>
  );
};

export default GameOverScreen;

const style = StyleSheet.create({
  ImgContainer: {
    overflow: "hidden"
  },

  Img: {
    width: "100%",
    height: "100%"
  }
});

const Container = styled.View`
  flex: 1;
  padding: 32px;
  align-items: center;
  justify-content: center;
`;

const TextS = styled.Text`
  color: ${colors.gold};
  font-family: "poppins_medium";
`;

const ButtonS = styled.View`
  width: ${Dimensions.get("window").width / 3};
  min-width: 240px;
`;
