import React from 'react';
import { 
    Container, 
    Mop, 
    Title, 
    Text, 
    SubText, 
    PaymentPortals, 
    List_item, 
    Card, 
    CardDetails, 
    Img, 
    Image ,
    Form, 
    FormGroup, 
    Label, 
    FormInput, 
    Radio, 
    RadioInput, 
    RadText,
    Button,
    Line,
    Div,
    PromoCode,
    PromoText,
    Code,
    SubTotal,
    SubTText,
    EstText,
    EstTax,
    Payment,
    Pay,
    Total,
    TText,
    Value,
} from "./Style"
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

            <Form>
                <FormGroup>
                    <Label for="Credit card number">Credit card number</Label>
                    <FormInput
                        type="text"
                        name="CreditCardNumber"
                        id="CreditCardNumber"
                        required
                        placeholder="4324 5433 9382 1030"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="Expiration Date">Expiration Date</Label>
                    <FormInput
                        type="text"
                        name="ExpirationDate"
                        id="ExpirationDate"
                        required
                        placeholder="03/24"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="Security Code">Security Code</Label>
                    <FormInput
                        type="text"
                        name="SecurityCode"
                        id="SecurityCode"
                        required
                        placeholder="420"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="Postal Code">Postal Code</Label>
                    <FormInput
                        type="text"
                        name="PostalCode"
                        id="PostalCode"
                        required
                        placeholder="10119"
                    />
                </FormGroup>
                <FormGroup className="full">
                        <Radio for="RadioiD">
                        <RadioInput
                            type="radio"
                            name="radioField"
                            id="RadioId"
                            required
                        />
                        <RadText>use this card for next time purchases</RadText>
                        </Radio>
                </FormGroup>
                <FormGroup className="full">
                    <Button>Add card</Button>
                </FormGroup>
            </Form>
          </CardDetails>
          <Line></Line>
          <Div>
              <SubTotal>
                  <SubTText>Subtotal</SubTText>
                  <Value>2,497.00</Value>
              </SubTotal>
              <EstTax>
                  <EstText>Estimated Tax</EstText>
                  <Value>119.64</Value>
              </EstTax>
              <PromoCode>
                  <PromoText>Promotional Code:<Code>Z4KXLM9A</Code></PromoText>
                  <Value>119.64</Value>
              </PromoCode>
          </Div>
          <Line></Line>
          <Payment>
              <Pay>Complete payment</Pay>
              <Total>
                  <TText>Total:</TText>
                  <Value>2556.64</Value>
              </Total>
          </Payment>
      </Container>
    );
}

export default PaymentInfo;
