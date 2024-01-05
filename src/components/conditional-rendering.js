import React from "react";

class Anak extends React.Component{
    render(){
        let keterangan;
        if(this.props.umur >= 17) keterangan = "sudah dewasa";
        else keterangan = "belum dewasa";
        let kata = this.props.umur >= 17 ? "sudah" : "masih";

        return (
            <h3>{this.props.nama} {keterangan}, karena {kata} berumur {this.props.umur}.

            {this.props.umur >= 17 &&
            <span>Sudah Boleh Menggunakan Sepeda Motor</span>
            }
            </h3>
        )
    }
}

export default Anak;