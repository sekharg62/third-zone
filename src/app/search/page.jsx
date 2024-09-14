

import styles from './page.module.css'; // Import the CSS file for search styles

const Search = () => {
  /* const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Searching for:', searchQuery);
  }; */

  return (
    <div className={styles.searchContainer}>
      <form >
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search..."
          //value={searchQuery}
          //onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className={styles.searchButton}>Search</button>
      </form>
    </div>
  );
};

export default Search;
