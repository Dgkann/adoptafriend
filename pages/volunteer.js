// pages/volunteer.js
'use client';
import { useState } from 'react';
import styles from '../styles/Volunteer.module.css';
import Image from 'next/image';

const VolunteerPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    availability: '',
    experience: '',
    interests: [],
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const volunteerOpportunities = [
    {
      title: 'Animal Care',
      description: 'Help with feeding, grooming, and exercising our animals',
      icon: '🐾',
      image: '/images/volunteer/animal_care.jpeg'
    },
    {
      title: 'Event Support',
      description: 'Assist at adoption events and fundraisers',
      icon: '🎪',
      image: '/images/volunteer/event.jpeg'
    },
    {
      title: 'Administrative',
      description: 'Help with office work and organization',
      icon: '📝',
      image: '/images/volunteer/admin.jpeg'
    },
    {
      title: 'Photography',
      description: 'Take photos of our animals for adoption profiles',
      icon: '📸',
      image: '/images/volunteer/photo.jpeg'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, value]
        : prev.interests.filter(interest => interest !== value)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setShowThankYou(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setShowThankYou(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        age: '',
        availability: '',
        experience: '',
        interests: [],
        message: ''
      });
    }, 3000);
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Volunteer With Us</h1>
          <p>Make a difference in the lives of animals in need</p>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className={styles.whyVolunteer}>
        <h2>Why Volunteer?</h2>
        <div className={styles.reasonsGrid}>
          <div className={styles.reason}>
            <div className={styles.reasonIcon}>💝</div>
            <h3>Make a Difference</h3>
            <p>Help animals find their forever homes</p>
          </div>
          <div className={styles.reason}>
            <div className={styles.reasonIcon}>🤝</div>
            <h3>Join a Community</h3>
            <p>Meet people who share your passion</p>
          </div>
          <div className={styles.reason}>
            <div className={styles.reasonIcon}>📚</div>
            <h3>Gain Experience</h3>
            <p>Learn valuable skills and knowledge</p>
          </div>
          <div className={styles.reason}>
            <div className={styles.reasonIcon}>❤️</div>
            <h3>Share Love</h3>
            <p>Give and receive unconditional love</p>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className={styles.opportunities}>
        <h2>Volunteer Opportunities</h2>
        <div className={styles.opportunitiesGrid}>
          {volunteerOpportunities.map((opportunity, index) => (
            <div key={index} className={styles.opportunityCard}>
              <div className={styles.opportunityIcon}>{opportunity.icon}</div>
              <div className={styles.opportunityImageWrapper}>
                <Image
                  src={opportunity.image}
                  alt={opportunity.title}
                  width={300}
                  height={200}
                  className={styles.opportunityImage}
                />
              </div>
              <h3>{opportunity.title}</h3>
              <p>{opportunity.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Requirements Section */}
      <section className={styles.requirements}>
        <h2>Volunteer Requirements</h2>
        <div className={styles.requirementsList}>
          <div className={styles.requirement}>
            <span className={styles.checkmark}>✓</span>
            <p>Must be 18 years or older</p>
          </div>
          <div className={styles.requirement}>
            <span className={styles.checkmark}>✓</span>
            <p>Commit to at least 4 hours per month</p>
          </div>
          <div className={styles.requirement}>
            <span className={styles.checkmark}>✓</span>
            <p>Attend volunteer orientation</p>
          </div>
          <div className={styles.requirement}>
            <span className={styles.checkmark}>✓</span>
            <p>Complete required training</p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className={styles.applicationSection}>
        <h2>Volunteer Application</h2>
        <form onSubmit={handleSubmit} className={styles.applicationForm}>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label htmlFor="firstName">First Name*</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="lastName">Last Name*</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number*</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="age">Age*</label>
              <input
                type="number"
                id="age"
                name="age"
                min="18"
                value={formData.age}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="availability">Availability*</label>
              <select
                id="availability"
                name="availability"
                value={formData.availability}
                onChange={handleInputChange}
                required
              >
                <option value="">Select availability</option>
                <option value="weekdays">Weekdays</option>
                <option value="weekends">Weekends</option>
                <option value="both">Both</option>
              </select>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Areas of Interest*</label>
            <div className={styles.checkboxGrid}>
              {volunteerOpportunities.map((opportunity, index) => (
                <label key={index} className={styles.checkbox}>
                  <input
                    type="checkbox"
                    name="interests"
                    value={opportunity.title}
                    checked={formData.interests.includes(opportunity.title)}
                    onChange={handleCheckboxChange}
                  />
                  {opportunity.title}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="experience">Previous Experience</label>
            <textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              rows={4}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Why do you want to volunteer?*</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
            />
          </div>

          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>

        {showThankYou && (
          <div className={styles.thankYouMessage}>
            <h3>Thank You!</h3>
            <p>We've received your application and will contact you soon.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default VolunteerPage;