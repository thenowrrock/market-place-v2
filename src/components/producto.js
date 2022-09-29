import { Component } from 'react'
import Button from './button'
const styles = {
    producto:{
        border: '1px solid #eee',
        boxshadow: '0 10px 10px rgb(0,0,0,0.5)',
        width: '70%',
        padding: '10px 15px',
        borderRadius: '5px',
    },

    img: {
        width: '100%',
    }
    
}   


class Producto extends Component {
    render() {
        const {producto,Agregar_al_Carrito} = this.props
        console.log(this.props)
        return (
            <div style={styles.producto}>
                <img style={styles.img} src ={producto.img} alt ={producto.name}/>
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
                <Button onClick={() => Agregar_al_Carrito(producto)}>
                    Agregar la Carrito
                </Button>
            </div>
        )
    }
}

export default Producto