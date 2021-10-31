import React from "react";
import { View, Text } from "react-native";
import { List, TouchableRipple } from "react-native-paper";
import Styles from "../styles/Styles";

type Props = {
  navigation: {
    navigate: Function;
  };
};

const Home = ({ navigation }: Props) => {
  const create = () => {
    navigation.navigate("CreateSlot");
  };

  const register = () => {
    navigation.navigate("RegisterSlot");
  };

  const clearSlot = () => {
    navigation.navigate("ClearSlot");
  };

  return (
    <View style={Styles.container}>
      <List.Section>
        <List.Subheader>Actions</List.Subheader>

        <TouchableRipple onPress={create} rippleColor="rgba(0, 0, 0, .32)">
          <List.Item title="Create Slots" />
        </TouchableRipple>

        <TouchableRipple onPress={register} rippleColor="rgba(0, 0, 0, .32)">
          <List.Item title="Register Slot" />
        </TouchableRipple>

        <TouchableRipple onPress={clearSlot} rippleColor="rgba(0, 0, 0, .32)">
          <List.Item title="Clear Slot" />
        </TouchableRipple>
      </List.Section>
    </View>
  );
};

export default Home;
