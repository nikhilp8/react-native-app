import React, {Component} from 'react';
import { View, Text, StyleSheet} from 'react-native';

class StatusBar extends Component {
    render(){
        return(
            <View style={styles.statusBar}>
                <Text> {'Status Bar'}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    statusBar:{
        height:20,
        backgroundColor:'mistyrose',
        marginTop:20
    },
    
})

export default StatusBar;