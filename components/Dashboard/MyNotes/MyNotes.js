import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2'

const MyNotes = () => {
  const { user } = useAuth()
  const [notes, setNotes] = useState([])
  useEffect(() => {
    if (user.email) {
      fetch(`/api/users/note?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
          if (data.notes) {
            setNotes(data.notes)
          } else {
            setNotes([])
          }
        })
    }
  }, [user.email])
  const handleDeleteNote = (title, selectedText) => {
    fetch(`/api/users/notedelete?email=${user.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ title, selectedText })
    })
      .then(res => res.json())
      .then(result => {
        if (result.modifiedCount === 1) {
          const remaining = notes.filter(note => note.title !== title && note.selectedText !== selectedText)
          setNotes(remaining)
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: `Your Note Deleted`,
          })
        }
      })
  }
  if (!notes.length) {
    return <div className='text-2xl font-semibold text-red-500'>You have no note yet!!!</div>
  }
  return (
    <div className='container'>
      <div className="grid md:grid-cols-2 gap-4">
        {
          notes.map(note => <div className='p-4 shadow-md' key={Math.floor(Math.random() * 1000000)}>
            <h1 className='text-2xl font-serif font-semibold'>{note?.title}</h1>
            <p className='text-md py-3'>{note?.selectedText}</p>
            <button onClick={() => handleDeleteNote(note?.title, note?.selectedText)} className='bg-blue-500 text-white py-1.5 px-2 rounded-sm text-sm'>Remove</button>
          </div>)
        }
      </div>
    </div>
  );
};

export default MyNotes;