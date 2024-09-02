import React from 'react';
import Link from 'next/link';
import styles from './pathways.module.css';

export default function PathwaysPage() {
  const pathways = [
    { name: 'Get Started', link: '/pathways/get-started', description: 'Discover the world of Hockey, learn rules, equiptment needed and more...' },
    { name: 'County', link: '/pathways/county', description: 'Explore counties, find your nearest one, how to get a trial and more...' },
    { name: 'Talent Academy', link: '/pathways/talent-academy', description: 'Learn the Talent System, your nearest one, how to trial and more...' },
    { name: 'England', link: '/pathways/england', description: 'Want to represent England? Learn how to get a trial, tips and more...' },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Pathways</h1>
      <div className={styles.grid}>
        {pathways.map((pathway, index) => (
          <Link key={index} href={pathway.link} className={styles.card}>
            <div className={styles.cardContent}>
              <h2>{pathway.name}</h2>
              <p className={styles.description}>{pathway.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
