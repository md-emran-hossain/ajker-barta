import React, { useEffect, useState } from 'react';

const Test = ({ socket }) => {
  const [name, setName] = useState('')
  const [heading, setHeading] = useState('')
  console.log(socket)
  const send = (e) => {
    e.preventDefault()
    socket.emit('sendNotification', e.target.value)
    console.log('clicked')
  }
  return (
    <div>
      <form>
        <input className='border-2' onBlur={(e) => setName(e.target.value)} type="text" />
        <input onChange={send} className='border-2' onBlur={(e) => setHeading(e.target.value)} type="text" />
        <input type="submit" value="test" />
      </form>
    </div>
  );
};

export default Test;