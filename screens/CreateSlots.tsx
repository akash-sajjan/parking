import React, { useMemo, useState } from "react";
import { View, Text } from "react-native";
import { Button, Paragraph, TextInput } from "react-native-paper";
import { connect } from "react-redux";
import { createSlots } from "../redux/actions/action";
import Styles from "../styles/Styles";

type Props = {
  navigation: {
    navigate: Function;
  };
  createSlots: Function;
  lots: any;
};

const CreateSlots = ({ navigation, createSlots, lots }: Props) => {
  const [slots, setSlots] = useState("");

  const slotCount = useMemo(() => {
    return Object.keys(lots).length;
  }, [lots]);

  const createSlot = () => {
    createSlots(slots, navigation);
  };
  return (
    <View testID="create-wrapper" style={Styles.container}>
      <Paragraph>
        {slotCount ? slotCount : "No"} slots are created so far
      </Paragraph>
      <TextInput
        label="Enter number of slots to be created"
        mode="outlined"
        style={{ marginBottom: 20 }}
        keyboardType="number-pad"
        onChangeText={setSlots}
      />
      <Button
        mode="contained"
        onPress={createSlot}
        disabled={!slots}
        style={Styles.btn}
      >
        create slots
      </Button>
      <Text>{JSON.stringify(lots, null, 10)}</Text>
    </View>
  );
};

const mapStateToProps = (state: any) => ({ lots: state.reducer.parkingLots });

export default connect(mapStateToProps, { createSlots })(CreateSlots);
