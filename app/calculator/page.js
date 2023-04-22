'use client';
import Link from "next/link";
import styles from "./calc.module.css";
import React, {useState} from "react";

const CalcPage = () => {

    const [result, setResult]=useState("");

    const clickHandler = (event) => {
      setResult(result.concat(event.target.value));
    }

    const clearHandler = () => {
      setResult("");
    }

    const calculateHandler = () => {
      setResult(eval(result).toString());
    }

    return ( 
      <div className={styles.maindiv}>
        <h2 className={styles.head}>Start calculating now !!</h2>
        <div className={styles.calc}>
          <input type="text" placeholder="0" className={styles.answer} value={result}/>
          <input type="button" value="9" className={styles.button} onClick={clickHandler}/>
          <input type="button" value="8" className={styles.button} onClick={clickHandler}/>
          <input type="button" value="7" className={styles.button} onClick={clickHandler}/>
          <input type="button" value="6" className={styles.button} onClick={clickHandler}/>
          <input type="button" value="5" className={styles.button} onClick={clickHandler}/>
          <input type="button" value="4" className={styles.button} onClick={clickHandler}/>
          <input type="button" value="3" className={styles.button} onClick={clickHandler}/>
          <input type="button" value="2" className={styles.button} onClick={clickHandler}/>
          <input type="button" value="1" className={styles.button} onClick={clickHandler}/>
          <input type="button" value="0" className={styles.button} onClick={clickHandler}/>
          <input type="button" value="." className={styles.button} onClick={clickHandler}/>
          <input type="button" value="+" className={styles.button} onClick={clickHandler}/>
          <input type="button" value="-" className={styles.button} onClick={clickHandler}/>
          <input type="button" value="*" className={styles.button} onClick={clickHandler}/>
          <input type="button" value="/" className={styles.button} onClick={clickHandler}/>
          <input type="button" value="%" className={styles.button} onClick={clickHandler}/>
          <input type="button" value="clear" className={styles.button2} onClick={clearHandler}/>
          <input type="button" value="=" className={styles.button3} onClick={calculateHandler}/>
        </div>
        <div className={styles.divbtn}>
          <button className={styles.goback}><Link href="/" style={{ textDecoration: 'none' , color: 'black'}} >◀️ Back to home</Link></button>
        </div>
      </div>
    );
  }
   
export default CalcPage;