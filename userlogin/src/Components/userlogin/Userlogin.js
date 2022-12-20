import './Userlogin.css'

import React, { Component } from 'react'

class Userlogin extends Component {

    buttonFunc = () => {
        alert("Registered");
    }
    mailFunc = () => {
        console.warn("Yalniz .ru domenlərinə icazə verilir.");
    }
    passwordFunc = () => {
        console.warn("Ən azi 8 simvol");
    }

  render() {

    return (
      <div className='main'>
        <form>
            <div className='inputArea'>
            <label>Emailinizi daxil edin!</label>
            <input className='email' type="email" onClick={this.mailFunc}></input>
            <label>Parolunuzu daxil edin!</label>
            <input className='password' type="password" onClick={this.passwordFunc}></input>
            <button type='button' onClick={this.buttonFunc}>Login</button>
            </div>
        </form>
      </div>
    )
  }
}

export default Userlogin