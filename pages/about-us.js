// pages/about-us.js
import styles from '../styles/AboutUs.module.css';

export default function AboutUs() {
  const team = [
    {
      id: 1,
      name: "Dogukan Yurtturk",
      role: "Director of Shelter",
      image: "images/dgkann.jpeg",
      description: " 1 year experience in animal welfare"
    },
    {
      id: 2,
      name: "Deniz Beril Pekin",
      role: "Veterinarian",
      image: "images/veteriner.jpeg",
      description: "Specialized in emergency animal care"
    },

  ];

  const stats = [
    { id: 1, number: "0", label: "Animals Rescued" },
    { id: 2, number: "4", label: "Successful Adoptions" },
    { id: 3, number: "1", label: "Volunteers" },
    { id: 4, number: "1", label: "Years of Service" }
  ];

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>About Our Shelter</h1>
        <p>Dedicated to giving every animal a second chance at happiness</p>
      </section>

      <section className={styles.mission}>
        <div className={styles.missionContent}>
          <h2>Our Mission</h2>
          <p>We strive to provide a safe haven for abandoned and neglected animals, 
             offering them care, love, and the opportunity to find their forever homes. 
             Through community engagement and education, we work to create a world where 
             every animal is valued and protected.</p>
        </div>
      </section>

      <section className={styles.stats}>
        {stats.map((stat) => (
          <div key={stat.id} className={styles.statItem}>
            <h3>{stat.number}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </section>

      <section className={styles.team}>
        <h2>Our Team</h2>
        <div className={styles.teamGrid}>
          {team.map((member) => (
            <div key={member.id} className={styles.teamMember}>
              <div className={styles.memberImage}>
                <img src={member.image} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <h4>{member.role}</h4>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.values}>
        <h2>Our Values</h2>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <h3>Compassion</h3>
            <p>We treat every animal with love and care</p>
          </div>
          <div className={styles.valueItem}>
            <h3>Dedication</h3>
            <p>Committed to the wellbeing of all animals</p>
          </div>
          <div className={styles.valueItem}>
            <h3>Community</h3>
            <p>Working together to make a difference</p>
          </div>
        </div>
      </section>
    </div>
  );
}