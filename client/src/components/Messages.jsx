import React from 'react'

function Messages({message}) {
  console.log(message.username)
  return (
    <div clasName="message">
      <p><span>{message.username}</span>: {message.message}</p>
    </div>
  )
}

export default Messages
