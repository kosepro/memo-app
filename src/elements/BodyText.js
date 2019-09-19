import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class BodyText extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.text}>Hello World!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: '#ddd',
        backgroundColor: '#abc',
    },
});

export default BodyText;
