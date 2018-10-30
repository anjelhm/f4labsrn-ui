import React, { PureComponent } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import PropTypes from "prop-types";

import { Theme } from "../../Theme";

export default class Button extends PureComponent {
  render() {
    const {
      secondary,
      bgColor,
      labelColor,
      leftIcon,
      rightIcon,
      width,
      height,
      rounded,
      labelText,
      disabled,
      ...rest
    } = this.props;

    const themeColor = secondary
      ? Theme.secondary.backgroundColor
      : Theme.primary.backgroundColor;
    const bColor = bgColor === null ? themeColor : bgColor;

    const enabledButton = disabled
      ? Theme.disabledButton.backgroundColor
      : bColor;

    const themefontColor = secondary
      ? Theme.secondary.color
      : Theme.primary.color;
    const fColor = labelColor === null ? themefontColor : labelColor;

    const enabledLabel = disabled ? Theme.disabledButton.color : fColor;

    const radius = rounded ? 100 : 3;

    return (
      <TouchableOpacity
        style={{
          width: !width ? "80%" : width,
          height: !height ? 54 : height,
          backgroundColor: enabledButton,
          borderRadius: radius,
          borderColor: "#424242",
          borderWidth: 0.2,
          elevation: 1,
          justifyContent: "center"
        }}
        {...rest}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {leftIcon ? <View>{leftIcon}</View> : null}
          <View style={{ marginLeft: 20, marginRight: 20 }}>
            <Text
              style={{
                fontFamily: Theme.fontFamiliy,
                fontSize: Theme.buttonFontSize,
                color: enabledLabel
              }}
            >
              {labelText}
            </Text>
          </View>
          {rightIcon ? <View>{rightIcon}</View> : null}
        </View>
      </TouchableOpacity>
    );
  }
}

Button.defaultProps = {
  bgColor: null,
  labelColor: null,
  secondary: false,
  rounded: false,
  width: null,
  height: null,
  leftIcon: null,
  rightIcon: null,
  labelText: "Esto es un botón"
};

Button.Proptypes = {
  bgColor: PropTypes.string,
  labelColor: PropTypes.string,
  secondary: PropTypes.bool,
  rounded: PropTypes.bool,
  width: PropTypes.number || PropTypes.string,
  height: PropTypes.number || PropTypes.string,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  labelText: PropTypes.string
};
