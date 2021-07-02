const steps = [
  {
    id: '1',
    message: "Hey, how u doin'?",
    trigger: '2'
  },
  {
    id: '2',
    options: [
      { value: 1, label: 'Great, thanks', trigger: '4' },
      { value: 2, label: '...Meh', trigger: '3' }
    ]
  },
  {
    id: '3',
    message: 'Oh no, what wrong?',
    trigger: '1'
  },
  {
    id: '4',
    message: 'Sweet as',
    trigger: '1'
  },
  {
    id: '5',
    message: 'Sweet as',
    end: true
  }
]

// all available props
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
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

// B:hey how's it going?
// U: options 1. yeah okay, yeah na
// U: how's your day going?
// B: good, I'm eating pancakes
