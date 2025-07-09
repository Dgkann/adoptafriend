// components/Layout/Footer.js
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; 2024 Adopt a Friend. All rights reserved.</p>
        <div className={styles.contact}>
          <p>Contact: info@adoptafriend.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;