import React, { useReducer} from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ColorCounter from "../components/ColorCounter";

const INCREMENT = 15

const reducer = (state, action) => {
    switch (action.type){
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0 
            ? state
            : {...state, red: state.red + action.payload };
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0 
            ? state
            : {...state, green: state.green + action.payload };
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 
            ? state
            : {...state, blue: state.blue + action.payload };
        default:
            return state;
    }
};

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red: 255, green: 255, blue: 255});
    const { red, green, blue } = state;
    const rgb = `rgb(${red}, ${green}, ${blue})`
    console.log(rgb)

    return (
        <View>
            <Text>Square Screen</Text>
            <ColorCounter
                color="Red"
                onIncrease={() => dispatch({type:'change_red', payload:INCREMENT})}
                onDecrease={() => dispatch({type:'change_red', payload:-INCREMENT})}
            />
            <ColorCounter
                onIncrease={() => dispatch({type:'change_green', payload:INCREMENT})}
                onDecrease={() => dispatch({type:'change_green', payload:-INCREMENT})}
                color="Green"
            />
            <ColorCounter
                onIncrease={() => dispatch({type:'change_blue', payload:INCREMENT})}
                onDecrease={() => dispatch({type:'change_blue', payload:-INCREMENT})}
                color="Blue"
            />
            <View 
                style={{ 
                    height: 100, 
                    width: 100, 
                    backgroundColor: rgb 
                }} 
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default SquareScreen;