import React,{ useState } from "react";



function CreateArea(props)
{
    const [inputText,setInputText]=useState({
        title:"",
        content:""
    });
    function handleChange(event){
        const {name,value}=event.target;
        setInputText(prevValue=>{
            return {
                ...prevValue,
                [name]:value
            };
        });
    }
    function handleClick(event){
        props.onAdd(inputText);
        event.preventDefault();
        
    }
    return(
<div class="inputArea">
<form>
   <input type="text" class="titleInputText" onChange={handleChange} name="title" value={inputText.title} placeholder="Title"/>
   <textarea class="contentInputText" onChange={handleChange} name="content" value={inputText.content} placeholder="Explain in a sentence" rows="5" cols="25"></textarea> 
   <button class="sub"onClick={handleClick}>Add</button>
   </form>
   </div>
    )


}
export default CreateArea;