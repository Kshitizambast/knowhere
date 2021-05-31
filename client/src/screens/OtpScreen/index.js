import React from 'react'
import {View, TextInput, Text} from 'react-native'

import BlockButton from '../../components/BlockButton'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'

import styles from './styles'
const OtpScreen = ({ route, navigation }) => {

    const phone = route.params.phone
    const [numberOne, onChangeNumberOne] = React.useState('')
    const [numberTwo, onChangeNumberTwo] = React.useState('')
    const [numberThree, onChangeNumberThree] = React.useState('')
    const [numberFour, onChangeNumberFour] = React.useState('')
    const [numberFive, onChangeNumberFive] = React.useState('')
    const [numberSix, onChangeNumberSix] = React.useState('')

    let [fontLoaded] = useFonts({
        'poppins-bold': require('../../../assets/font/Poppins-Bold.ttf')
    })

    if(!fontLoaded){
        return(
          <AppLoading />
        )
    }
       

    return (
        <View style={{marginVertical:"50%"}}>
            <View style={{paddingHorizontal:10}}>
             <Text style={{...styles.headTag, fontFamily:'poppins-bold'}}>Please enter OTP recieved on {"\n"} +91 {phone}</Text>
             </View>
            <View style={styles.container}>
                <View style={styles.flagHolder}>
                    <TextInput
                        onChangeText={onChangeNumberOne}
                        value={numberOne}
                        maxLength={1}
                        autoFocus
                        keyboardType="numeric"
                        style={styles.phoneNumberField}
                        
                    />
                </View>
                <View style={styles.flagHolder}>
                <TextInput
                    onChangeText={onChangeNumberTwo}
                    value={numberTwo}
                    maxLength={1}
                    keyboardType="numeric"
                    style={styles.phoneNumberField}
                    
                    />
                </View>
                <View style={styles.flagHolder}>
                    <TextInput
                        onChangeText={onChangeNumberThree}
                        value={numberThree}
                        maxLength={1}
                        keyboardType="numeric"
                        style={styles.phoneNumberField}
                        
                    />
                </View>
                <View style={styles.flagHolder}>
                <TextInput
                    onChangeText={onChangeNumberFour}
                    value={numberFour}
                    maxLength={1}
                    keyboardType="numeric"
                    style={styles.phoneNumberField}
                    
                    />
                </View>
                <View style={styles.flagHolder}>
                <TextInput
                    onChangeText={onChangeNumberFive}
                    value={numberFive}
                    maxLength={1}
                    keyboardType="numeric"
                    style={styles.phoneNumberField}
                    
                    />
                </View>
                <View style={styles.flagHolder}>
                <TextInput
                    onChangeText={onChangeNumberSix}
                    value={numberSix}
                    maxLength={1}
                    keyboardType="numeric"
                    style={styles.phoneNumberField}
                    
                    />
                </View>
            </View>

            <BlockButton 
                color="#fff" 
                text="Submit" 
                textColor="black" 
                family="poppins-bold"
                   
            />
        </View>
    )
}

export default OtpScreen
