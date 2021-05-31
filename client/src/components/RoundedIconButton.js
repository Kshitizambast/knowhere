import React from 'react'
import { View, Text,  TouchableHighlight, Dimensions, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'




const RoundedIconButton = ({color, iconName}) => {
    return (
        <View>
           <TouchableOpacity style={{...style.roundedButton, backgroundColor:'#fff'}}>
             <Icon name={iconName} size={30} color={color} />  
           </TouchableOpacity> 
        </View>
    )
}

const style = StyleSheet.create({
    roundedButton:{
        borderRadius:25, 
        width:50, 
        height:50, 
        justifyContent:'center', 
        alignItems:'center',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 2,
        shadowRadius: 5,
        elevation: 15,
    }
})

export default RoundedIconButton