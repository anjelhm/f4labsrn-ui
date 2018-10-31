import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { Row, Caption, View, Subtitle } from "@shoutem/ui";
import { FlatList, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import CurrentState from "./CurrentState";

export default class TripList extends PureComponent {
  state = {
    load: false
  };
  renderRow = item => {
    const currentState = item.currentState;

    return <CurrentState state={item.state} time={item.time} />;
  };
  render() {
    const { data, onRefresh } = this.props;

    return (
      <FlatList
        data={data}
        renderItem={({ item }) => this.renderRow(item)}
        keyExtractor={item => item.id}
        refreshing={this.state.load}
        onRefresh={() => onRefresh()}
      />
    );
  }
}

TripList.defaultProps = {
  data: [],
  onRefresh: () => {}
};

TripList.Proptypes = {
  data: PropTypes.array.isRequired,
  onRefresh: PropTypes.func
};

const styles = StyleSheet.create({
  row: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 1,
    height: 60,
    borderRadius: 10,
    opacity: 0.7,
    marginBottom: 2
  },
  icon: {
    marginRight: 32
  },
  subtitle: {
    color: "gray"
  }
});
