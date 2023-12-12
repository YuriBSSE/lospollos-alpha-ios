// @ts-nocheck
import { CardField, useStripe, CardFormView, CardForm } from '@stripe/stripe-react-native';
import { responsiveFontSize, responsiveScreenFontSize } from 'react-native-responsive-dimensions';

export default function PaymentScreen() {
    const { confirmPayment } = useStripe();

    return (
        <CardForm
            postalCodeEnabled={false}
            //   placeholders={{
            //     number: '4242 4242 4242 4242',
            //   }}

            //   cardStyle={{
            //     backgroundColor: '#b8b8b8',
            //     textColor: 'white',
            //     borderColor:'grey',
            //     color:'white',

            //     borderRadius: responsiveFontSize(2)
            //   }}

            onFormComplete={(e)=>{
                console.log('cardDetails', e);
            }}

            cardStyle={{
                borderWidth: 1,
                borderColor:'#b8b8b8',
                borderRadius: responsiveScreenFontSize(2),
                backgroundColor: '#e8e8e8',
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
            }}
            textStyle={{
                color: 'black'
            }}
            // placeholders={{
            //     number: '4242 4242 4242 4242',
            // }}
            style={{
                width: '96%',
                height: responsiveScreenFontSize(30),
                // marginVertical: 30,
                // backgroundColor:'#b8b8b8',
                // borderColor:'grey',
                // borderWidth: 1,
                // color:'white',
                borderRadius: responsiveFontSize(2)
            }}
            onCardChange={(cardDetails) => {
                console.log('cardDetails', cardDetails);
            }}
            onFocus={(focusedField) => {
                console.log('focusField', focusedField);
            }}
        />
    );
}