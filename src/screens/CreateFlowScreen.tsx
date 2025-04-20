import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

type Flow = {
    trigger: string;
    actions: string[];
};

const CreateFlowScreen: React.FC = () => {
    const [flow, setFlow] = useState<Flow>({
        trigger: 'manual',
        actions: ['alert'],
    });

    const runFlow = () => {
        Alert.alert('Flow Triggered!', 'This is your custom notification.');
    };

    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>Build Your Flow</Text>
            <Text>Trigger: {flow.trigger}</Text>
            <Text>Actions: {flow.actions.join(', ')}</Text>

            <Button title="Run Flow" onPress={runFlow} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'center' },
    title: { fontSize: 20, marginBottom: 20 },
});

export default CreateFlowScreen;
