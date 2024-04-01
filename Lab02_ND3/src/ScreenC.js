import React from "react";
import { Image, StyleSheet, View } from "react-native";

const WE = () => {
    return(

        <>  
            <View style={style.counatier}>
                <View style={style.logo}><Image source={require('../images/dien.png')}style={{width:'100%', height:220}}/></View>
                <View style={style.logo}><Image source={require('../images/van.png')}style={{width:'100%', height:220}}/></View>
                <View style={style.logo}><Image source={require('../images/tam.png')}style={{width:'100%', height:220}}/></View>
                <View style={style.logo}><Image source={require('../images/hau.png')}style={{width:'100%', height:220}}/></View>
             </View>
             
        </>
    ) 
};

const style = StyleSheet.create(
    {
        counatier: {

            marginTop:5,
            flexDirection:'row',
            justifyContent:'space-between',
            flexDirection:'row',
            flexWrap:"wrap",

        },

        logo: {
            width: '50%', // Thay đổi kích thước tùy ý
            // height: 200, // Thay đổi kích thước tùy ý
            resizeMode: 'contain', // Đảm bảo hình ảnh không bị méo
            overflow:'hidden',
            borderRadius:15,
            borderWidth:1,
            borderColor:'#000',

    }
    }
    )

export default WE;
