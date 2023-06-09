"use client";

import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';

const Nav = () => {

    const isUserLogged=true;
    const [providers, setProviders]=useState(null);
    const [toggleDropDown, setToggleDropDown]=useState(false);
    const fetchProviders= async()=>{
        const response= await getProviders();
        setProviders(response);
    }
    useEffect(()=>{
        fetchProviders();
    },[]);


  return (
 <nav className="flex-between w-full mb-16 pt-3">
    <Link href="/" className="flex gap-2 flex-center">
        <Image 
        width={30}
        height={30}
        alt="Artko logo"
        src="/assets/images/logo.svg"
        className="object-contain" />
    </Link>
{/*/ Desktop Navigaton*/}
<div className="sm:flex hidden">
    {isUserLogged ? (
        <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" 
            className="black_btn">
                Create Post
            </Link>
            <button type="button" onClick={signOut}
            className="outline_btn">
                Sign Out
            </button>
            <Link href="/profile">
                <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                alt="If the user has a profile image here it will be dislayed"
                className="rounded-full"/>

            </Link>
            </div>
    ):
    <>
    {providers && 
    Object.values(providers).map((provider)=>(
        <button
         type="button" 
         key={provider.name} 
        onClick={()=>signIn(provider.id)}
        className="amber_btn">
            Sign In
        </button>
    ))}
    
    </>}

</div>



{/*Mobile Navigation */}
<div className="sm:hidden flex relative">
    {isUserLogged ?
    (
        <div className="flex">
            <Image
            src="/assets/images/logo.svg"
            width={37}
            height={37}
            className="rounded-full"
            alt="profile"
            onClick={()=>setToggleDropDown((prev)=>!prev)}/>

            {toggleDropDown && (
                <div className="dropdown">
                    <Link href="/profile" className="dropdown_link" 
                    onClick={()=>setToggleDropDown(false)}>My Profile</Link>
                         <Link href="/create-prompt" className="dropdown_link" 
                    onClick={()=>setToggleDropDown(false)}>Create prompt</Link>
                   
                    <button type="button" className="mt-5 w-full black_btn"
                    onClick={()=>{setToggleDropDown(false);
                    signOut();}}>Sign Out</button>
                    </div>

            )}
            </div>
    ):(
<>
{providers && Object.values(providers).map((provider)=>(
    <button type="button" key={provider.name} onClick={()=>signIn(provider.id)}
    className="black_btn">Sign In</button>
))}
</>
    )
}
</div>

 </nav>
  )
}

export default Nav
