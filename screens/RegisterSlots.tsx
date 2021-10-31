import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { connect } from "react-redux";
import Styles from "../styles/Styles";
import { register } from "../redux/actions/action";

type Props = {
  navigation: {
    navigate: Function;
  };
  register: Function;
  lots: any;
};

const RegisterSlots = ({ navigation, register, lots }: Props) => {
  const [reg, setReg] = useState("");

  const registerSlot = () => {
    register(reg, lots, navigation);
  };
  return (
    <View style={Styles.container}>
      <TextInput
        label="Enter Registraion number"
        mode="outlined"
        style={{ marginBottom: 20 }}
        value={reg}
        onChangeText={setReg}
        maxLength={10}
      />
      <Button
        mode="contained"
        onPress={registerSlot}
        style={Styles.btn}
        disabled={!reg}
      >
        Register
      </Button>
      <Text>{JSON.stringify(lots, null, 10)}</Text>
    </View>
  );
};

const mapStateToProps = (state: any) => ({ lots: state.reducer.parkingLots });

export default connect(mapStateToProps, { register })(RegisterSlots);
