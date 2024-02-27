'use client';

import { use, useState } from 'react';
import { auth, provider } from '@/firebase.config';
import { signInWithPopup } from 'firebase/auth';

export default function LoggingIn() 
{
  const [user, setUser] = useState(null);
  const [uid, setUID] = useState(null);

  const handleGithubLogin=()=>{
    signInWithPopup(auth, provider).then((result)=>{
      Promise.all(
        [
          setUser(result.user.displayName),
          setUID(result.user.uid),
        ]);

    }).catch((err)=>{
      console.log(err);
    })
  }

  const handleLogout=()=>{
    setUser(null);
  }

  return (
    <div className="wrapper">
      <div className='box'>
        {user?(
              // show user data with a logout button if we have user
                <>
                <button className='btn btn-secondary btn-md bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold shadow rounded px-2'
                  onClick={handleLogout}>
                  LOGOUT
                </button>
                <h3>Welcome {user}</h3>
                </>
            ):(
              // otherwise show a button to login user with github
              <button className="btn btn-secondary btn-md bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold shadow rounded px-2"
                onClick={handleGithubLogin}>
                  Sign In With Github
              </button>
            )}
        </div>
      </div>
    );
}