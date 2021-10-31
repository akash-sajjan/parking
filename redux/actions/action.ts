import { Alert, ToastAndroid } from "react-native";
import { Dispatch } from "redux";
import {
  CREATE_SLOTS,
  REGISTER_SLOT,
  UPDATE_SLOT,
} from "../../constants/consts";
import { ParkingLot, Slot } from "../../types/types";

const createSlots =
  (slots: string, navigation: any) => (dispatch: Dispatch) => {
    const count = Number(slots);
    if (count !== NaN) {
      const slotMap: ParkingLot = {};
      for (let i = 0; i < count; i++) {
        const slotId = Math.random().toString();
        const slotItem: Slot = {
          slotId,
          createdAt: new Date(),
          vehicleRegNo: "",
        };
        slotMap[slotId] = slotItem;
      }
      dispatch({ type: CREATE_SLOTS, payload: slotMap });
      navigation.pop();
      ToastAndroid.show(`${slots} Lot created`, ToastAndroid.SHORT);
    }
  };

const register =
  (reg: string, lots: any, navigation: any) => (dispatch: Dispatch) => {
    let idExists: boolean = false;
    const freeSlot = Object.keys(lots).find((lot) => {
      if (lots[lot].vehicleRegNo == reg) {
        idExists = true;
      }
      return !lots[lot].vehicleRegNo;
    });
    if (idExists) {
      Alert.alert("Vehicle is already registered");
      return;
    }
    if (!freeSlot) {
      //   Alert.alert("No slots are free right now");
      ToastAndroid.show(`no Lots are free right now`, ToastAndroid.SHORT);
      return;
    }
    const newSlot: Slot = {
      slotId: freeSlot,
      vehicleRegNo: reg,
      createdAt: new Date(),
    };
    dispatch({ type: REGISTER_SLOT, payload: newSlot });
    navigation.pop();
    ToastAndroid.show(`${reg} is Registered`, ToastAndroid.SHORT);
  };

const clearLot = (id: string, lots: any) => (dispatch: Dispatch) => {
  const { [id]: omit, ...rest } = lots;
  dispatch({ type: UPDATE_SLOT, payload: rest });
};

export { createSlots, register, clearLot };
