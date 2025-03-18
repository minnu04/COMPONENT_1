import React from 'react';

function BookCard({ image, name, genre, author }) {
  return (
    <div className="book-card" style={{
      border: '1px solid #ddd',
      padding: '16px',
      borderRadius: '8px',
      boxShadow: '2px 2px 12px rgba(0,0,0,0.1)',
      textAlign: 'center',
      width: '180px'
    }}>
      <img src={image} alt={name} style={{ width: '150px', height: '200px', objectFit: 'cover' }} />
      <h2 style={{ fontSize: '18px', margin: '10px 0' }}>{name}</h2>
      <p>
        <strong>Genre:</strong> {genre}
      </p>
      <p>
        <strong>Author:</strong> {author}
      </p>
    </div>
  );
}

export default BookCard;