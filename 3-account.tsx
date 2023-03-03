import React from "react";
import { Text, View, StyleSheet, } from "react-native";

export default function Account()  {

  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.txt, styles.heading]}>Personal Details:-</Text>
        <View style={styles.details}>
          <Text style={styles.txt1}>Name : Prem Prajapat</Text>
          <Text style={styles.txt1}>Age : 20</Text>
          <Text style={styles.txt1}>Email : prempremprajapatpp@gmail.com</Text>
        </View>
      </View>


      <View>
        <Text style={[styles.txt, styles.heading]}>My Stats</Text>
        <View >

          <View style={[styles.details, styles.design]}>
            <Text style={styles.txt}>Total Attempted</Text>
            <Text style={styles.txt}>0</Text>
          </View>

          <View style={[styles.details, styles.design]}>
            <Text style={[styles.txt]}>Correct Answer</Text>
            <Text style={[styles.txt]}>0</Text>
          </View>

          <View style={[styles.details, styles.design]}>
            <Text style={styles.txt}>Percentage</Text>
            <Text style={styles.txt}>0%</Text>
          </View>
        </View>
      </View>


      <View>
        <Text style={[styles.txt, styles.heading]}>Ratings</Text>
        <View style={styles.details}>
        <Text style={[styles.txt, styles.txt2]}>Star given</Text>
        </View>
      </View>

    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt: {
    color: 'black',
    
  },
  heading: {
    fontSize: 28,
    marginLeft: 12,
    marginTop: 12
  },
  details: {
    backgroundColor: 'white',
    elevation: 4,
    fontSize: 20,
    margin: 10,
    paddingHorizontal: 30,
    padding:12


  },
  design :{
    
    marginTop:2,
    padding:12,
    flexDirection:'row',
    justifyContent:'space-between',
    
  },
  txt1 :{
    color:'black',
    paddingVertical:8,
    borderBottomWidth:0.2,
    margin:2
  },
  txt2:{
    
  }
})