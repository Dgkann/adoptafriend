// pages/adoption-success.js
'use client';
import { useEffect, useState } from 'react';
import styles from '@/styles/AdoptionSuccess.module.css';
import Link from 'next/link';

export default function AdoptionSuccess() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.successCard} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.iconWrapper}>
          <div className={`${styles.checkmark} ${isVisible ? styles.visible : ''}`}>
            ✓
          </div>
        </div>

        <h1 className={`${styles.title} ${isVisible ? styles.visible : ''}`}>
          Application Submitted Successfully!
        </h1>

        <p className={`${styles.message} ${isVisible ? styles.visible : ''}`}>
          Thank you for taking the first step towards giving a pet a forever home.
          We'll review your application and contact you within 2-3 business days.
        </p>

        <div className={`${styles.nextSteps} ${isVisible ? styles.visible : ''}`}>
          <h2>Next Steps:</h2>
          <ul>
            <li>We'll review your application</li>
            <li>Schedule a meet and greet with your chosen pet</li>
            <li>Complete the adoption process</li>
            <li>Welcome your new family member home!</li>
          </ul>
        </div>

        <div className={styles.buttonGroup}>
          <div className={`${styles.buttonWrapper} ${isVisible ? styles.visible : ''}`}>
            <Link href="/adopt" className={styles.button}>
              View More Pets
            </Link>
          </div>
          <div className={`${styles.buttonWrapper} ${isVisible ? styles.visible : ''}`}>
            <Link href="/" className={`${styles.button} ${styles.secondary}`}>
              Return Home
            </Link>
          </div>
        </div>

        <div className={`${styles.contactInfo} ${isVisible ? styles.visible : ''}`}>
          <p>Questions? Contact us at:</p>
          <a href="tel:+1234567890" className={styles.contactLink}>
            (123) 456-7890
          </a>
          <a href="mailto:adopt@adoptafriend.com" className={styles.contactLink}>
            adopt@adoptafriend.com
          </a>
        </div>
      </div>

      <div className={styles.confetti}>
        {[...Array(50)].map((_, i) => (
          <div 
            key={i} 
            className={styles.confettiPiece}
            style={{
              '--delay': `${Math.random() * 5}s`,
              '--x': `${Math.random() * 100}vw`,
              '--rotation': `${Math.random() * 360}deg`,
            }}
          />
        ))}
      </div>
    </div>
  );
}