import { StyleSheet, Dimensions, Platform } from "react-native"

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        position:'relative',
        top: Dimensions.get('screen').height - 120,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:'9%',
        paddingRight:'5%',
        paddingVertical:'7%',
        borderTopLeftRadius:45,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: - 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 17.90,
        
        elevation: 25,
        borderTopRightRadius:45,

    },
    floatingButton:{
        position:'absolute',
        backgroundColor:'red',
        justifyContent:'center',
        borderRadius:25, 
        width:50, 
        height:50, 
        alignItems:'center',
        zIndex:10,
        elevation: (Platform.OS === 'android') ? 50 : 0,
        left: Dimensions.get('screen').width / 2.3,
        // marginHorizontal:'50%',
        top: Dimensions.get('screen').height - 150,
    }
})

export default styles