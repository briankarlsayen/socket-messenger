import React, {useState} from 'react'
import Messages from './Messages'

function Room() {
  const username = "Budoy";
  const id = "123456"
  const [messageText, setMessageText] = useState("")
  const [ messages, setMessages ] = useState([{
      id: id,
      username: username,
      message: "Ako budoy"
    }]
  )

  const sendMessageHandler = (e) => {
    e.preventDefault()
    const msgFormat = {
      id: id,
      username: username,
      message: messageText
    }
    let newMsg = [...messages]
    newMsg.push(msgFormat)
    setMessages(newMsg)
    setMessageText('')
  }
  return (
    <div className="room">
      <h1>Messages</h1>
      {
        messages.map(message => (
          <Messages message={message} />    
      ))
      }
      <form onSubmit={(e) => sendMessageHandler(e)} className="room-form">
        <label>Message</label>
        <input type="text" className="roomMessage-input" value={messageText} onChange={e => setMessageText(e.target.value)} />
        <button type="submit" className="roomMessage-button">Send</button>
        {/* <label for="room-label">Room</label>
        <input type="text" id="roomName-input" />
        <button type="button" id="roomName-button">Join</button> */}
      </form>
    </div>
  )
}

export default Room
