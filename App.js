import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CalcKeys from "./components/CalcKeys.js";
import OperatorKeys from "./components/OperatorKeys.js";

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display:"",
      numerator:"",
      denominator:"",
      operator:"",
      switchFractionSection:false
      }
  }

  clear(){
    this.setState((state, props) => ({ display:""}));  
  }

  evalutate(x,y,operator){
    if(operator == "+" ){
      this.setState((state, props) => ({ display: parseInt(x) + parseInt(y) }))
      this.setState((state, props) => ({ switchFractionSection: false }))
    }else if(operator == "-"){
      this.setState((state, props) => ({ display: parseInt(x) - parseInt(y) }))
      this.setState((state, props) => ({ switchFractionSection: false }))        
    }else if(operator == "x"){
      this.setState((state, props) => ({ display: parseInt(x) * parseInt(y) }))
      this.setState((state, props) => ({ switchFractionSection: false }))         
    }else {
      this.setState((state, props) => ({ display: parseInt(x) / parseInt(y) }))
      this.setState((state, props) => ({ switchFractionSection: false }))         
    }
      
    
    this.setState((prevState) =>({denominator:""}))
    this.setState((prevState) =>({numerator:""}))
  }

  addNumber(x){
    
    this.setState((state, props) => ({ display: state.display + x }))    
    if(this.state.switchFractionSection ==true){
      this.setState((state, props) =>({denominator:state.denominator + x}))
    }else{
      this.setState((state, props) => ({numerator:state.numerator + x}))
    }
  }

  operatorSymbol(x){
    
  
    if(this.state.numerator == "" && this.state.switchFractionSection == false){
        this.setState((state, props) => ({numerator:this.state.display}))
    }
      
    this.setState((state, props)=>({display:state.display + x}))
    this.setState((state, props) => ({ operator: x }))
    this.setState((state, props) => ({switchFractionSection:true }))
  }    
  render() {
    return (
      <View style={styles.container}>
        <View >
            <Text style={styles.title}>Calculator</Text>
        </View>
        <View style={styles.display}>
            <Text style={styles.title}>{this.state.display}</Text>
        </View>
        <View style={styles.calcKeyRow}>
            <CalcKeys displayKey="1" onClick={()=> this.addNumber("1")} />
            <CalcKeys displayKey="2" onClick={()=> this.addNumber("2")} />
            <CalcKeys displayKey="3" onClick={()=> this.addNumber("3")} />
        </View>
        <View style={styles.calcKeyRow}>
            <CalcKeys displayKey="4" onClick={()=> this.addNumber("4")} />
            <CalcKeys displayKey="5" onClick={()=> this.addNumber("5")} />
            <CalcKeys displayKey="6" onClick={()=> this.addNumber("6")} />
        </View>
        <View style={styles.calcKeyRow}>
            <CalcKeys displayKey="7" onClick={()=> this.addNumber("7")} />
            <CalcKeys displayKey="8" onClick={()=> this.addNumber("8")} />
            <CalcKeys displayKey="9" onClick={()=> this.addNumber("9")} />
        </View>
        <View style={styles.calcKeyRow}>
            <CalcKeys displayKey="0" onClick={()=> this.addNumber("0")} />
            <CalcKeys onClick={()=> this.clear()} displayKey="Clear" />
            <CalcKeys displayKey="=" onClick={()=> this.evalutate(this.state.numerator, this.state.denominator, this.state.operator)} />
        </View>
        <View style={styles.calcKeyRow}>
            <OperatorKeys displayKey="+" onClick={()=> this.operatorSymbol("+")} />
            <OperatorKeys displayKey="-" onClick={()=> this.operatorSymbol("-")} />
            <OperatorKeys displayKey="*" onClick={()=> this.operatorSymbol("x")} />
            <OperatorKeys displayKey="/" onClick={()=> this.operatorSymbol("/")} />
        </View>      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent:"space-around",
  },
    
  display:{
    display:"flex",
    justifyContent:"center",
    alignContent:"center",
    backgroundColor:"white",
    width:"70%",
    height:"10%",
    //textAlign:"center",
  },
    
  title: {    
    color:"goldenrod",
    textAlign:"center",
    fontSize:36,
  },
    
  calcKeyRow:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    width:"100%",
  }
});
