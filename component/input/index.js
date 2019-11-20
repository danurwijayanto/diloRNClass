import React from './node_modules/react';
import { StyleSheet, TextInput } from 'react-native'

const InputComponent = (props) => {
    const onChangeText = newValue => {
        props.handleChange(newValue, props.name)
    }

    return(
        <TextInput
            style={style.textInput}
            onChangeText={onChangeText}
            value={props.value}
            placeholder={props.placeholder}
            name={props.name}/>
    );
}

const style = StyleSheet.create({
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    }
})

export default InputComponent