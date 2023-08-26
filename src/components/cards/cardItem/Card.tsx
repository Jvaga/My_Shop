
import React from "react";
import {  P,   TitleWrapper, Title,  Img, Cardbox } from "./Card.css";
import { formatCurrency } from "../../../utilities/formatCurrency";
import { useData } from "../../../context/ContextItems";


type CardProps = {
    id?: number
    quantity?: number
    color?: string
    name?: string
    description: string
    price?:number
    img?:string

  }



export const Card = (props: CardProps) => {
  // const {removeFromCart} = useData()

  return (
    <Cardbox>
      <TitleWrapper><Title>{props.name}</Title></TitleWrapper >
     
      <Img  src={props.img}  alt="foto"  />

      <P>{props.description}</P>
      <P>{props.price} €</P>
    </Cardbox>
  );
};