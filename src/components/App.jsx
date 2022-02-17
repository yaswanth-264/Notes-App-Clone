import React,{ useState } from "react";
import Header from "./Header.jsx";
import CreateArea from "./CreateArea.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx"


function App()
{
    const [notes,setNotes]=useState([]);
    function addNote(currNote)
    {
        setNotes(prevValue=>{
            return [...prevValue,currNote];
        });
       
    }
    function onDelete(id){
        console.log("Delete was triggered")
        setNotes(prevValue=>{
           return prevValue.filter((item,index)=>{
                return index!==id;
            })
        } )
    }

    return(
        <div>
   <Header />
   <CreateArea  onAdd={addNote}/>
   {notes.map( (info,index) => 
   {
      return <Note key={index} id={index} title={info.title} content={info.content} onDel={onDelete}/> })}
   <Footer />
   </div>
    )


}

export default App;