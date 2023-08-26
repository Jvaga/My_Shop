import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface Results {
  name: string
  description: string
  img: string
}

interface Data {
    // find(arg0: (item: any) => boolean): unknown;
    // info:[]
    // results: Results[]
    name: string
    description: string
    img: string
}

interface Value {
  data: Data[]
  
}


export const context = createContext({} as Value)

export function useData() {
  return useContext(context);
}


export const Provider = (props: Props) => {
   

    const [data, setData] = useState<Value>({data: []})
    const url = 'http://localhost:3002/artist'


   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await axios.get(url);
         setData(response);
        //  console.log('data artist',response);
       } catch (error) {
         console.warn('jhonny', error);
       }
     };
   
     fetchData();
   }, []);
  

   

   const value = {
    data : data.data  
   }


   return <context.Provider value={value}>{props.children}</context.Provider>

}