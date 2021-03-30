import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() { 
  const [A, setInputA] = useState('');
  const [B, setInputB] = useState('');
  const [C, setInputC] = useState('');
  const [result, setInputResult] = useState('');

  const pressHandler = () =>{
      let a = Number.parseInt(A);
      let b = Number.parseInt(B);
      let c = Number.parseInt(C);
      if(A!='' && B!='' && C!=''){
      let D = b*b-4*a*c;
      if(D==0){
        let res = (-c)/b;
        setInputResult('Уравнение имеет один корень x = '+res);
      }
      else if(D>0){
        let x1 = (-b-Math.sqrt(D))/(2*a);
        let x2 = (-b+Math.sqrt(D))/(2*a);
        setInputResult('Первый корень x1 = '+ x1+'\n\nВторой корень x2 = '+x2);
      }
      else if(D<0){
        setInputResult('Нет корней!');
      }
    }
  }

  return (
    <View style = {{backgroundColor: '#252525', width: '100%', height: '100%'}}>
      <View style ={styles.header}>
        <Text style={styles.headerText}>Квадратное уравнение</Text> 
      </View>

      <Text style = {{paddingTop:10,color: '#2196F3',fontWeight: 'bold', fontSize: 22, paddingLeft:10}}
       paddingTop>Заполните поля:</Text>

      <View style = {styles.block}>
      <Text style = {styles.text}>Введите A </Text>
        <TextInput style = {styles.input} keyboardType='numeric'  
        value = {A} onChangeText={text => setInputA(text)+setInputResult('')}/>
        </View>
        <View style = {styles.block}>

        <Text style = {styles.text}>Введите B </Text>
        <TextInput style = {styles.input} keyboardType='numeric'  
         value = {B} onChangeText={text => setInputB(text)+setInputResult('')}/>
         </View>
         <View style = {styles.block}>
         
        <Text style = {styles.text}>Введите C </Text>
        <TextInput style = {styles.input} keyboardType='numeric'  
        value = {C} onChangeText={text => setInputC(text)+setInputResult('')}/>
        </View>
      <View style = {{alignItems: 'center', paddingTop: 20,  }}>
        <Button title = "Вычислить" onPress = {pressHandler}  color = '#007AFF'/>
      </View>

      <Text style = {{color:'#2196F3', paddingTop: 10, fontSize: 22, paddingLeft: 10, fontWeight: 'bold'}}>Ответ:</Text>
      <Text style = {styles.res}>{result}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  block: {
      flexDirection: 'row', 
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 14,
      marginTop: 12
  },
  input: {
      color: '#fff',
      width: '20%',
      textAlign: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#2196F3',
  },
  text: {
      color: '#2196F3',
      fontWeight: 'bold'
  },
  res: {
    
      color: '#fff',
      marginTop: 5,
      marginLeft: 15,
      fontSize: 14
  },
  header: {
      backgroundColor: '#007AFF',
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign:'center',
    paddingTop: 25,
    paddingBottom: 20
  }
});
