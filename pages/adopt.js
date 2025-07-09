// pages/adopt.js
'use client';
import { useState } from 'react';
import styles from '../styles/Adopt.module.css';
import Image from 'next/image';
import Link from 'next/link';

const AdoptPage = () => {
  const [filterType, setFilterType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const pets = [
    {
      id: 1,
      name: 'Luna',
      type: 'dog',
      breed: 'Golden Retriever',
      age: 2,
      gender: 'Female',
      image: '/images/pets/luna.jpeg',
      description: 'Luna is a friendly and energetic Golden Retriever who loves to play fetch.',
      status: 'available'
    },
    {
      id: 2,
      name: 'Oliver',
      type: 'cat',
      breed: 'British Shorthair',
      age: 1,
      gender: 'Male',
      image: '/images/pets/oliver.jpeg',
      description: 'Oliver is a calm and affectionate cat who enjoys cuddles.',
      status: 'available'
    },

    {
      id: 3,
      name: 'Max',
      type: 'dog',
      breed: 'German Shepherd',
      age: 3,
      gender:'Male',
      description: 'Max is a friendly and energetic 3-year-old male German Shepherd, ready to find his forever home.',
      image: '/images/pets/german.jpeg',
      status: 'available'
    },

    {
      id: 4,
      name: 'Bella',
      type: 'cat',
      breed: 'Persian',
      age: 1,
      gender:'Female',
      description: 'Bella is a gentle and affectionate 1-year-old female Persian cat, looking for a loving home where she can share her warmth and charm',
      image: '/images/pets/bella.jpeg',
      status: 'available'
    },

    {
      id: 5,
      name: 'Rocky',
      type: 'dog',
      breed: 'Boxer',
      age: 2,
      gender: 'Male',
      description: 'Rocky is a strong and energetic 2-year-old Boxer, always eager for a run and a good game of fetch',
      image: '/images/pets/rocky.jpeg',
      status: 'available'
    },
    {
      id: 6,
      name: 'Zoe',
      type: 'cat',
      breed: 'Ragdoll',
      age: 3,
      gender: 'Female',
      description: 'Zoe is a calm and affectionate 3-year-old Ragdoll cat, who loves cuddling and lounging in sunny spots',
      image: '/images/pets/zoe.jpeg',
      status: 'available'
    },
    {
      id: 7,
      name: 'Ziggy',
      type: 'dog',
      breed: 'Beagle',
      age: 4,
      gender: 'Male',
      description: 'Ziggy is a playful and curious 4-year-old Beagle, with a nose for adventure and a love for exploring',
      image: '/images/pets/ziggy.jpeg',
      status: 'available'
    },
    {
      id: 8,
      name: 'Misty',
      type: 'cat',
      breed: 'Scottish Fold',
      age: 2,
      gender: 'Female',
      description: 'Misty is a sweet and playful 2-year-old Scottish Fold with unique folded ears, always ready for attention',
      image: '/images/pets/misty.jpeg',
      status: 'available'
    }

  ];

  const filteredPets = pets.filter(pet => {
    const matchesType = filterType === 'all' || pet.type === filterType;
    const matchesSearch = pet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pet.breed.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Adopt a Pet</h1>
        <p>Find your perfect companion and give them a forever home</p>
      </section>

      <section className={styles.searchSection}>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search by name or breed..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        <div className={styles.filterButtons}>
          <button
            className={`${styles.filterBtn} ${filterType === 'all' ? styles.active : ''}`}
            onClick={() => setFilterType('all')}
          >
            All Pets
          </button>
          <button
            className={`${styles.filterBtn} ${filterType === 'dog' ? styles.active : ''}`}
            onClick={() => setFilterType('dog')}
          >
            Dogs
          </button>
          <button
            className={`${styles.filterBtn} ${filterType === 'cat' ? styles.active : ''}`}
            onClick={() => setFilterType('cat')}
          >
            Cats
          </button>
        </div>
      </section>

      <section className={styles.petsGrid}>
        {filteredPets.map(pet => (
          <div key={pet.id} className={styles.petCard}>
            <div className={styles.petImageWrapper}>
              <Image
                src={pet.image}
                alt={pet.name}
                width={400}
                height={400}
                className={styles.petImage}
              />
              <span className={styles.petType}>{pet.type}</span>
            </div>
            <div className={styles.petInfo}>
              <h2>{pet.name}</h2>
              <p className={styles.breed}>{pet.breed}</p>
              <div className={styles.petDetails}>
                <span>Age: {pet.age} years</span>
                <span>Gender: {pet.gender}</span>
              </div>
              <p className={styles.description}>{pet.description}</p>
              <Link href={`/adoption-form/${pet.id}`} className={styles.adoptButton}>
                Adopt Me
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className={styles.adoptInfo}>
        <h2>Adoption Process</h2>
        <div className={styles.processSteps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <h3>Browse & Choose</h3>
            <p>Find your perfect match from our available pets</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <h3>Submit Application</h3>
            <p>Fill out our adoption application form</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <h3>Meet & Greet</h3>
            <p>Visit the shelter to meet your potential pet</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>4</div>
            <h3>Take Home</h3>
            <p>Complete the adoption and welcome your new family member</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdoptPage;