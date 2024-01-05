import React from "react";

class Unmounting extends React.Component{
    constructor(props){
        super(props);
        this.state = {show: true}
    }

    hapusHalo  = ()=>{
        this.setState({show:false});
    }

    render() {
        let halo;
        if(this.state.show){
            halo = <Halo/>
        }

        return (
            <div>
                {halo}
                <button onClick={this.hapusHalo}>Hapus Halo</button>
            </div>
        )
    }
}

class Halo extends React.Component {
    componentWillUnmount(){
        window.alert("Component Halo Akan dihapus!")
    }
    render(){
        return <h1>Halo, gimana kabarnya bro?</h1>
    }
}


export default Unmounting;