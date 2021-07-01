const steps = [
  {
    id: '1',
    message: "Morning Team Cactus, it's game day! Are you read to code?",
    trigger: '2'
  },
  {
    id: '2',
    options: [
      { value: 1, label: 'Hell yeah', trigger: '4' },
      { value: 2, label: 'Yeah na', trigger: '3' }
    ]
  },
  {
    id: '3',
    message: 'Ah no way, well no pressure. Take your time.',
    trigger: '1'
  },
  {
    id: '4',
    message: "Sweet as, let's get on the keys",
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

module.exports = { theme, steps }

/// /////////////////////////////////////////
/// //////add to file where component is used ////////////

//   import ChatBot from 'react-simple-chatbot'
//   import dialogue from './chat_dialogue'

// <ChatBot
// steps={dialogue}
// />

module.exports = steps
