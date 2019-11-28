import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Appbar extends React.Component {
    render() {
        return (
            <View style={styles.appbar}>
                    <Text style={styles.appbarTitle}>MEMOT</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    appbar: {
        backgroundColor: '#265366',
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        paddingTop: 30,
        height: 78,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.6,
        shadowRadius: 3,
        zIndex: 10,
    },
    appbarTitle: {
        color: '#fff',
        fontSize: 18,
    },
});

export default Appbar;
