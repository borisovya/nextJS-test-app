'use client'

import {useState} from 'react';
import Link from 'next/link';

export default function Client() {
  const [state, setState] = useState(false)

  return (
    <div>
      <h1> Client page </h1>
      <h3>State: {state ? 'true' : 'false'}</h3>

      <button onClick={()=>setState(!state)}>Click</button>

      <br/>

      <Link href='/'>To Main Page</Link>
      <br/>
      <Link href='/client/show'>To Show Page</Link>
    </div>
  );
}
