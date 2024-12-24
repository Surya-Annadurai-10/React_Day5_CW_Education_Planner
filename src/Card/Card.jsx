import styles from './Card.module.css';

const  Card = (props) =>{
     return (
        <>
         <div>
            <div className={styles.subjects}>{props.subjectName}</div>
            <div className={styles.hours}>{props.HoursNum}</div>
            <div className={styles.buttons}>
                <button>+</button>
                <button>-</button>
            </div>
         </div>
        </>
     )   
}

export default Card;