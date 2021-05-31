import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container:{
       display:'flex',
       flexDirection:'row',
       justifyContent:'space-around',
       alignItems:'center',
       display:'flex', 
       paddingHorizontal:10
    },
    headTag:{
        fontSize:18,
        marginBottom:20

    },

    flagHolder:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        borderRadius:5,
        backgroundColor:'#fff',
        elevation:3,
        paddingHorizontal:10,
        marginBottom: 30,
        height:60,
        // width:70
      

    },
    phoneNumberField:{
        borderColor: '#fff',
        borderTopRightRadius:5,
        borderBottomRightRadius:5,
        fontSize:20,
        paddingHorizontal:5,
        height: 40,
    }

})

export default styles