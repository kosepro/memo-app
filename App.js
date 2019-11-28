import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appbar from './src/components/Appbar';
import MemoList from './src/components/MemoList';
import CircleButton from './src/elements/CircleButton';

// import BodyText from './src/elements/BodyText';

export default class App extends React.Component {
// export default function App() {
    render() {
        return (
            <View style={styles.container}>

                <Appbar />
                <MemoList />
                <CircleButton>+</CircleButton>
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
