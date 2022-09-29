import { Component } from 'react'

const styles ={
    button: {
        background_color: '#0A283E}',
        padding: '15px 20px',
        border: '1px solid',
        borderRadius: '5px',
        cursor: 'pointer'
    }
}
class Button extends Component {
    render(){
        return (
            <button style = {styles.button}{...this.props} />
        )
    }

}

export default Button