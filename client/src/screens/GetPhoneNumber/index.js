import React from 'react'
import { View, Text, TouchableHighlight, ScrollView, Image, TextInput} from 'react-native'
import BlockButton from '../../components/BlockButton'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import * as Yup from 'yup'
import { Formik } from 'formik'

import styles from './styles'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = Yup.object().shape({

    phone: Yup.string()
              .matches(phoneRegExp, 'Phone number is not valid')
              .required()
              

});

const GetPhoneNumber = ({ navigation }) => {


    const [number, onChangeNumber] = React.useState('')

    const [error, setError] = React.useState(null);
   

  
    let [fontLoaded] = useFonts({
        'poppins-bold': require('../../../assets/font/Poppins-Bold.ttf')
    })

    if(!fontLoaded){
        return(
          <AppLoading />
        )
    }

    return (


        <Formik 

        initialValues={{
            phone: ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
            console.log(values)
            navigation.navigate('OtpScreen', {
                phone: values.phone
            })
        }}
        
        >
        {(props) => (
            <View style={{marginVertical:"50%"}}>
           
            <Text style={{...styles.headTag, fontFamily:'poppins-bold'}}>Enter your phone number to get the OTP</Text>
            <Text style={{color:'red', fontSize:15, margin:5}}>{ props.touched.phone && props.errors.phone}</Text>
            <View style={styles.container}>
             <View style={styles.flagHolder}>
                <Image 

                    source={require('../../../assets/img/india.png')}
                    style={styles.flagIndia}

                />
                <Text style={{fontSize:20, fontWeight:'bold', marginHorizontal:10}}>+91</Text>  
             </View>  
           
            <TextInput
                maxLength={10}
                onChangeText={props.handleChange('phone')}
                keyboardType="numeric"
                style={styles.phoneNumberField}
                onBlur={props.handleBlur('phone')}
                value={props.values.phone}
                placeholder="xxx-xxx-xxx-xxx"
                autoFocus
            />


            </View>
            <BlockButton 
                color="#fff" 
                text="Submit" 
                textColor="black" 
                family="poppins-bold"
                onPress={props.handleSubmit} 
            />
        </View>
        )}

        </Formik>
    )
}

export default GetPhoneNumber
