// pages/notification.js
'use client';
import { useState } from 'react';
import styles from '../styles/Notification.module.css';

export default function Notification() {
  const [filter, setFilter] = useState('all');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Pet Arrival",
      message: "We've welcomed 3 new puppies to our shelter! Come visit them this weekend.",
      date: "2024-12-24",
      priority: "high",
      category: "arrival",
      isRead: false
    },
    {
      id: 2,
      title: "Vaccination Drive",
      message: "Free vaccination camp this weekend. Bring your pets for health checkups and vaccinations.",
      date: "2025-01-14",
      priority: "medium",
      category: "event",
      isRead: false
    },
    {
      id: 3,
      title: "Adoption Success",
      message: "5 cats found their forever homes this week. Thank you to all our amazing adopters!",
      date: "2025-01-13",
      priority: "normal",
      category: "success",
      isRead: true
    },
    {
      id: 4,
      title: "Emergency Appeal",
      message: "We need urgent supplies for rescued animals. Any help is appreciated.",
      date: "2025-01-12",
      priority: "high",
      category: "emergency",
      isRead: false
    }
  ]);

  const handleMarkAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, isRead: true } : notif
    ));
  };

  const getFilteredNotifications = () => {
    if (filter === 'all') return notifications;
    if (filter === 'unread') return notifications.filter(n => !n.isRead);
    return notifications.filter(n => n.priority === filter);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Notifications</h1>
        <div className={styles.filters}>
          <button 
            className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`${styles.filterBtn} ${filter === 'unread' ? styles.active : ''}`}
            onClick={() => setFilter('unread')}
          >
            Unread
          </button>
          <button 
            className={`${styles.filterBtn} ${filter === 'high' ? styles.active : ''}`}
            onClick={() => setFilter('high')}
          >
            High Priority
          </button>
        </div>
      </div>
      
      <div className={styles.notificationList}>
        {getFilteredNotifications().map((notification) => (
          <div 
            key={notification.id} 
            className={`${styles.notificationCard} ${styles[notification.priority]} ${notification.isRead ? styles.read : ''}`}
            onClick={() => handleMarkAsRead(notification.id)}
          >
            <div className={styles.notificationHeader}>
              <div className={styles.titleWrapper}>
                <span className={`${styles.categoryBadge} ${styles[notification.category]}`}>
                  {notification.category}
                </span>
                <h3>{notification.title}</h3>
                {!notification.isRead && <span className={styles.unreadDot}></span>}
              </div>
              <span className={styles.date}>{formatDate(notification.date)}</span>
            </div>
            <p className={styles.message}>{notification.message}</p>
            <div className={styles.notificationFooter}>
              <span className={`${styles.priorityBadge} ${styles[notification.priority]}`}>
                {notification.priority} priority
              </span>
              {!notification.isRead && (
                <button 
                  className={styles.markReadBtn}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMarkAsRead(notification.id);
                  }}
                >
                  Mark as read
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}