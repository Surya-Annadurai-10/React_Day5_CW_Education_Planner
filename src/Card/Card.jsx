import { useState } from 'react';
import styles from './Card.module.css';

const  Card = (props) =>{
   const [count , setCount] = useState(Number(props.hourNum))
   const [isVisible , setIsVisible] = useState(false);

   const onAdd = ()=>{
      setCount(count+ 1);
   }  

   const onSub = ()=>{
      count == 0 ? setIsVisible(true) : setCount(count - 1);
   }  

  
  console.log(props.subjectName , props.id , props.hourNum)
     return (
        <>
          {!isVisible ? <div className={styles.container_card} >
            <div className={styles.subjects}><span className={styles.span}>Subject :</span> {props.subjectName}</div>
            <div className={styles.hours}><span  className={styles.span}>Hours :</span>{count}hr </div>
            <div className={styles.buttons}>
                <button  className={styles.add}  onClick={onAdd}> +</button>
                <button className={styles.minus}  onClick={onSub}>-</button>
            </div>
         </div> : ""}
        </>
     )   
}

export default Card;