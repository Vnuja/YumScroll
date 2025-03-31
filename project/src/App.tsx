import React, { useState } from 'react';
import { Heart, MessageCircle, Bookmark, Share2, Search, Home, PlusSquare, Menu, ChefHat } from 'lucide-react';

interface Post {
  id: number;
  image: string;
  title: string;
  likes: number;
  author: string;
  description: string;
}

function App() {
  const [posts] = useState<Post[]>([
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327",
      title: "Herb-Crusted Salmon",
      likes: 1234,
      author: "ChefJulia",
      description: "Perfect salmon with fresh herbs and lemon zest 🍋"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352",
      title: "Classic Pasta Carbonara",
      likes: 2156,
      author: "PastaLover",
      description: "Authentic Italian carbonara with pancetta 🍝"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929",
      title: "Morning Breakfast Bowl",
      likes: 987,
      author: "HealthyEats",
      description: "Start your day right! 🥣"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856",
      title: "Garden Fresh Salad",
      likes: 765,
      author: "VeggieKing",
      description: "Fresh from the garden to your plate 🥗"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1515516969-d4008cc6241a",
      title: "Homemade Pizza",
      likes: 1543,
      author: "PizzaMaster",
      description: "Wood-fired perfection 🍕"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b",
      title: "Chocolate Lava Cake",
      likes: 2341,
      author: "DessertQueen",
      description: "Molten chocolate goodness 🍫"
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b fixed w-full top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-orange-500" />
            <h1 className="text-xl font-semibold">YumScroll</h1>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search recipes..."
                className="bg-gray-100 px-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Home className="h-6 w-6" />
            <PlusSquare className="h-6 w-6" />
            <Menu className="h-6 w-6" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold">{post.title}</h2>
                  <span className="text-sm text-gray-500">@{post.author}</span>
                </div>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1">
                      <Heart className="h-5 w-5" />
                      <span>{post.likes}</span>
                    </button>
                    <button>
                      <MessageCircle className="h-5 w-5" />
                    </button>
                    <button>
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                  <button>
                    <Bookmark className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;