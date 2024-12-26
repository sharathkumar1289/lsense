import React from 'react';

const Contact = () => {
  return (
    <section style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#f9f9f9' }}>
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Name" required style={{ display: 'block', margin: '1rem auto', padding: '0.5rem' }} />
        <input type="email" placeholder="Email" required style={{ display: 'block', margin: '1rem auto', padding: '0.5rem' }} />
        <textarea placeholder="Message" required style={{ display: 'block', margin: '1rem auto', padding: '0.5rem', height: '100px' }}></textarea>
        <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#28a745', color: 'white', border: 'none' }}>Submit</button>
      </form>
    </section>
  );
};

export default Contact;
