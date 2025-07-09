// pages/whats-going-on.js
import { useState } from 'react';
import styles from '../styles/WhatsGoingOn.module.css';

export default function WhatsGoingOn() {
  const [activeCategory, setActiveCategory] = useState('all');

  const news = [
    {
      id: 1,
      title: "Shelter Expansion Project",
      date: "January 2, 2025",
      content: "Construction begins on new cat wing to help more felines in need.",
      image: '/images/news/shelter.jpeg',
      type: "update"
    },
    {
      id: 2,
      title: "Monthly Success Stories",
      date: "January 14, 2024",
      content: "15 pets found their forever homes this month! Read their stories.",
      image: '/images/news/adoption.jpeg',
      type: "success"
    },
    {
    id: 3,
    title: "New Adoption Event",
    date: "January 20, 2024",
    content: "Join us this weekend for an adoption event. Meet your future furry friend!",
    image: '/images/news/event.jpeg',
    type: "event"
  },
  {
    id: 4,
    title: "Volunteer Training Session",
    date: "January 18, 2024",
    content: "We are holding a training session for new volunteers. Come and help us care for our animals.",
    image: '/images/news/event2.jpeg',
    type: "event"
  },
  {
    id: 5,
    title: "Donations Needed for Shelter Supplies",
    date: "January 16, 2024",
    content: "We are in need of donations for food and supplies to keep our animals healthy and happy.",
    image: '/images/news/update.jpeg',
    type: "update"
  }
  ];

  const updates = [
    {
      id: 1,
      title: "Urgent: Winter Supplies Needed",
      date: "January 16, 2024",
      content: "We're collecting blankets and warm bedding for our shelter animals.",
      priority: "high"
    }
  ];

  return (
    <div className={styles.container}>
      {/* Category Filter */}
      <div className={styles.filterButtons}>
        <button 
          className={`${styles.filterBtn} ${activeCategory === 'all' ? styles.active : ''}`}
          onClick={() => setActiveCategory('all')}
        >
          All
        </button>
        <button 
          className={`${styles.filterBtn} ${activeCategory === 'adoption' ? styles.active : ''}`}
          onClick={() => setActiveCategory('adoption')}
        >
          Adoption
        </button>
        <button 
          className={`${styles.filterBtn} ${activeCategory === 'education' ? styles.active : ''}`}
          onClick={() => setActiveCategory('education')}
        >
          Education
        </button>
        <button 
          className={`${styles.filterBtn} ${activeCategory === 'volunteer' ? styles.active : ''}`}
          onClick={() => setActiveCategory('volunteer')}
        >
          Volunteer
        </button>
      </div>

      {/* Events Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Upcoming Events
          <span className={styles.subtitle}>Join us at these upcoming events</span>
        </h2>
      </section>

      {/* News Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Latest News
          <span className={styles.subtitle}>Stay updated with shelter news</span>
        </h2>
        <div className={styles.newsList}>
          {news.map((item) => (
            <div key={item.id} className={styles.newsCard}>
              <div className={styles.newsImage}>
                <img src={item.image} alt={item.title} />
                <span className={`${styles.newsTag} ${styles[item.type]}`}>
                  {item.type}
                </span>
              </div>
              <div className={styles.newsContent}>
                <span className={styles.date}>{item.date}</span>
                <h3>{item.title}</h3>
                <p className={styles.content}>{item.content}</p>
                <button className={styles.readMoreBtn}>Read More</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Updates Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Quick Updates
          <span className={styles.subtitle}>Important announcements</span>
        </h2>
        <div className={styles.updatesList}>
          {updates.map((update) => (
            <div key={update.id} className={`${styles.updateCard} ${styles[update.priority]}`}>
              <div className={styles.updateContent}>
                <span className={styles.date}>{update.date}</span>
                <h3>{update.title}</h3>
                <p>{update.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}