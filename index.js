import React, { Component } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

export default class InputText extends Component {
  render() {
    const { label, errorMessage, placeholder } = this.props;
    const { props } = this;

    return (
      <View style={styles.container}>
        <Text style={styles.titleInput}>{label}</Text>
        <TextInput
          placeholder={placeholder}
          underlineColorAndroid="#424242"
          {...props}
        />
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      </View>
    );
  }
}

InputText.defaultProps = {
  label: "Escribe un título",
  errorMessage: "",
  placeholder: "InputText"
};

InputText.Proptypes = {
  ...TextInput.propTypes,
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#FFFFFF"
  },
  titleInput: {
    fontSize: 12,
    color: "#424242",
    fontWeight: "bold",
    marginLeft: 4
  },
  errorMessage: {
    fontSize: 14,
    color: "#E53935",
    marginTop: -10,
    marginLeft: 5
  }
});
