import React from 'react'

function User(props) {
  return (
    <div>
        <p>{`user ${props.userName} is ${props.userAge} yeaers old`}</p>
    </div>
  )
}

export default User