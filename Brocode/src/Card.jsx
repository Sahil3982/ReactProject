import React from 'react'
import PropTypes from 'prop-types'
const Card = (props) => {
    return (
        <div className='card'>
            <p>
                {props.isStudent ? "Yes" : "No"}
            </p>

            <h2>
                {props.age}
            </h2>

            <p>
            {props.name}
            </p>
        </div>
    )
}

Card.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    isStudent : PropTypes.bool

}

Card.defaultProps ={
    name:"None",
    age : 2,
    isStudent : true
}

export default Card