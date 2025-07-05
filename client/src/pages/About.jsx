import React, { useRef } from 'react';
import useParallax from '../hooks/useParallax';
import PageTransition from '../components/animations/PageTransition';
import './About.css';

const teamMembers = [
  {
    name: 'Anika Sharma',
    role: 'Co-founder & Head Chef',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop'
  },
  {
    name: 'Rohan Verma',
    role: 'Co-founder & Operations Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop'
  },
  {
    name: 'Priya Iyer',
    role: 'Co-founder & Marketing Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop'
  }
];

const About = () => {
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const title3Ref = useRef(null);

  useParallax(title1Ref);
  useParallax(title2Ref);
  useParallax(title3Ref);

  return (
    <PageTransition>
      <div className="about-page container py-5">
        <div className="our-story text-center">
          <h1 ref={title1Ref} className="section-title">Our Story</h1>
          <h4 className="mt-5">Why "EveCafe"?</h4>
          <p className="lead text-muted">
            The name "EveCafe" was chosen to evoke a sense of warmth, comfort, and the inviting atmosphere of a cozy evening gathering. It's a place where people can unwind, connect, and enjoy quality food and beverages in a relaxed setting. The name also subtly hints at the cafe's commitment to offering a diverse menu that caters to different tastes and preferences, much like the variety of experiences one might have throughout an evening.
          </p>
          <h4 className="mt-5">Inspiration Behind the Café</h4>
          <p className="lead text-muted">
            EveCafe was born out of a passion for creating a community hub that celebrates the rich culinary traditions of Bengaluru while embracing modern, sustainable practices. Inspired by the city's vibrant culture and the growing appreciation for locally sourced ingredients, we envisioned a space where people could savor delicious food and drinks while feeling good about their choices. Our goal is to offer a unique dining experience that reflects the spirit of Bengaluru, from its bustling streets to its tranquil gardens.
          </p>
        </div>

        <div className="meet-the-team text-center py-5">
          <h2 ref={title2Ref} className="section-title">Meet the Team</h2>
          <div className="row mt-5">
            {teamMembers.map(member => (
              <div key={member.name} className="col-md-4">
                <img src={member.image} alt={member.name} className="team-member-img" />
                <h5 className="mt-3">{member.name}</h5>
                <p className="text-muted">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="our-values text-center">
          <h2 ref={title3Ref} className="section-title">Our Values</h2>
          <p className="lead text-muted mt-4">
            At EveCafe, we are committed to sustainability, community engagement, and supporting local farmers and artisans. We believe in using fresh, seasonal ingredients to create dishes that are both delicious and environmentally responsible. Our sourcing policy prioritizes local suppliers, ensuring that we contribute to the local economy and reduce our carbon footprint.
          </p>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
