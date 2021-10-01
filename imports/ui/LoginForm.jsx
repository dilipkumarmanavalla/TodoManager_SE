import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import React, { useState } from 'react';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [username_exists,usernameExists]=useState(false);
  const [no_same_passwords,noSamePasswords]=useState(false);
  const [no_username_exists,noUsernameExists]=useState(false);
  const [wrong_password,wrongPassword]=useState(false);
  const [sig_up,signUp]=useState(false);
  const [new_password, setNewPassword] = useState('');
  const [confirm_password, setConfirmPassword]=useState('');
  const [password_too_small, passwordTooSmall]=useState(false);
  const createNewUser=(e)=>{
    e.preventDefault();
      var user=Meteor.users.find({"username": username}).fetch();
      if(user.length==0){
          usernameExists(false);

        if(new_password===confirm_password){
          if(new_password.length>=5){
            Accounts.createUser({
              username: username,
              password: new_password,
            });
            noSamePasswords(false);
            signUp(false);
            passwordTooSmall(false);
          }
          else{
passwordTooSmall(true);
          }
           
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
    var user=Meteor.users.find({"username": username}).fetch();
    if(user.length==1){
      noUsernameExists(false);
      Meteor.loginWithPassword(username, password,function (err) {
        if (!err) {
          wrongPassword(false);
        } else {
            wrongPassword(true);
        }
      });
    }
    else{
      noUsernameExists(true);
      wrongPassword(false);
    }
  };

  return (
      <div className='main_cont'>
      {(sig_up)?
      (
        <div className="login-form">
        <label htmlFor="username" style={{'color':'white','fontSize':'150%'}}>Username</label>
  
        <input
          type="text"
          placeholder="Username"
          className='input'
          name="username"
          required
          onChange={e => setUsername(e.target.value)}
        />
  
        <label htmlFor="password" style={{'color':'white','fontSize':'150%'}} >Password</label>
  
        <input
          type="password"
          placeholder="Password"
          className='input'
          name="new_password"
          required
          onChange={e => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className='input'
          name="confirm_password"
          required
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <div className='buttons'>
        <button type="button" style={{'backgroundColor':'lightblue', 'color':'black'}} onClick={e=>createNewUser(e)}>Sign Up</button>
        <button type="button" style={{'backgroundColor':'lightblue', 'color':'black'}} onClick={()=>signUp(false)}> Go Back</button>
        </div>
        {(username_exists)?<p style={{'color':'red'}}>*username already exists.</p>:''}
        {(no_same_passwords)?<p style={{'color':'red'}}>*passwords are not same.</p>:''}
        {(password_too_small)?<p style={{'color':'red'}}>*password should be more than 5 letters.</p>:''}
        </div>
      ):(
        <form onSubmit={submit} className="login-form">
        <label htmlFor="username" style={{'color':'white','fontSize':'150%'}}>Username</label>
  
        <input
          type="text"
          placeholder="Username"
          className='input'
          name="username"
          required
          onChange={e => setUsername(e.target.value)}
        />
  
        <label htmlFor="password" style={{'color':'white','fontSize':'150%'}}>Password</label>
  
        <input
          type="password"
          placeholder="Password"
          className='input'
          name="password"
          required
          onChange={e => setPassword(e.target.value)}
        />
        <div className='buttons'>
        <button type="submit" style={{'backgroundColor':'lightblue', 'color':'black'}}>Log In</button>
        <button type="button" style={{'backgroundColor':'lightblue', 'color':'black'}} onClick={()=>signUp(true)}>Sign up</button>
</div>
{(no_username_exists)?<p style={{'color':'red'}}>*username does not exists.</p>:''}
        {(wrong_password)?<p style={{'color':'red'}}>*Please enter the password correctly.</p>:''}
        </form>
      )}
      </div>
   
  );
};