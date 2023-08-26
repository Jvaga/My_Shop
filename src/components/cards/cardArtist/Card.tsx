
import React from "react";
import { CardWrapper, Cardbox, Img, InfoWrapper, P, Title } from "../cardArtist/Card.css";


type CardProps = {
    id?: number
    color?: string
    name?: string
    description: string
    price?:number
    img?:string

  }

export const Card = (props: CardProps) => {

  return (
    <Cardbox>
      <Title><h5>{props.name}</h5></Title>

      <CardWrapper>
        <Img  src={props.img}  alt="foto"  />

        <InfoWrapper>
          <P>{props.description}</P>
        </InfoWrapper>
      </CardWrapper>
      
    </Cardbox>
  );
};