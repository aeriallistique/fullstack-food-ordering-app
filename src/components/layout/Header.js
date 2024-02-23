"use client"
import { useSession } from "next-auth/react";
import Link from "next/link";
import {signOut} from 'next-auth/react';

export default function Header(){
  const session = useSession()
  const status = session.status;

  return(
    <header className="flex items-center justify-between">
        
        <nav className="flex items-center  gap-8 text-gray-500 font-semibold">
          <Link className="text-primary font-semibold text-2xl" href={'/'}>
            St. Pizza
          </ Link>
          <Link href={'/'}>Home</Link>
          <Link href={''}>Menu</Link>
          <Link href={''}>About</Link>
          <Link href={''}>Contact</Link>
         
        </nav>
        <nav className="flex items-center gap-4 text-gray-500 font-semibold">
          {status === 'authenticated' && (
            <button
              onClick={()=> signOut()} 
              className="bg-primary text-white rounded-full px-8 py-2">
                Logout
            </button>
          )}

          {status !== 'authenticated' && (
            <>
              <Link href={'/login'}>Login</Link>
              <Link href={'/register'} className="bg-primary text-white rounded-full px-8 py-2">
                Register
              </Link>
            </>
          )}
        </nav>
      </header>
  )
} 