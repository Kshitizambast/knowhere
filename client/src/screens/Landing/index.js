import React from 'react'
import { View, Text, TouchableHighlight, ScrollView, Image} from 'react-native'
import BlockButton from '../../components/BlockButton'
import RoundedIconButton from '../../components/RoundedIconButton'
import { useFonts } from 'expo-font'

import AppLoading from 'expo-app-loading'

import styles from './styles'
import LandingScroll from '../../components/LandingScroll'


function Landing({ navigation }) {

    let [fontLoaded] = useFonts({
        'poppins-bold': require('../../../assets/font/Poppins-Bold.ttf')
    })

    if(!fontLoaded){
        return(
          <AppLoading />
        )
    }

    return (
        <ScrollView style={styles.container}>
            <View style={{justifyContent:'center', alignItems:'center'}}>
                 <Text style={styles.header}>Knowhere</Text>
            </View>
            <View style={{marginTop:35, alignItems:'center', justifyContent:'center'}}>
                <Image
                    source={require('../../../assets/img/knowhere2.png')}
                    style={{width:300, height:220, marginBottom:30}}
                />
            </View>
            <BlockButton 
                color="#fff" 
                text="Continue with phone number" 
                textColor="black" 
                family="poppins-bold" 
                onPress={() => navigation.navigate('GetPhoneNumber')}
               
            />
            <View style={styles.socialButtonContainer}>
                <RoundedIconButton color="black" iconName="facebook"/>
                <RoundedIconButton color="black" iconName="google"/>
            </View>
            <LandingScroll />
            <View style={{marginTop:5}}>

            </View>
        </ScrollView>
    )
}

export default Landing