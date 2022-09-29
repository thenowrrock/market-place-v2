import { Component } from 'react'
import BubbleAlert from './bubbleAlert'
import DetallesCarro from './detallesCarro'

const styles ={
        carro:{
            backgroundColor:'#EE82EE',
            color:'#000000',
            border: 'none',
            padding: '15px',
            borderRadius: '15px',
            cursor: 'pointer'

        },

        bubble: {
            position: 'relative',
            left: '12px',
            top: '20px',
        },
}


class Carro extends Component {
    render() {
        const {carro,esCarroVisible,Mostrar_Carro} = this.props
        const cantidad = carro.reduce((acc,el) => acc + el.cantidad,0)
        return (
            <div>
            <span style = {styles.bubble}>
            {cantidad !== 0 ? <BubbleAlert value = {cantidad}/> : null}     
            </span>
            <button onClick={Mostrar_Carro} style={styles.carro}>
            Carro
            </button>
            {esCarroVisible ? <DetallesCarro carro = {carro} /> : null}
            </div>
        )
    }
}

export default Carro