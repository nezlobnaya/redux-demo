import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <button on Click= {props.buyCake}>Buy Cake</button>
        </div>
    )
}
const mapStateToProps = state => {//
    return{
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProp = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}
export default connect (mapStateToProps, mapDispatchToProp)(CakeContainer)
