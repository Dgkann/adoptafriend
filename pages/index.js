// pages/index.js
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const heroSlides = [
    {
      image: '/images/home/heroo1.jpeg',
      title: 'Welcome to Adopt A Friend',
      subtitle: 'Giving every animal a chance for a loving home'
    },
    {
      image: '/images/home/heroo2.jpeg',
      title: 'Find Your Perfect Companion',
      subtitle: 'Our pets are waiting to share their love with you'
    },
    {
      image: '/images/home/heroo3.jpeg',
      title: 'Make a Difference',
      subtitle: 'Help us create happy endings for our furry friends'
    }
  ];

  const features = [
    {
      icon: '🏠',
      title: 'Adopt a Pet',
      description: 'Find your perfect companion from our lovely pets',
      image: '/images/home/adoptt.jpeg',
      link: '/adopt'
    },
    {
      icon: '❤️',
      title: 'Support Us',
      description: 'Help us provide care for animals in need',
      image: '/images/home/supportus.jpeg',
      link: '/donation'
    },
    {
      icon: '🤝',
      title: 'Volunteer',
      description: 'Join our team and make a difference',
      image: '/images/home/volunter.jpeg',
      link: '/volunteer'
    }
  ];

  const pets = [
    {
      id: 1,
      name: 'Luna',
      image: '/images/pets/luna.jpeg',
      age: 2,
      type: 'Dog',
      breed: 'Golden Retriever'
    },
    {
      id: 2,
      name: 'Oliver',
      image: '/images/pets/oliver.jpeg',
      age: 1,
      type: 'Cat',
      breed: 'British Shorthair'
    },
    {
      id: 3,
      name: 'Max',
      image: '/images/pets/german.jpeg',
      age: 3,
      type: 'Dog',
      breed: 'German Shepherd'
    },
    {
      id: 4,
      name: 'Bella',
      image: '/images/pets/bella.jpeg',
      age: 1,
      type: 'Cat',
      breed: 'Persian'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.container}>
      {/* Hero Section with Slider */}
      <section className={styles.hero}>
        <div className={styles.heroSlider}>
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`${styles.heroSlide} ${activeSlide === index ? styles.active : ''}`}
            >
              <Image 
                src={slide.image}
                alt={slide.title}
                width={1920}
                height={1080}
                priority
                className={styles.heroImage}
              />
              <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>{slide.title}</h1>
                <p className={styles.heroSubtitle}>{slide.subtitle}</p>
                <Link href="/adopt" className={styles.ctaButton}>
                  Find Your Friend
                </Link>
              </div>
            </div>
          ))}
          <div className={styles.sliderDots}>
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${activeSlide === index ? styles.activeDot : ''}`}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className={styles.statistics}>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>0</span>
          <p>Animals Rescued</p>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>4</span>
          <p>Happy Adoptions</p>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>1</span>
          <p>Active Volunteers</p>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        {features.map((feature, index) => (
          <div key={index} className={styles.feature}>
            <div className={styles.featureIcon}>{feature.icon}</div>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
            <div className={styles.featureImageWrapper}>
              <Image 
                src={feature.image}
                alt={feature.title}
                width={300}
                height={200}
                className={styles.featureImage}
              />
            </div>
            <Link href={feature.link} className={styles.featureButton}>
              Learn More
            </Link>
          </div>
        ))}
      </section>

      {/* Mission Section with Parallax */}
      <section className={styles.mission}>
        <div className={styles.missionContent}>
          <h2>Our Mission</h2>
          <p>We are dedicated to providing shelter, care, and love to abandoned animals while finding them their forever homes.</p>
          <div className={styles.missionStats}>
            <div className={styles.missionStat}>
              <span>24/7</span>
              <p>Care</p>
            </div>
            <div className={styles.missionStat}>
              <span>1</span>
              <p>Year Experience</p>
            </div>
            <div className={styles.missionStat}>
              <span>95%</span>
              <p>Dedication</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Pets Section */}
      <section className={styles.latestPets}>
        <h2>Meet Our Latest Friends</h2>
        <div className={styles.petsGrid}>
          {pets.map((pet) => (
            <div key={pet.id} className={styles.petCard}>
              <div className={styles.petImageWrapper}>
                <Image 
                  src={pet.image}
                  alt={pet.name}
                  width={300}
                  height={300}
                  className={styles.petImage}
                />
                <div className={styles.petType}>{pet.type}</div>
              </div>
              <div className={styles.petInfo}>
                <h3>{pet.name}</h3>
                <p>{pet.breed}</p>
                <p>Age: {pet.age} {pet.age === 1 ? 'year' : 'years'}</p>
                <Link href="/adopt" className={styles.learnMore}>
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>Ready to Make a Difference?</h2>
          <p>Visit us today and meet your future companion!</p>
          <div className={styles.ctaButtons}>
            <Link href="/adopt" className={styles.ctaButton}>
              Adopt Now
            </Link>
            <Link href="/donation" className={`${styles.ctaButton} ${styles.secondary}`}>
              Make a Donation
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={styles.newsletter}>
        <div className={styles.newsletterContent}>
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for updates on new pets and shelter news</p>
          <form className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.newsletterInput}
            />
            <button type="submit" className={styles.newsletterButton}>
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}