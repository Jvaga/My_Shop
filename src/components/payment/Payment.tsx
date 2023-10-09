import {
  Container,
  PaymentImg,
  PaymentWrapper,
  PaymentBox,
} from "./Payment.css";

export const Payment = () => {
  return (
    <>
      <Container>
        <h2>Payment Methods</h2>
        <PaymentBox>
          <PaymentWrapper>
            <PaymentImg
              src={
                process.env.PUBLIC_URL + "/imgs/paymentSvgs/icons8-maestro.svg"
              }
              alt="maestro-icone"
            />
            <h3>Maestro</h3>
          </PaymentWrapper>

          <PaymentWrapper>
            <PaymentImg
              src={
                process.env.PUBLIC_URL + "/imgs/paymentSvgs/icons8-paypal.svg"
              }
              alt="paypal-icone"
            />
            <h3>Paypal</h3>
          </PaymentWrapper>

          <PaymentWrapper>
            <PaymentImg
              src={process.env.PUBLIC_URL + "/imgs/paymentSvgs/icons8-visa.svg"}
              alt="visa-icone"
            />
            <h3>Visa</h3>
          </PaymentWrapper>
        </PaymentBox>
      </Container>
    </>
  );
};
