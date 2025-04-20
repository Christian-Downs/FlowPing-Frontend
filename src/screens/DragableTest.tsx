
import React, { Component } from 'react';
import Draggable  from '../components/Draggable';
import {
    StyleSheet,
    View,
    Text,
    PanResponder,
    Animated,
    Easing,
    Dimensions,
    PanResponderGestureState
} from 'react-native';

type State = {
    dropZone: { y: number; height: number } | null;
    dropped: boolean;
};

export default class Viewport extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            dropZone: null,
            dropped: false,
        };
    }

    setDropZoneValues = (event: any) => {
        this.setState({
            dropZone: event.nativeEvent.layout
        });
    }

    handleDrop = () => {
        console.log("HELLO");
        
        this.setState({ dropped: true });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.dropZone} onLayout={this.setDropZoneValues}>
                    <Text style={styles.text}>
                        {this.state.dropped ? "Dropped!" : "Drop here!"}
                    </Text>
                </View>

                {!this.state.dropped &&
                    <Draggable
                        dropZone={this.state.dropZone || undefined}
                        onDrop={this.handleDrop}
                        style={styles.circle}
                    >
                        <Text style={styles.text}>Drag me!</Text>
                    </Draggable>
                }
                {
                    <Draggable
                        dropZone={this.state.dropZone || undefined}
                        onDrop={this.handleDrop}
                        style={styles.circle2}
                    >
                        <Text style={styles.text}>Drag me!</Text>
                    </Draggable>
                }
            </View>
        );
    }
}

const CIRCLE_RADIUS = 36;
const Window = Dimensions.get('window');

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    dropZone: {
        height: 100,
        backgroundColor: '#2c3e50',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#fff',
        textAlign: 'center',
    },
    circle: {
        backgroundColor: '#1abc9c',
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        borderRadius: CIRCLE_RADIUS,
        top: Window.height / 2 - CIRCLE_RADIUS,
        left: Window.width / 2 - CIRCLE_RADIUS,
    },
        circle2: {
        backgroundColor: '#1abc9c',
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        borderRadius: CIRCLE_RADIUS,
        top: Window.height / 2 - CIRCLE_RADIUS*4,
        left: Window.width / 2 - CIRCLE_RADIUS,
    }
});