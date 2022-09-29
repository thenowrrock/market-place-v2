import {Component} from 'react'
import Productos from './components/productos'
import Layout from './components/layout'
import Title from './components/title'
import Navbar from './components/navbar'



class App extends Component {
  state ={
    productos: [
      {name: 'manilla_neopreno',price: '15000',img:'/productos/manilla_neopreno.png'},
      {name: 'manilla_escudo',price: '25000',img:'/productos/manilla_escudo.png'},
      {name: 'aretes_tejidos',price: '7000',img:'/productos/aretes_tejidos.png'},
      {name: 'manilla_cruz',price: '10000',img:'/productos/manilla_cruz.png'},
      {name: 'manilla_ojo_turco',price: '12000',img:'/productos/manilla_ojo_turco.png'},
    ],
    carro:[],
    esCarroVisible: false,
  }

  Agregar_al_Carrito = (producto) =>{
    const {carro} = this.state
    if(carro.find(x => x.name === producto.name)){
      const newCarro = carro.map(x => x.name === producto.name
      ?({
        ...x,
        cantidad: x.cantidad +1
      })
      : x)
      return this.setState({carro: newCarro})
    }
    return this.setState({
      carro: this.state.carro.concat({...producto,cantidad:1})
    })
  }

  Mostrar_Carro = () =>{
    if(!this.state.carro.length){
      return
    }
    this.setState({esCarroVisible : ! this.state.esCarroVisible})
  }

  render() {
    const {esCarroVisible} = this.state
    return (
      <div>
      <Navbar carro = {this.state.carro} 
      esCarroVisible = {esCarroVisible}
      Mostrar_Carro = {this.Mostrar_Carro}
      />  
      <Layout>
      <Title />  
      <Productos
        Agregar_al_Carrito = {this.Agregar_al_Carrito}
        productos = {this.state.productos}
      />
      </Layout>  
      </div>
    )
  }
}




export default App;
