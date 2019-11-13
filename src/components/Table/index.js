import React from 'react';
import {View} from 'react-native';
import normalize from 'react-native-normalize';

const Table = (props) => {

    rowNumber = props.rowNumber;
    let maxLabelLength=0;
    let maxValueLength = 0;

    props.children.map(obj=>{
        if(maxLabelLength < obj.props.label.length){
            maxLabelLength = obj.props.label.length;
        }
    });

    props.children.map(obj=>{
        if(maxValueLength < obj.props.value.length){
            maxValueLength = obj.props.value.length;
        }
    });

    return(
        <View style={{
        width: maxLabelLength*10+maxValueLength*7+20,
        height: props.rowNumber*30,
        borderWidth:2,
        borderColor:'black'
        }}>
            {props.children.map(rowObj => {
                return({
                    ...rowObj, 
                    props:{
                        ...rowObj.props, 
                        baseColumnLabelWidth:maxLabelLength,
                        baseColumnValueWidth:maxValueLength
                    }   
                })
            })}
        </View>
    )
}

export default Table;
