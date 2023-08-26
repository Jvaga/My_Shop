import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

// interface Results {
//   name: string
//   price: number
//   description: string
// }

interface Data {
    _id: number
    quantity: number
    color: string
    price: number
    description: string
    name: string
    img:string
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
    const url = 'http://localhost:3002/item'


   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await axios.get(url);
         setData(response);
       } catch (error) {
         console.warn('jhonny', error);
       }
     };
   
     fetchData();
   }, []);

   function getItemQuantity(id: number) {
    return data.data.find(item => item._id === id) || 0
    }

   

   const value = {
    data : data.data  
   }


   return <context.Provider value={value}>{props.children}</context.Provider>

}