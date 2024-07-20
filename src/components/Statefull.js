import React, { Component } from "react";

class StateFull extends Component {     //TIENE ESTADOS y CICLOS DE VIDA
  constructor(props) {
    super(props);
    this.state = {
        hello: "Holla Mundazo",
    }
  }

  render() {
    return <h1>{this.state.hello}</h1>;
  }
}

export default StateFull;
