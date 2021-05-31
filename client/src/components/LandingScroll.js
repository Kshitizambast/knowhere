import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native'


const LandingScroll = () => {

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginTop:20}}    
        >
          
                <View style={{padding:5, borderRadius:2, marginHorizontal:5  }}> 
                    <Image 
                        source={{ uri: 'https://images.pexels.com/photos/2666467/pexels-photo-2666467.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' }}
                        style={style.scrollImage}
                        delay={0}
                        duration={6000}
                        
                    />
                </View>
                

                <View style={{padding:5, borderRadius:2,  marginHorizontal:5}}> 
                    <Image 
                        source={{ uri: 'https://images.pexels.com/photos/7574933/pexels-photo-7574933.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
                        style={style.scrollImage}
                        delay={0}
                        duration={6000}
                    />
                </View>
                <View style={{padding:5, borderRadius:2,  marginHorizontal:5}}> 
                    <Image 
                        source={{ uri: 'https://images.pexels.com/photos/7974358/pexels-photo-7974358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
                        style={style.scrollImage}
                       
                    />
                </View>
                <View style={{padding:5, borderRadius:2,  marginHorizontal:5}}> 
                    <Image 
                        source={{ uri: 'https://images.pexels.com/photos/7841968/pexels-photo-7841968.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
                        style={style.scrollImage}
                       
                    />
                </View>
                
            
        </ScrollView>
    )
}

const style = StyleSheet.create({
    scrollImage:{
        width: 250,
        height:250,
        borderRadius:20
    }
})

export default LandingScroll