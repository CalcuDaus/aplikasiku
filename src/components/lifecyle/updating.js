import React from "react";

class Updating extends React.Component{
    constructor(props){
        super(props);
        this.state = {hobi:"membaca"}
    }
    
    shouldComponentUpdate(){
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        window.alert("Hobi sebelumnya " + prevState.hobi);
        return true;
    }
    componentDidUpdate(){
        setTimeout(() => {
            window.alert("Hobi sekarang " + this.state.hobi)
        }, 1000);
    }

    ubahHobi = ()=>{
        this.setState({hobi:"main game"})
    }
    render(){
        return(
            <div>
                <h1>Hobiku adlaha {this.state.hobi}</h1>
                <button onClick={this.ubahHobi}>Ubah Hobi</button>
            </div>
        )
    }
}

export default Updating;