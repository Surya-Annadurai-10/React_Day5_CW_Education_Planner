import { useEffect, useState } from 'react';
import styles from './MainContent.module.css'
import Card from "../Card/Card";


const MainContent = () =>{
  const [id , setId] = useState(1);
    const [subject , setSubject] = useState("");
    const [hours , setHours] = useState("");
    const [arr , setArr] = useState(JSON.parse(localStorage.getItem("subjectData")) == null ? [] : JSON.parse(localStorage.getItem("subjectData"))   );
   
   const onSubject = (e) =>{
    setSubject(e.target.value);
   }
   const onHour = (e) =>{
    setHours(e.target.value);
    
   }

   console.log(arr);
   if(localStorage.getItem("data") == null){
    let data = localStorage.setItem("subjectData" , JSON.stringify(arr));
     
   }else{
     let data = JSON.parse(localStorage.getItem("subjectData"));
     data.push({
       id : id,
       subjectName : subject,
       hourNum : hours
      
   });
   localStorage.setItem("subjectData" , data);
   }



   const onBtnClick = () =>{
    

       setArr([...arr , {
        id : id,
        subjectName : subject,
        hourNum : hours
       
    }]);
        setId(id + 1);
        setHours("");
        setSubject("");
      
    
   }

    return (
        <>
        <div className={styles.main_container}>
        <div className={styles.container}>
          <div className={styles.input_container}>
            <input placeholder={"Enter Subject"}  value={subject} onChange={onSubject} className={styles.subject_In} type="text" />
            <input  placeholder={"Enter Hour"}  value={hours} onChange={onHour} className={styles.hours_In} type="number" />
            <div className={styles.button_section}>
                <div className={styles.inner}></div>
                <button onClick={onBtnClick}>Add</button>
            </div>
          </div>
        
         </div>
         <div className={styles.card_container}>
            {
              arr.map((val) =>{
                return  <Card key= {val.id}  {...val} />
              })
            }
          </div>
        </div>
        </>
    )
}

export default MainContent;
