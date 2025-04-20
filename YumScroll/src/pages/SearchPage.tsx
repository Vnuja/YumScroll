import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import Navbar from '../Components/Navbar';

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSearch, setActiveSearch] = useState(false);
  const [recentSearches, setRecentSearches] = useState([
    { type: 'user', username: 'ChefJulia', avatar: 'https://i.pravatar.cc/40?img=12' },
    { type: 'user', username: 'PastaLover', avatar: 'https://i.pravatar.cc/40?img=18' },
    { type: 'hashtag', name: 'foodie' },
    { type: 'user', username: 'HealthyEats', avatar: 'https://i.pravatar.cc/40?img=5' },
    { type: 'hashtag', name: 'homemade' }
  ]);
  
  const [searchResults, setSearchResults] = useState([]);
  const [exploreContent, setExploreContent] = useState<{ id: number; image: string; likes: number; comments: number; size: string; }[]>([]);

  useEffect(() => {
    // Generate explore content grid
    const tempExploreContent = [];
    for (let i = 1; i <= 15; i++) {
      const size = i % 7 === 0 ? 'large' : 'normal';
      tempExploreContent.push({
        id: i,
        image: `/api/placeholder/${size === 'large' ? 400 : 200}/${size === 'large' ? 400 : 200}`,
        likes: Math.floor(Math.random() * 10000),
        comments: Math.floor(Math.random() * 500),
        size
      });
    }
    setExploreContent(tempExploreContent);
  }, []);

  useEffect(() => {
    // Mock search functionality
    if (searchQuery.trim()) {
      const users = [
        { type: 'user', username: 'ChefJulia', avatar: 'https://i.pravatar.cc/40?img=12', fullName: 'Julia Chen', followers: 24300 },
        { type: 'user', username: 'PastaLover', avatar: 'https://i.pravatar.cc/40?img=18', fullName: 'Mark Johnson', followers: 15600 },
        { type: 'user', username: 'HealthyEats', avatar: 'https://i.pravatar.cc/40?img=5', fullName: 'Sara Healthy', followers: 89700 }
      ];
      
      const hashtags = [
        { type: 'hashtag', name: 'foodie', posts: 2300000 },
        { type: 'hashtag', name: 'homemade', posts: 1570000 },
        { type: 'hashtag', name: 'healthyfood', posts: 3450000 }
      ];
      
      const filtered = [...users, ...hashtags].filter(item => {
        if (item.type === 'user') {
          return item.username.toLowerCase().includes(searchQuery.toLowerCase()) || 
                 item.fullName.toLowerCase().includes(searchQuery.toLowerCase());
        } else {
          return item.name.toLowerCase().includes(searchQuery.toLowerCase());
        }
      });
      
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleFocus = () => {
    setActiveSearch(true);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const handleBackToExplore = () => {
    setSearchQuery('');
    setActiveSearch(false);
  };

  const removeFromRecent = (index) => {
    const updatedSearches = [...recentSearches];
    updatedSearches.splice(index, 1);
    setRecentSearches(updatedSearches);
  };

  const addToRecent = (item) => {
    // Remove if already exists to avoid duplicates
    const filteredSearches = recentSearches.filter(search => 
      !(search.type === item.type && 
        ((item.type === 'user' && search.username === item.username) || 
         (item.type === 'hashtag' && search.name === item.name))
      )
    );
    
    // Add to beginning of list
    setRecentSearches([item, ...filteredSearches].slice(0, 10)); // Limit to 10 recent searches
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Modified for Search */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10">
        <div className="max-w-lg mx-auto p-3 flex items-center">
          {activeSearch ? (
            <div className="flex items-center w-full">
              <button 
                onClick={handleBackToExplore}
                className="mr-3 text-black"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-gray-100 rounded-lg py-2 pl-10 pr-10 w-full focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <Search className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
                {searchQuery && (
                  <button 
                    className="absolute right-3 top-2"
                    onClick={handleClearSearch}
                  >
                    <X className="h-5 w-5 text-gray-400" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-100 rounded-lg py-2 pl-10 pr-3 w-full focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={handleFocus}
              />
              <Search className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-lg mx-auto pt-16 pb-16">
        {activeSearch || searchQuery ? (
          // Search Results or Recent Searches
          <div className="bg-white min-h-screen">
            {searchQuery ? (
              // Search Results
              <div className="p-3">
                {searchResults.length > 0 ? (
                  searchResults.map((result, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between py-2"
                      onClick={() => addToRecent(result)}
                    >
                      {result.type === 'user' ? (
                        // User result
                        <div className="flex items-center">
                          <img 
                            src={result.avatar}
                            alt={result.username}
                            className="w-12 h-12 rounded-full mr-3"
                          />
                          <div>
                            <div className="font-medium">{result.username}</div>
                            <div className="text-gray-500 text-sm">{result.fullName}</div>
                            <div className="text-gray-500 text-xs">{result.followers.toLocaleString()} followers</div>
                          </div>
                        </div>
                      ) : (
                        // Hashtag result
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-xl font-medium">#</span>
                          </div>
                          <div>
                            <div className="font-medium">#{result.name}</div>
                            <div className="text-gray-500 text-sm">{result.posts.toLocaleString()} posts</div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="py-4 text-center text-gray-500">No results found</div>
                )}
              </div>
            ) : (
              // Recent Searches
              <div className="p-3">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-base">Recent</h2>
                  <button className="text-blue-500 text-sm font-medium">Clear All</button>
                </div>
                
                {recentSearches.map((search, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    {search.type === 'user' ? (
                      // User recent search
                      <div className="flex items-center">
                        <img 
                          src={search.avatar}
                          alt={search.username}
                          className="w-12 h-12 rounded-full mr-3"
                        />
                        <div className="font-medium">{search.username}</div>
                      </div>
                    ) : (
                      // Hashtag recent search
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-xl font-medium">#</span>
                        </div>
                        <div className="font-medium">#{search.name}</div>
                      </div>
                    )}
                    <button onClick={() => removeFromRecent(index)}>
                      <X className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          // Explore Content
          <div className="grid grid-cols-3 gap-1">
            {exploreContent.map((content, index) => (
              <div 
                key={content.id} 
                className={`relative ${
                  content.size === 'large' ? 'col-span-2 row-span-2' : ''
                }`}
              >
                <img 
                  src={content.image} 
                  alt="Explore content"
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="flex items-center space-x-2 text-white">
                    <div className="flex items-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="white">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                      <span className="ml-1">{content.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="white">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                      <span className="ml-1">{content.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <Navbar />
    </div>
  );
}

export default SearchPage;