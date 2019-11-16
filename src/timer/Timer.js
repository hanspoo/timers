import React from "react";
import { func, number, bool } from "prop-types";
import moment from "moment";
import { connect } from "react-redux";
import { Jumbotron, Button, Glyphicon } from "react-bootstrap";

class Timer extends React.Component {
  static propTypes = {
    iniciar: func,
    detener: func,
    aumentar: func,
    seconds: number,
    corriendo: bool
  };
  comenzar = () => {
    this.interval = setInterval(this.props.aumentar, 1000);
    this.props.iniciar();
  };
  detener = () => {
    clearInterval(this.interval);
    this.props.detener();
  };
  render() {
    const { seconds, nombre, corriendo } = this.props;
    const segundosFormat = moment("2019-01-01")
      .startOf("day")
      .seconds(seconds)
      .format("H:mm:ss");

    return (
      <Jumbotron>
        <h3>{nombre}</h3>
        <h1>{segundosFormat}</h1>
        <p>{corriendo ? "En ejecución" : "Detenido"}</p>
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

const s2p = state => ({ corriendo: state.corriendo, seconds: state.segundos });
const d2p = dispatch => ({
  aumentar: () => dispatch({ type: "AUMENTAR" }),
  detener: () => dispatch({ type: "DETENER" }),
  iniciar: () => dispatch({ type: "INICIAR" })
});

export default connect(
  s2p,
  d2p
)(Timer);
/*









*/
