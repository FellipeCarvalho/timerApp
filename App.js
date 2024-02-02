import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native';

export default function App() {
  const[timer, setTimer]=useState(0)
  const [timerText, setTimerText]=useState("INICIAR")
  const [timerInterval, setTimerInterval] =useState(null)
  const [lastTimerRecord, setLastTimerRecord] =useState(null)

  const handleClearTimer = ()=>{
    clearInterval(timerInterval);
    setTimer(0)
    setTimerText("INICIAR")
    setLastTimerRecord(timer)
  }

  const handleTimer = ()=>{
    if(timerText =='PARAR'){
      clearInterval(timerInterval);
      setTimerText("VOLTAR")
      return
    }
    setTimerText("PARAR")
    setTimerInterval(setInterval(() => {
      setTimer((prevTimer)=> prevTimer + 0.1)
    }, 100));

  }
  return (
    <View style={styles.container}>
      <View style={styles.timerContent}>

        <Image style={styles.image} source={require("./assets/timer.png")}/>
       
    
        <Text style={styles.timerText}>{timer.toFixed(1)}</Text>
        <View style={styles.buttonsWrapper}>
        <TouchableOpacity style={styles.buttons} onPress={handleTimer}>
         <Text style={styles.textButtons}>{timerText}</Text> 
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons} onPress={handleClearTimer}>
        <Text style={styles.textButtons}>LIMPAR</Text> 
        </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.textButtons}>{lastTimerRecord ? "Último tempo marcado: " + lastTimerRecord.toFixed(1) + 's' : ""}</Text> 
     
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aeff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image:{
    width:280,
    height:320,

  },
  timerContent:{
    justifyContent:"center",
    alignItems:"center",
  
   

  },
  timerText:{
 color:"#ffff",
 fontSize:65,
marginTop:-180


},
buttonsWrapper:{
  flexDirection:"row",
},
buttons:{
padding:70,
marginTop:80
  },
  textButtons:{
    color: "#fff",
    fontSize:20,

  }


});
