import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Row, View, Subtitle, Caption } from "@shoutem/ui";
import Icon from "react-native-vector-icons/MaterialIcons";
import { StyleSheet } from "react-native";

export default class CurrentState extends PureComponent {
  render() {
    const { state, time } = this.props;
    return (
      <Row style={styles.row} styleName="fill-parent">
        <Icon name="local-taxi" size={35} color="#fdd835" style={styles.icon} />
        <View styleName="vertical stretch space-between">
          <Subtitle styleName="bold" style={styles.subtitle}>
            {state.toUpperCase()}
          </Subtitle>
          {/* <View styleName="horizontal space-between">
            <Caption styleName="bold">Hora</Caption>
            <Caption styleName="bold">{time}</Caption>
          </View> */}
        </View>
      </Row>
    );
  }
}

CurrentState.defaultProps = {
  state: "state",
  time: "time"
};

CurrentState.Proptypes = {
  state: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  row: {
    marginLeft: 17,
    marginRight: 17,
    marginTop: 2,
    height: 90,
    borderRadius: 10,
    marginBottom: 2
  },
  icon: {
    marginRight: 32
  },
  subtitle: {
    color: "#000000"
  }
});
