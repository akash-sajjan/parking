import React, { useMemo } from "react";
import { View, Text, FlatList } from "react-native";
import { Button, List, Paragraph, Title } from "react-native-paper";
import { connect } from "react-redux";
import { clearLot } from "../redux/actions/action";
import Styles from "../styles/Styles";

type Props = {
  lots: any;
  clearLot: Function;
};

const ClearSlots = ({ lots, clearLot }: Props) => {
  const slots = useMemo(() => {
    return Object.values(lots);
  }, [lots]);

  const calculateAmount = (date: Date) => {
    const hours: number = Math.ceil((+new Date() - +date) / 1000 / 60 / 60);
    if (hours <= 2) {
      return 10;
    }
    return (hours - 1) * 10;
  };

  const clearSlot = (id: string) => {
    clearLot(id, lots);
  };

  return (
    <View style={Styles.container}>
      <FlatList
        data={slots}
        keyExtractor={(item: any) => item.slotId}
        renderItem={({ item }: any) => {
          if (!item.vehicleRegNo) return null;
          return (
            <List.Section style={Styles.section}>
              <Title>ID: {item.slotId}</Title>
              <Paragraph>Reg. No: {item.vehicleRegNo}</Paragraph>
              <Paragraph>Price: {calculateAmount(item.createdAt)}</Paragraph>
              <Button onPress={() => clearSlot(item.slotId)}>
                Confirm Payment
              </Button>
            </List.Section>
          );
        }}
        ListEmptyComponent={
          <Title style={Styles.emptyText}>No booked slots</Title>
        }
      />
    </View>
  );
};

const mapStateToProps = (state: any) => ({ lots: state.reducer.parkingLots });

export default connect(mapStateToProps, { clearLot })(ClearSlots);
