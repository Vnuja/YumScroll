import { Home, Search, Plus, Paperclip, User, } from 'lucide-react';
import { useState } from 'react';

function Navbar() {
  const [activeTab, setActiveTab] = useState('home');
  return (
    <nav className="bg-white border-t fixed bottom-0 w-full py-2 z-50">
        <div className="max-w-lg mx-auto flex justify-around">
            <button
            onClick={() => {
              setActiveTab('home');
              window.location.href = '/';
            }} 
            className={`p-1 ${activeTab === 'home' ? 'text-black' : 'text-gray-400'}`}
            >
            <Home className="h-6 w-6" />
            </button>
            <button
            onClick={() => {
              setActiveTab('search');
              window.location.href = '/search';
            }}
            className={`p-1 ${activeTab === 'search' ? 'text-black' : 'text-gray-400'}`}
            >
            <Search className="h-6 w-6" />
            </button>
          <button
            onClick={() => {
              setActiveTab('reels');
              window.location.href = '/reels';
            }}
            className={`p-1 ${activeTab === 'reels' ? 'text-black' : 'text-gray-400'}`}
          >
            <Plus className="h-6 w-6" />
          </button>
          <button
            onClick={() => {
              setActiveTab('forum');
              window.location.href = '/forum';
            }}
            className={`p-1 ${activeTab === 'forum' ? 'text-black' : 'text-gray-400'}`}
          >
            <Paperclip className="h-6 w-6" />
          </button>
          <button
            onClick={() => {
              setActiveTab('profile');
              window.location.href = '/profile';
            }}
            className={`p-1 ${activeTab === 'profile' ? 'text-black' : 'text-gray-400'}`}
          >
            <User className="h-6 w-6" />
          </button>
        </div >
      </nav >
  );
}

export default Navbar;
