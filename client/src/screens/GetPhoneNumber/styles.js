import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container:{
       display:'flex',
       flexDirection:'row',
       justifyContent:'space-evenly',
       alignItems:'center',
       display:'flex',
       height:60,
       borderRadius:5,
       backgroundColor:'#fff',
       elevation:3,
       paddingHorizontal:10,
       marginHorizontal:10,
       marginBottom: 30
        
    },
    headTag:{
        fontSize:18,
        paddingHorizontal:20,
        marginBottom:10

    },
    header:{
        fontSize: 30,
        fontWeight: 'bold',
        marginTop:20,
        
    },
    flagIndia:{
        width:50,
        height:50
    },

    flagHolder:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'

    },
    phoneNumberField:{
        borderColor: '#fff',
        borderTopRightRadius:5,
        borderBottomRightRadius:5,
        fontSize:20,
        paddingHorizontal:5,
        paddingTop:1,
        height: 40,
    }

})

export default styles