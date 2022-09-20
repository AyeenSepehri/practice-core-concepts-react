import React from 'react'
import Button from './Button'
import Card from './Card'
import classes from "./ErrorModal.module.css"

function ErrorModal(props) {
  return (
    <div>
        <div className={classes.backdrop} onClick={props.action} />
        <Card className={classes.modal} >
            <header>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content} >
                <p>{props.message}</p>
            </div>
            <footer className={classes.action} >
                <Button onClick={props.action} >Okay!</Button>
            </footer>
        </Card>
    </div>
  )
}

export default ErrorModal