import React from "react";
import moment from "moment";
import { Jumbotron, Button, Glyphicon } from "react-bootstrap";

export default class Timer extends React.Component {
  state = { segundos: 0, nombre: "Intervalo 1" };

  aumentar = () => {
    this.setState(state => ({
      segundos: state.segundos + 1
    }));
  };
  comenzar = () => {
    this.interval = setInterval(this.aumentar, 1000);
  };
  detener = () => {
    clearInterval(this.interval);
  };
  render() {
    const { segundos, nombre } = this.state;
    const segundosFormat = moment("2019-01-01")
      .startOf("day")
      .seconds(segundos)
      .format("H:mm:ss");

    return (
      <Jumbotron>
        <h3>{nombre}</h3>
        <h1>{segundosFormat}</h1>
        <p>
          <Button variant="primary">
            <Glyphicon glyph="refresh" />
          </Button>
          <Button variant="primary" onClick={this.detener}>
            <Glyphicon glyph="stop" />
          </Button>
          <Button variant="primary" onClick={this.comenzar}>
            <Glyphicon glyph="play" />
          </Button>
        </p>
      </Jumbotron>
    );
  }
}
