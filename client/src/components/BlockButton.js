import React from 'react'
import { View, Text,  TouchableHighlight, Dimensions, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'




const BlockButton = ({text, color, textColor, family, onPress}) => {
    return (
        <View style={{justifyContent:'center', alignItems:'center'}}>
           <TouchableOpacity style={{...style.blockButton, backgroundColor:color}} onPress={onPress}>
                <Text style={{color:textColor, fontSize:18, fontFamily:family }}>{text}</Text>    
           </TouchableOpacity> 
        </View>
    )
}

const style = StyleSheet.create({
    blockButton:{
        borderRadius:20, 
        width:Dimensions.get('screen').width - 70, 
        height:65, 
        justifyContent:'center', 
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    }
}) 

export default BlockButton