import React from 'react'
import {View, Text, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import BlockButton from '../../components/BlockButton'


import styles from './styles'

const Profile = () => {
    return (
        <View>
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={{marginLeft:'35%', fontSize:18}}>@Username</Text>
                    <TouchableOpacity>
                        <Icon name="ellipsis-h" color="black" size={30}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.profilePicWithInfo}>

                    <View style={styles.infoStyle}>
                        <Text style={{fontSize:18}}>90</Text> 
                        <Text style={{fontSize:18}}> Followers</Text>
                    </View>

                    <View style={styles.pictureHolder}>
                       <Image 
                        source={{uri: 'https://www.markoverse.com/img/k_z_a_t.jpg'}}
                        style={styles.image}
                       />
                    </View>

                    
                    <View style={{...styles.infoStyle, marginRight:20}}>
                        <Text style={{fontSize:18}}>90</Text> 
                        <Text style={{fontSize:18}}> Pins</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontSize:25, fontWeight:'bold'}}> Kshitiz</Text>
                        <Text style={{fontSize:12, color:'gray', marginTop:5}}> Add Bio</Text>
                        <View style={{marginTop:20}}>
                            <BlockButton 
                                text="Some Button"
                                color="#fff"
                                textColor="black"
                                onPress={() => alert('Clicked')}
                            />
                        </View>
                </View>
            </View>
        </View>
    )
}


export default Profile