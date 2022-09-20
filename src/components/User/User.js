import React from 'react'
import Card from '../UI/Card'

function User(props) {
  return (
    <Card>
      <p>{`user ${props.userName} is ${props.userAge} yeaers old`}</p>
    </Card>
  )
}

export default User