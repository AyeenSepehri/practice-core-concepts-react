import React , { useState } from "react";
import NewUser from "./components/NewUser";
import User from "./components/User";

function App() {

  const [userInfo , setUserInfo] = useState([])

  const UserDataStore = (datas) => {
    setUserInfo((prevState) => { return [...prevState , datas]} )
  }

  return (
    <div className="App">
      <NewUser saveUserData={UserDataStore}/>
      {/* <User UserName = {obj.name} UserAge = {obj.age}/> */}
      {userInfo.map((data) => { return <User key={data.id} userName={data.name} userAge={data.age} />})}
    </div>
  );
}

export default App;
