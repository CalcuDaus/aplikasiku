import React from "react";

function Halo(props){
  return <h1>Halo, saya {props.nama}</h1>
}

class Kenalan extends React.Component{
  render(){
    return(
      <div>
        <Halo nama={this.props.nama}/>
        <h2>Saya dari {this.props.kota}</h2>
      </div>
    )
  }
}

function FirstComponent() {
  return (
    <div>
      <Kenalan nama="daffa" kota="medan"/>
      <Kenalan nama="daus" kota="denai"/>
    </div>
  );
}

export default FirstComponent;
