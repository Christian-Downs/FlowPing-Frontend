import React from 'react';
import Flow from '../components/Flow';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { View, Text } from 'react-native';
import Draggable from '../components/Draggable';

type Props = NativeStackScreenProps<RootStackParamList, 'Flows'>;


const flows: Array<Flow> = [
]

const FlowsScreen: React.FC<Props> = ({ navigation }) => {
    var flow: Flow = new Flow("TEST1");

    flows.push(flow);
    flow = new Flow("TEST2");
    flows.push(flow);

    return (   //TODO: WHEN LEAVE AND RETURN MAKES MULTIPLE COPIES.
        <View>
            {flows.map(r =>
                <Draggable>
                    <Text >{r.name}</Text>
                </Draggable>
            )}
        </View>
    )
}



export default FlowsScreen;

