// import profile_name from './'

const steps = [
  {
    id: '1',
    delay: 7000,
    message: 'Hi {profile_name}, what is your favourite animal?',
    trigger: '2'
  },
  {
    id: '2',
    user: true,
    trigger: '3'
  },
  {
    id: '3',
    message: 'Wow, {previousValue}s are my favourite animal too! We have so much in common',
    trigger: 4
  },
  {
    id: '4',
    delay: 4000,
    message: 'Would you like to go to the discotheque?',
    trigger: '5'
  },
  {
    id: '5',
    options: [
      { value: 1, label: 'Yes I love to dance', trigger: '6' },
      { value: 2, label: "Yeah na, I'm washing my hair", trigger: '7' },
      { value: 3, label: "Maybe, I'm not sure about you yet", trigger: '8' }
    ]
  },
  {
    id: '6',
    message: 'Great, see you at 7pm :-)',
    end: true
  },
  {
    id: '7',
    message: 'No problem, have a nice life :-(',
    end: true

  },
  {
    id: '8',
    message: 'Ok, take your time, let me know',
    end: true
  }
]

// all available props
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica',
  headerBgColor: '#27368b',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a'
}

/// /////////////////////////////////////////
/// //////add to file where component is used ////////////

// import ChatBot from 'react-simple-chatbot'
// import { steps, theme } from './chat_dialogue'
// import { ThemeProvider } from 'styled-components'

// <ThemeProvider theme={theme}>
//  <ChatBot steps={steps} />;
// </ThemeProvider>

module.exports = { steps, theme }
