import { useEffect, useState } from 'react';
import styles from './MainContent.module.css'
import Card from "../Card/Card";


const MainContent = () =>{
    const [subject , setSubject] = useState("");
    const [hours , setHours] = useState("");
   
   const onSubject = (e) =>{
    setSubject(e.target.value);
   }
   const onHour = (e) =>{
    setHours(e.target.value);
    
   }

   const onBtnClick = () =>{
        arr.push ({
            subjectName : subject.toLowerCase(),
            hoursNum : hours
        });
        
        console.log(arr);
        setHours("");
        setSubject("");
    
   }

    return (
        <>
         <div className={styles.container}>
          <div className={styles.input_container}>
            <input  value={subject} onChange={onSubject} className={styles.subject_In} type="text" />
            <input value={hours} onChange={onHour} className={styles.hours_In} type="number" />
            <div className={styles.button_section}>
                <div className={styles.inner}></div>
                <button onClick={onBtnClick}>Add</button>
            </div>
          </div>
          <div>
            <Card subjectName ={ subject} HoursNum = {hours} />
          </div>
         </div>
        </>
    )
}

export default MainContent;