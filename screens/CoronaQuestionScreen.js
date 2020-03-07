import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Styles from '../constants/Styles';
import Colors from '../constants/Colors';

const questions = [
  {
    question: "Do you have a fever?",
    id: 'fever',
    order: 0,
    choices: [
      { text: 'Yes', value: true },
      { text: 'No', value: false }
    ],
  },
  {
    question: "How long has this been troubling you?",
    id: 'fever',
    order: 1,
    choices: [
      { text: "Less than one day", value: 0},
      { text: "One day to one week", value: 1},
      { text: "One week to one month", value: 2}
    ]
  },
  {
    question: "How often do you wear a mask when going out?",
    id: 'mask',
    order: 0,
    choices: [
      { text: "I don't wear mask", value: 0},
      { text: "Occasionally", value: 1},
      { text: "Frequently", value: 2}
    ]
  },
  {
    question: "How often do you sanitize your hand?",
    id: 'sanitize',
    order: 0,
    choices: [
      { text: "I don't know", value: 0},
      { text: "1 - 5 times a day", value: 1},
      { text: "More than 5 times a day", value: 2}
    ]
  },
  {
    question: "Where are you located?",
    id: 'location',
    order: 0,
    choices: [
      { text: "I don't wish to give my location", value: false},
      { text: "Use my current location", value: true}
    ]
  },
]

export default class CoronaQuestionScreen extends React.Component {
  state = {
    question: questions[0],
    questionIndex: 0,
    selected: {
      "fever": 0,
      "mask": 0,
      "sanitize": 0,
      "location": 1,
    }
  }

  nextChoice = (value) => () => {
    let { questionIndex } = this.state;

    if(questionIndex >= questions.length - 1){
      this.props.navigation.navigate('CoronaResult');
      return;
    }

    if(questions[++questionIndex].order > 0 && value === false){
      questionIndex++;
    }
    this.setState({questionIndex, question: questions[questionIndex]})
  }

  render(){
    return (
      <View style={styles.container}> 
        <Image source={require('../assets/images/icon.png')} style={styles.logo}></Image>
        <Text
          style={styles.introText}>
            {this.state.question.question}
          </Text>
          { this.state.question.choices.map( choice => {
            return (
              <TouchableOpacity onPress={this.nextChoice(choice.value)} style={[Styles.roundedButton, Styles.outlineButton, styles.buttonMargin]}>
                <Text style={Styles.outlineButtonText}>{choice.text}</Text>
              </TouchableOpacity>
            )
          })}
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  introText: {
    color: Colors.darkColor,
    paddingHorizontal: 40,
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 40,
  },
  logo: {
    width: 150,
    resizeMode: 'contain',
    height: 150,
    marginTop: 30,
  },
  buttonMargin: {
    marginBottom: 20
  }
});
