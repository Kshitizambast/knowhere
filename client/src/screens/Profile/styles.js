import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container:{
        marginTop:50,
        paddingHorizontal:5
    },

    header:{
        alignItems:'center',
        paddingHorizontal:10,
        justifyContent:'space-between',
        display:'flex',
        flexDirection:'row',
    },

    profilePicWithInfo:{
        justifyContent:'space-between',
        display:'flex',
        padding:10,
        marginTop:20,
        flexDirection:'row'
    },
    pictureHolder:{
        marginRight:15,
        // width:110,
        // height:110,
        // borderRadius:60,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 11,
        // },
        // shadowOpacity: 0.4,
        // shadowRadius: 11.00,

        // elevation: 24,
    },

    image:{
        width:120,
        height:120,
        borderRadius:60,
    },
    infoStyle:{
        alignItems:'center',
        justifyContent:'center'
    }

})

export default styles