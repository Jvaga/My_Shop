import React from "react"
import { Col, Row } from "react-bootstrap";


import { Card } from "../components/cards/cardItem/Card"
import {  useData } from "../context/ContextItems";
import { Gallery } from "../components/carousel/CarouselGallery";
import { Socials } from "../components/socials/Socials";
import { Payment } from "../components/payment/Payment";
import { ContainerCenter, ContainerCenterPadding } from "../components/atoms/containers/Containers.css";
import { H2 } from "../components/atoms/text/text.css";
import { BackgroundWhiteSmoke } from "../components/atoms/background/Background.css";
import { StoreItem } from "../components/StoreItems";

export const Home = () => {

   
    const data = useData()
    const shortData = data.data.slice(0,6)
    // console.log("itemData",data)
    // console.log("itemShort",shortData)
   
    return (
        <>
            <Gallery />
            <BackgroundWhiteSmoke><ContainerCenter><H2>Entdecken Sie unsere Designs</H2></ContainerCenter></BackgroundWhiteSmoke>

            <ContainerCenterPadding>
                <Row md={2} xs={1} lg={3} className="g-3">
                    
                    {/* {shortData?.map((item, i) =>(
                        
                        <Col key={i} className="d-flex align-items-center justify-content-center"> 
                            <Card  {...item} />
                        </Col>
                    ))}       */}
                    {shortData?.map((item, i) =>(
                        <Col key={i} className="d-flex align-items-center justify-content-center"> 
                            {/* <Card {...item} /> */}
                            <StoreItem  {...item} />
                        </Col>
                    ))} 
                    
                </Row>
            </ContainerCenterPadding>
            <Socials />
            <Payment />

                
        </>
    )
}