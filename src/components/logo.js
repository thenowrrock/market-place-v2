import { Component } from 'react'

const styles ={
    olysof:[
        {name: 'logo', img:'/logo/logo.png'}
    ],

    logo: {
        fontWeight:'700',
        fontSize:'2rem',

    },
    img: {
        width:'70px',
        height:'70px',
        borderRadius:'100px',
        border:'3px solid #666',

    }
}

class Logo extends Component {
    render() {
        const {olysof} = this.props
        console.log(this.props)
        return (
            <div style={styles.logo}>
            <img style = {styles.img} src ={olysof} alt = {styles.name}/> 
                Shop
            </div>
        )
    }
}

export default Logo