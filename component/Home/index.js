import React, { useState } from 'react';
import { View } from 'react-native';

import InputComponent from '../Input';

const HomeComponent = () => {
    const [state, setState] = useState({
        owner: '',
        repository: ''
    })

    const handleChange = (newValue, name) => {
        setState(prevState => {
            return {
                ...prevState,
                [name]:newValue
            }
        })
    }

    return (
        <View>
            <InputComponent
                placeholder='GitHub owner'
                value={state.owner}
                name='owner'
                handleChange={handleChange}/>
            <InputComponent
                placeholder='Repository name'
                value={state.repository}
                name='repository'
                handleChange={handleChange}/>
        </View>
    )
}

export default HomeComponent