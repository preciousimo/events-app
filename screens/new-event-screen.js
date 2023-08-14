import { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export const NewEventScreen = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState(new Date())
    const [alert, setAlert] = useState({
        isVisible: false,
        msg: ''
    })

    return ( 
        <View style={styles.screen}>
            <TextInput
                value={name}
                onChangeText={setName}
                placeholder='name'
                style={styles.input}
            />
        </View>
     );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'white',
        marginBottom: 10,
    }
})
