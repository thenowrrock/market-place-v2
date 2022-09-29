import { Component } from 'react'
import Logo from './logo'
import Carro from './carro'


const styles ={
    navbar:{
        backgroundColor:'#9370DB',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100px',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '50px',
        boxshadow:'5px 5px 5px rbg(0,0,0,0.9)',

    }
}



class Navbar extends Component {
    render() {
        const {carro,esCarroVisible,Mostrar_Carro} = this.props
        return (
            <nav style = {styles.navbar}>
                <Logo/>
                <Carro 
                carro ={carro}
                esCarroVisible ={esCarroVisible}
                Mostrar_Carro ={Mostrar_Carro}
                />
            </nav>
        )
    }
}

export default Navbar
