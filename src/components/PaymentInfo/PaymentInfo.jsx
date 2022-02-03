import React from 'react';
import { Container, Mop, Title, Text, SubText, PaymentPortals, List_item, Card, CardDetails, Img, Image } from "./Style"
import visa from '../../images/visa.png';
import discover from '../../images/discover.png';
import paypal from '../../images/paypal.png';
import card from '../../images/card3.png';

function PaymentInfo() {
  return (
      <Container>
          <Mop>
              <Title>
                  <Text>Payment Information</Text>
                  <SubText>Choose your method of payment</SubText>
              </Title>

              <PaymentPortals>
                    <List_item>
                        <Img src={visa}/>
                    </List_item>
                    <List_item>
                        <Img src={discover}/>
                    </List_item>
                    <List_item>
                        <Img src={paypal}/>
                    </List_item>
              </PaymentPortals>
          </Mop>

          <CardDetails>
            <Card>
                <Image src={card}/>
            </Card>
          </CardDetails>
      </Container>
    );
}

export default PaymentInfo;
