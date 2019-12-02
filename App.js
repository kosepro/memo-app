import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appbar from './src/components/Appbar';
import MemoListScreen from './src/screens/MemoListScreen';

// import BodyText from './src/elements/BodyText';

export default class App extends React.Component {
// export default function App() {
    render() {
        return (
            <View style={styles.container}>
                <Appbar />
                <MemoListScreen />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffdf6',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 78,
    },
});
