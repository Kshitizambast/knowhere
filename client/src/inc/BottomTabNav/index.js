import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles'

const BottomTabNav = () => {
    return (
        <View>
            <TouchableOpacity style={styles.floatingButton}>
                <Icon name="plus" size={35} color="#fff" />  
            </TouchableOpacity>
            <View style={styles.container}>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={{marginRight: '28%'}}>
                            <Icon name="heart" size={30} color="gray" />  
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Icon name="search" size={30} color="gray" />  
                        </TouchableOpacity>
                    </View>
                   
                   <View style={{flexDirection:'row',justifyContent:'space-between', marginRight:'5%'}}>
                        <TouchableOpacity style={{marginRight: '15%'}} >
                            <Icon name="wrench" size={30} color="gray" />  
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="user" size={30} color="gray" style={{marginRight:2}} />  
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
    )
}

export default BottomTabNav