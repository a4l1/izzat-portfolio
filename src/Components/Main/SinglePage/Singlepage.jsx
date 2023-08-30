import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./Singlepage.scss"

export const Singlepage = () => {
    const [postValue, setPostValue] = useState([])
    const [emailValue, setEmailValue] = useState([])
   

    function changeName(e){
        setPostValue(e.target.value)
    }
    function changeEmail(e){
        setEmailValue(e.target.value)
    }



    
    let bot = {
        TOKEN:"6497092820:AAFOa1YU6lEvMUmaMKuL6QJpaFL79HbMpL0",
        message: `Ismi: ${postValue}; Email: ${emailValue};`, 
      

    }

    function sendMessage(){
        fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message}`,
        {
            method: "GET"
        }
        )

        .then(
            (success) =>{
                console.log("send messge");
            },
            (error) =>{
                console.log("error");
            }
        )
    }
  return (
    <div className='buying'>
        <Link to='/' className='buy__button' ><button>chiqish</button> </Link>

        <form action="">
            <input type="text" placeholder='Ismingizni kiriting' onChange={(e) => changeName(e)}/>
            <input type="text   " placeholder='Emailingizni kiriting' onChange={(e) => changeEmail(e)} />
            <button onClick={sendMessage} className='form_button'>send</button>
        </form>
    </div>
  )
}
