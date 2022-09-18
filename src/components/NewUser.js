import React , {useState} from 'react'

function NewUser(props) {
    const [userName , setUserName] = useState("")
    const [userAge , setUserAge] = useState("")

    const NameChangeHandler = (event) => {
        let saveName = event.target.value
        setUserName(saveName)
    }
    const AgeChangeHandler = (event) => {
        setUserAge(event.target.value)
    }

    const formSubmitHandler = (event) => {
        event.preventDefault()
        const userData = {
            id : Math.random().toString() ,
            name : userName,
            age : userAge,
        } 
        setUserAge("")
        setUserName("")
        props.saveUserData(userData)
    }


  return (
    <form onSubmit={formSubmitHandler}>
        <div>
            <label>Name of user:</label>
            <input type="text" value={userName} onChange={NameChangeHandler} />
        </div>
        <div>
            <label>Age of User:</label>
            <input type="number" value={userAge} onChange={AgeChangeHandler} />
        </div>
        <div>
            <button type='submit'>submit</button>
        </div>
    </form>
  )
}

export default NewUser