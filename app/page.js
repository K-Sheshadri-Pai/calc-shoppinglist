import Link from 'next/link';
import styles from "./page.module.css";

const HomePage = () => {

  return ( 
    <div>
      <h1 className={styles.head}>Welcome to the app !!</h1>
      <p className={styles.para}>Instruction : You have an option for a calculator and a shopping list.</p>
      <div className={styles.divbtn}>
        <button className={styles.btn}><Link href="/calculator" style={{ textDecoration: 'none', color: 'black'}}>To Calculator ➡️</Link></button>
        <button className={styles.btn}><Link href="/shoppingList" style={{ textDecoration: 'none' , color: 'black'}}>To Shopping List ➡️</Link></button>
      </div>
    </div>
  );
}
 
export default HomePage;