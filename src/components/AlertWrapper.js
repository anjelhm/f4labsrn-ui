import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Tile, Subtitle } from "@shoutem/ui";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Theme } from "../../Theme";

export default class AlertWrapper extends PureComponent {
  render() {
    const { message, error, warning, success } = this.props;

    const bgColor = success
      ? Theme.successColor
      : error
        ? Theme.errorColor
        : warning
          ? Theme.warningColor
          : Theme.successColor;

    const nameIcon = success
      ? "check-circle"
      : error
        ? "error"
        : warning
          ? "warning"
          : "check-circle";

    return (
      <Tile
        styleName="md-gutter"
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: bgColor
        }}
      >
        <Icon name={nameIcon} color={Theme.secondary.color} size={25} />
        <Subtitle
          style={{
            color: Theme.secondary.color,
            fontFamily: Theme.fontFamiliy,
            marginLeft: 10
          }}
        >
          {message}
        </Subtitle>
      </Tile>
    );
  }
}

AlertWrapper.defaultProps = {
  message: "Requiere un mensaje",
  error: false,
  warning: false,
  success: false
};

AlertWrapper.Proptypes = {
  message: PropTypes.string.isRequired,
  error: PropTypes.bool,
  warning: PropTypes.bool,
  success: PropTypes.bool
};
