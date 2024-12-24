import Header from "../Header/Header";
import MainContent from "../MainContent/MainContent";
import styles from './myComponents.module.css'

const MyComponents = () =>{
return (
    <>
    <div className={styles.main}>
    <Header />
    <MainContent />
    </div>
  
    </>
)
}

export default MyComponents;