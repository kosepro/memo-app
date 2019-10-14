import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BodyText from './src/elements/BodyText';

export default class App extends React.Component {
// export default function App() {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.appbar}>
                    <View>
                        <Text style={styles.appbarTitle}>MEMOT</Text>
                    </View>
                </View>

                <View style={styles.memoList}>
                    <View style={styles.memoListItem}>
                        <Text style={styles.memoTitle}>講座のアイテム</Text>
                        <Text style={styles.memoDate}>2017/10/10</Text>
                    </View>

                    <View style={styles.memoListItem}>
                        <Text style={styles.memoTitle}>講座のアイテム</Text>
                        <Text style={styles.memoDate}>2017/10/10</Text>
                    </View>

                    <View style={styles.memoListItem}>
                        <Text style={styles.memoTitle}>講座のアイテム</Text>
                        <Text style={styles.memoDate}>2017/10/10</Text>
                    </View>

                    <View style={styles.memoListItem}>
                        <Text style={styles.memoTitle}>講座のアイテム</Text>
                        <Text style={styles.memoDate}>2017/10/10</Text>
                    </View>

                    <View style={styles.memoListItem}>
                        <Text style={styles.memoTitle}>講座のアイテム</Text>
                        <Text style={styles.memoDate}>2017/10/10</Text>
                    </View>
                </View>

                <View style={styles.memoAddButton}>
                    <Text style={styles.memoAddButtonTitle}>+</Text>
                </View>

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
    memoAddButton: {
        position: 'absolute',
        bottom: 32,
        right: 32,
        width: 48,
        height: 48,
        backgroundColor: '#e31676',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.7,
        shadowRadius: 3,
    },
    memoAddButtonTitle: {
        fontSize: 32,
        lineHeight: 32,
        color: '#fff',
    },
    memoList: {
        width: '100%',
        flex: 1,
    },
    memoListItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
    },
    memoTitle: {
        fontSize: 18,
        marginBottom: 4,
    },
    memoDate: {
        fontSize: 12,
        color: '#a2a2a2',
    },
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
        fontSize: '18',
    },
});
