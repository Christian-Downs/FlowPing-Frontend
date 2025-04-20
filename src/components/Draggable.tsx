import React, { Component } from 'react';
import { Animated, PanResponder, PanResponderGestureState, ViewStyle, StyleSheet } from 'react-native';


type Props = {
    children: React.ReactNode;
    onDrop?: () => void;
    dropZone?: {y: number; height:number};
    style?: ViewStyle;
}

type State = {
    pan: Animated.ValueXY;
}


export default class Draggable extends Component<Props, State>{
    panResponder: any;

    constructor(props: Props){
        super(props);

        this.state = {
            pan: new Animated.ValueXY(),
        };

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, {
                dx: this.state.pan.x,
                dy: this.state.pan.y,
            }], { useNativeDriver: false }),

            onPanResponderRelease: (e: any, gesture: any) => {
                if (this.isDropZone(gesture) && this.props.onDrop) {
                    this.props.onDrop();
                    // Don't spring back
                } else {
                    Animated.spring(this.state.pan, {
                        toValue: { x: 0, y: 0 },
                        useNativeDriver: false,
                    }).start();
                }
            },
        });
    }

    isDropZone(gesture: PanResponderGestureState) {
        const { dropZone } = this.props;
        return dropZone &&
            gesture.moveY > dropZone.y &&
            gesture.moveY < dropZone.y + dropZone.height;
    }
    render() {
        return (
            <Animated.View
                {...this.panResponder.panHandlers}
                style={[
                    styles.draggable,
                    this.props.style,
                    {
                        transform: this.state.pan.getTranslateTransform(),
                    }
                ]}>
                {this.props.children}
            </Animated.View>
        );
    }


}

const styles = StyleSheet.create({
    draggable: {
        position: 'absolute',
        userSelect: 'none' as any, // TS needs coercion
    },
});