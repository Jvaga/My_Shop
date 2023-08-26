import React from "react"
import { Col, Row } from "react-bootstrap";

import {  useData } from "../context/ContextItems";
import { ContainerCenter, ContainerCenterPadding} from "../components/atoms/containers/Containers.css";
import { H2 } from "../components/atoms/text/text.css";
import { BackgroundWhiteSmoke } from "../components/atoms/background/Background.css";
import { StoreItem } from "../components/StoreItems";


export const Store = () => {

   
    const data = useData()
    console.log("Itemsssss-->",data.data)
   
    return (
        
           
        <>  
            <BackgroundWhiteSmoke><ContainerCenter><H2>Store</H2></ContainerCenter></BackgroundWhiteSmoke>
            
            <ContainerCenterPadding>

                <Row md={2} xs={1} lg={3} className="g-3">
                    {/* {data.data.map(item =>(
                        <Col>{JSON.stringify(item)}</Col>
                    ))} */}
                    {data.data?.map((item, i) =>(
                        <Col key={i} className="d-flex align-items-center justify-content-center"> 
                            <StoreItem  {...item} />
                        </Col>
                    ))}      
                    
                </Row>
            </ContainerCenterPadding>
        </>
    )
}