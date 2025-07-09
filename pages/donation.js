// pages/donation.js
'use client';
import { useState } from 'react';
import styles from '../styles/Donation.module.css';

export default function Donation() {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');

  const handleDonate = (e) => {
    e.preventDefault();
    // Add payment processing logic here
    alert('Thank you for your donation!');
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <h1>Make a Difference Today</h1>
        <p>Your donation helps us save and care for animals in need</p>
      </div>

      {/* Donation Section */}
      <div className={styles.donationSection}>
        <div className={styles.donationCard}>
          <h2>Choose Amount</h2>
          
          <div className={styles.amounts}>
            {[25, 50, 100, 200].map((amount) => (
              <button
                key={amount}
                className={`${styles.amountBtn} ${selectedAmount === amount ? styles.selected : ''}`}
                onClick={() => {
                  setSelectedAmount(amount);
                  setCustomAmount('');
                }}
              >
                ${amount}
              </button>
            ))}
          </div>

          <div className={styles.customAmount}>
            <input
              type="number"
              placeholder="Enter custom amount"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount(null);
              }}
              className={styles.customInput}
            />
          </div>

          <button 
            className={styles.donateBtn}
            onClick={handleDonate}
            disabled={!selectedAmount && !customAmount}
          >
            Donate Now
          </button>

          <p className={styles.secureNote}>
            🔒 Secure donation
          </p>
        </div>

        {/* Impact Card */}
        <div className={styles.impactCard}>
          <h2>Your Impact</h2>
          <ul className={styles.impactList}>
            <li>
              <span>🍽️</span>
              <p>Provides food and shelter</p>
            </li>
            <li>
              <span>💉</span>
              <p>Supports medical care and vaccinations</p>
            </li>
            <li>
              <span>🏥</span>
              <p>Enables rescue operations</p>
            </li>
            <li>
              <span>🏠</span>
              <p>Maintains our shelter facilities</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Bank Transfer Section */}
      <div className={styles.bankSection}>
        <h2>Bank Transfer Details</h2>
        <div className={styles.bankDetails}>
          <p>Bank Name: Ziraat Bank</p>
          <p>Account Number: XXXX-XXXX-XXXX</p>
          <p>SWIFT Code: XXXXXX</p>
          <p>Account Name: Adopt A Friend</p>
        </div>
      </div>
    </div>
  );
}