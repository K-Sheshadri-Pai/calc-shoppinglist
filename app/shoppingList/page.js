'use client';
import Link from "next/link";
import React, {useState} from 'react';
import styles from "./shopp.module.css";

const ShoppingPage = () => {

  const [items, setItems] = useState([]);

	const [inputValue, setInputValue] = useState('');

	const handleAddButtonClick = () => {
    if (inputValue.length === 0){
      alert('Please add an item before clicking add button !!');
    }else{
      const newItem = {
        itemName: inputValue,
        quantity: 1,
      };
      const newItems = [...items, newItem];
      setItems(newItems);
      setInputValue('');
    }
	};

	const handleQuantityIncrease = (index) => {
		const newItems = [...items];
		newItems[index].quantity++;
		setItems(newItems);
	};

	const handleQuantityDecrease = (index) => {
		const newItems = [...items];
    if (newItems[index].quantity > 1) {
		newItems[index].quantity--;
    } else {
      alert('Quantity should be >= 1');
    }
		setItems(newItems);
	};

  const deletebtnHandler = (index) => {
    const filtered=items.filter((item, i) => i === index ? "" : item)
    setItems(filtered);
  }

    return ( 
      <div className={styles.maindiv}>
        <h2 className={styles.head}>Start adding items now !!</h2>

			  <div className={styles.mainContainer}>
          <div className={styles.additembox}>
            <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className={styles.additeminput} placeholder='Add an item ...' />
            <button className={styles.addbtn} onClick={() => handleAddButtonClick()}> add </button>
          </div>

          <div className={styles.itemlist}>
            {items.map((item, index) => (

              <div className={styles.itemcontainer}>
                <div>
                  <span>{item.itemName}</span>
                </div>
                <div>
                  <button className={styles.decbtn} onClick={() => handleQuantityDecrease(index)}> ➖ </button>
                  <span> {item.quantity} </span>
                  <button className={styles.incbtn} onClick={() => handleQuantityIncrease(index)}> ➕ </button>
                  <button className={styles.deletebtn} onClick={() => deletebtnHandler(index)}> Delete </button>
                </div>
              </div>

            ))}
          </div>

			  </div>

        <div className={styles.divbtn}>
          <button className={styles.goback}><Link href="/" style={{ textDecoration: 'none' , color: 'black'}}>◀️ Back to Home</Link></button>
        </div>
		  </div>

    );
  }
   
  export default ShoppingPage;