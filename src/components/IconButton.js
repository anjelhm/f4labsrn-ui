import React, { PureComponent } from "react";
import { TouchableOpacity } from "react-native";
import PropTypes from 'prop-types';

export default class IconButton extends PureComponent {
  render() {

    const { children, ...rest } = this.props;

    return (
      <TouchableOpacity
        style={{ borderRadius: 360, padding: 5 }}
        {...rest}
      >
        {
          children
        }
      </TouchableOpacity>
    );
  }
}

IconButton.Proptypes = {
  children: PropTypes.element.isRequired
};