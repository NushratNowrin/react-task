import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ContactList = () => {
    const [contacts, setContacts] = useState([]);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreContacts = () => {
    // Implement logic to load more contacts from the API
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    // Implement search logic
    setSearchText(value);
  };
  useEffect(() => {
    // Implement API call to fetch contacts based on page and searchText
  }, [page, searchText]);

    return (
        <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearch}
      />
      <ul>
        {/* Render the list of contacts */}
      </ul>
      {loading && <p>Loading...</p>}
      {hasMore && !loading && (
        <button onClick={loadMoreContacts}>Load More</button>
      )}
    </div>
    );
};

export default ContactList;