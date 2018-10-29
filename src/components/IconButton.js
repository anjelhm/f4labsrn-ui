import React, { PureComponent } from "react";
import { TouchableOpacity } from "react-native";
import PropTypes from 'prop-types';

export default class IconButton extends PureComponent {
  render() {

    const { children } = this.props;

    const { props } = this;

    return (
      <TouchableOpacity
        style={{ borderRadius: 360, padding: 5 }}
        {...props}
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