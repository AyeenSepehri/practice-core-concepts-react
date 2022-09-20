import React , {useState} from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'
import classes from "./NewUser.module.css"

function NewUser(props) {
    const [userName , setUserName] = useState("")
    const [userAge , setUserAge] = useState("")
    const [error , setError] = useState()

    const NameChangeHandler = (event) => {
        let saveName = event.target.value
        setUserName(saveName)
    }
    const AgeChangeHandler = (event) => {
        setUserAge(event.target.value)
    }

    const formSubmitHandler = (event) => {

        event.preventDefault()

        if(userName.trim().length === 0 || userAge.trim().length === 0){
            setError({
                title: "Invalid input" , 
                message: "Please enter a valid name and age (non-empty value)" 
            })
            return;
        }

        if(+userAge < 1){
            setError({
                title: "invalid input" ,
                message: "please enter a valid age ( > 0 )"
            })
            return;
        }

        const userData = {
            id : Math.random().toString() ,
            name : userName, 
            age : userAge,
        } 
        setUserAge("")
        setUserName("")
        props.saveUserData(userData)
       // console.log(userData)
    }

    const errorHandler = () => {
        setError(null)
    }


  return (
    <div>
        {error && <ErrorModal title={error.title} message={error.message} action={errorHandler} />}
        <Card className={classes.input}>
            <form onSubmit={formSubmitHandler}>
                <div>
                    <label htmlFor='name'>Name of user: </label>
                    <input id='name' type="text" value={userName} onChange={NameChangeHandler} />
                </div>
                <div>
                    <label htmlFor='age'>Age of User: </label>
                    <input id='age' type="number" value={userAge} onChange={AgeChangeHandler} />
                </div>
                <div>
                    <Button type='submit' >Add User</Button>
                </div>
            </form>
        </Card>
    </div>
  )
}

export default NewUser