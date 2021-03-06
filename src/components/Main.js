import React, {useState, useEffect} from 'react';
 import '../App.css';

 const Main = (councilsInfo) => {
     const [inputText, setInputText] = useState("");
     const [message, setMessage] = useState("");
     const [submits, setSubmits] = useState(0);

     const url = 'https://api.postcodes.io/postcodes/';

     useEffect(() => {
     fetch(url + inputText)
     .then(results => results.json())
     .then(data => {handleReply(data)})}, [submits]);


     const handleSubmit = (e) => {
         e.preventDefault();
         if (inputText.trim().length) {
         setMessage("Searching...");
         setSubmits(submits+1);
         }
         else {
             setInputText("")
         }
     }

     const possessive = (myString) => {
         return (
             (myString[myString.length - 1] !== 's') ?  "'s" : "'" 
         );
     } 

     const generateMessage = (council, link) => (
         <>
             <p>
                 {council}{possessive(council)} Dignity Period service is not yet available online. 
             </p>
             <p>
                 For more information contact the T.S.I. via their <a href={link}>home page.</a>      
             </p>
         </>
     )



     const handleReply = function(reply) {
         if (reply.status === 404) {setMessage(<p>Not a valid postcode!</p>)}
         if (reply.status === 200) {
             if (reply.result.country === "Scotland"){
                 let council = councilsInfo.councilsInfo[reply.result.admin_district];
                 if (council.website) {
                     window.location.href = council.webAddress;
                 }
                 else {
                     let link = councilsInfo.councilsInfo[reply.result.admin_district]['alt_link'];
                     setMessage(generateMessage(council['tsi'], link));
                 }

             }
             else {setMessage(<p>This is not in Scotland.</p>)}
         }
     }

     return (
         <>
             <header>
                 <h1>Dignity Period Scotland</h1>
             </header>
             <div className='container'>
                 <div>
                     <form onSubmit={handleSubmit}>
                         <div>
                             <label className='label'>
                                 Enter your postcode:
                             </label>
                         </div>
                         <input type="text" onChange={(e)=>setInputText(e.target.value)} value={inputText} className='input' placeholder='Postcode' maxLength={8} autoFocus required/>
                         <button type='submit' className='submit' >                      
                                 GO!
                         </button>
                     </form>
                 </div>
                 <div className='message'>
                         {message}   
                 </div>

             </div>
         </>
     )
 }

 export default Main;
