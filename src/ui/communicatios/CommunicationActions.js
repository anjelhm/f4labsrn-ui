import React, { Component } from "react";
import { View } from "@shoutem/ui";
import { StyleSheet, Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Communications from "react-native-communications";
import PropTypes from "prop-types";

import IconButton from "../../components/IconButton";

export default class CommunicationActions extends Component {
  onOpenCall = () => {
    const { phoneNumber } = this.props;

    if (phoneNumber === null) {
      Alert.alert(
        "Información",
        "No se encontró el número del celular",
        [{ text: "Cerrar", onPress: () => console.log("Cerrar Pressed") }],
        { cancelable: false }
      );
    } else {
      Communications.phonecall(phoneNumber, true);
    }
  };

  onOpenSMS = () => {
    const { phoneNumber } = this.props;

    if (phoneNumber === null) {
      Alert.alert(
        "Información",
        "No se encontró el número del celular",
        [{ text: "Cerrar", onPress: () => console.log("Cerrar Pressed") }],
        { cancelable: false }
      );
    } else {
      Communications.text(phoneNumber);
    }
  };

  render() {
    return (
      <View styleName="horizontal space-around" style={styles.communication}>
        <IconButton onPress={() => this.onOpenCall()}>
          <Icon name="call" size={32} />
        </IconButton>
        <IconButton onPress={() => this.onOpenSMS()}>
          <Icon name="message" size={32} />
        </IconButton>
      </View>
    );
  }
}

CommunicationActions.defaultProps = {
  phoneNumber: null
};

CommunicationActions.Proptypes = {
  phoneNumber: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  communication: {
    marginTop: 20,
    marginBottom: 20
  }
});
