import { Component } from 'react'
import Producto from './producto'

const styles ={
    productos:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}
class Productos extends Component {
    render() {
        const {productos,Agregar_al_Carrito} = this.props

        return (
            <div style = {styles.productos}>
                {productos.map(productos => 
                    <Producto 
                    Agregar_al_Carrito = {Agregar_al_Carrito}
                    key = {productos.name}
                    producto = {productos}
                />)}
            </div>
        )
    }
}

export default Productos