
import {Container, LinkSocials, SocialsBox, SocialsWrapper } from "./Socials.css"

export const Socials = () => {

    return(
        <>
            <Container>
            <h2>Soziale Medien</h2>
                <SocialsBox>

                    <SocialsWrapper>
                        <LinkSocials href="">
                            <img src={process.env.PUBLIC_URL + '/imgs/socialSvgs/icons8-instagram.svg'} alt="instagram-icone" />
                        </LinkSocials>
                        <h3>Instagram</h3>
                    </SocialsWrapper>

                    <SocialsWrapper>
                        <LinkSocials href="">
                            <img src={process.env.PUBLIC_URL + '/imgs/socialSvgs/icons8-tick-tack.svg'} alt="tiktok-icone" />
                        </LinkSocials>
                        <h3>Tiktok</h3>
                    </SocialsWrapper>
                    
                    <SocialsWrapper>
                        <LinkSocials href="">
                            <img src={process.env.PUBLIC_URL + '/imgs/socialSvgs/icons8-pinterest-logo.svg'} alt="pinterest-icone" />
                        </LinkSocials>
                        <h3>Pinterest</h3>
                    </SocialsWrapper>
                </SocialsBox>

            </Container>
            
        </>
    
    )
}