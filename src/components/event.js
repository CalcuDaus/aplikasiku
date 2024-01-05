import React from "react";

class Helo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: "Daus",
      _umur: null,
      _kota: null,
    };
    this.tampilKota = this.tampilKota.bind(this);
  }
  tampilUmur = (umur) => {
    this.setState({_umur :umur})
    window.alert(`Nama saya ${this.state.nama} berumur ${umur} tahun`);
  };
  tampilKota(kota) {
    this.setState({_kota :kota})
    window.alert(`Nama saya ${this.state.nama} berasal dari ${kota}`);
  }

  render() {
    let umur,kota;
    if(this.state._umur){
        umur = `Saya Berumur ${this.state._umur} Tahun`;
    }
    if(this.state._kota){
        kota = `Saya Tinggal di ${this.state._kota}`;
    }
    return (
      <div>
        <h1>{umur},{kota}</h1>
        <button onClick={() => this.tampilUmur(17)}>Tampil Umur</button>
        <button onClick={this.tampilKota.bind(this, "Medan")}>
          Tampil Kota
        </button>
      </div>
    );
  }
}

export default Helo;
