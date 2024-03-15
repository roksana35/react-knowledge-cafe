

import './App.css'
import Header from './Components/Header/Header'

import Bookmark from './Components/Bookmark/Bookmark'
import Blogs from './Components/Blogs/Blogs'
import { useState } from 'react'


function App() {
  const [bookmarks,setBookmarks]=useState([]);
  const [readingtime,setReadingtime]=useState(0)

  const handleAddBookmark=blog=>{
    const newBookmarks=[...bookmarks,blog];
    setBookmarks(newBookmarks)
  }
  const handleMarkAsRead =time=>{
    console.log('time',time)
    const newTime= parseInt(readingtime)+parseInt(time);
    setReadingtime(newTime);
  }
  

  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddBookmark={handleAddBookmark} handleMarkAsRead={handleMarkAsRead} ></Blogs>
      <Bookmark bookmarks={bookmarks} readingtime={readingtime}></Bookmark>
      </div>
      
    </>
  )
}

export default App
