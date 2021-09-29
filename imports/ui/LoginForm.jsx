import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import React, { useState } from 'react';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [username_exists,usernameExists]=useState(false);
  const [no_same_passwords,noSamePasswords]=useState(false);
  const [sig_up,signUp]=useState(false);
  const [new_password, setNewPassword] = useState('');
  const [confirm_password, setConfirmPassword]=useState('');
  const createNewUser=(e)=>{
    e.preventDefault();
      console.log(username,new_password,confirm_password);
      var user=Meteor.users.find({"username": username}).fetch();
      console.log(user);
      if(user.length==0){
          usernameExists(false);

        if(new_password===confirm_password){
            Accounts.createUser({
                username: username,
                password: new_password,
              });
              noSamePasswords(false);
              signUp(false);
        }
        else{
            noSamePasswords(true);
            signUp(true);
        }
        signUp(true);
    }
    else{
usernameExists(true);
noSamePasswords(false);
    }
      }



  const submit = e => {
    e.preventDefault();

    Meteor.loginWithPassword(username, password);
    // console.log(Meteor.loginWithPassword(username, password),'Dilip');
  };

  return (
      <div className='main_cont'>
      {(sig_up)?
      (
        <div className="login-form">
        <label htmlFor="username">Username</label>
  
        <input
          type="text"
          placeholder="Username"
          name="username"
          required
          onChange={e => setUsername(e.target.value)}
        />
  
        <label htmlFor="password">Password</label>
  
        <input
          type="password"
          placeholder="Password"
          name="new_password"
          required
          onChange={e => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirm_password"
          required
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <button type="button" style={{'backGroundColor':'lightblue', 'color':'black'}} onClick={e=>createNewUser(e)}>Sign Up</button>
        {(username_exists)?<p style={{'color':'red'}}>*username already exists.</p>:''}
        {(no_same_passwords)?<p style={{'color':'red'}}>*passwords are not same.</p>:''}
        </div>
      ):(
        <form onSubmit={submit} className="login-form">
        <label htmlFor="username">Username</label>
  
        <input
          type="text"
          placeholder="Username"
          name="username"
          required
          onChange={e => setUsername(e.target.value)}
        />
  
        <label htmlFor="password">Password</label>
  
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
          onChange={e => setPassword(e.target.value)}
        />
        <div className='buttons'>
        <button type="submit" style={{'background-color':'lightblue', 'color':'black'}}>Log In</button>
        <button type="button" style={{'background-color':'lightblue', 'color':'black'}} onClick={()=>signUp(true)}>Sign up</button>
</div>
        </form>
      )}
      </div>
   
  );
};