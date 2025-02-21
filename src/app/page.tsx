'use client'

import Image from "next/image";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {



  useEffect(()=>{
    const getData =  async () => {
      const response = await axios.get("http://localhost:9999")
      console.log(response)
    }
    getData()
  },[])

  return (
    <div className="">
 <p>hello admin web
 </p>

    </div>
  );
}
