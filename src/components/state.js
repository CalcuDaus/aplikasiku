import React from "react";

class Halo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      warna: "red",
      salam: "halo",
    };
  }
 
  render() {
    return (
      <div>
        <h2 style={{ color: this.state.warna }}>
          {this.state.salam}, saya {this.props.nama}
        </h2>

        <button onClick={this.ubahWarna}>Ubah Warna</button>
        <button onClick={this.ubahSalam}>Ubah Salam</button>
      </div>
    );
  }
  
  ubahWarna = () => {
    let warna = ["red", "green", "blue", "yellow"];
    this.setState({
      warna: warna[Math.round(Math.random() * 3)],
    });
  };
  ubahSalam = () => {  
    let salam = ["Pagi", "Siang", "Sore", "Malam"];
    this.setState({
      salam: salam[Math.round(Math.random() * 3)],
    });
  };
}

function FirstState() {
  return (
    <div>
        <Halo nama="daus"/>
    </div>
  );
}

export default FirstState;
