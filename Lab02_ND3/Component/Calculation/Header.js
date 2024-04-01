import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

const Header = (props) => {
    return (
        <View
            style={styles.view}
        >
            <Text
                style={styles.text}
            >
                Calculation
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        width:'100%',
        height: 60,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'left',
    },
    text:{
        fontSize: 25,
        fontWeight:'bold',
        color:'#000'
    }
})

export default Header;