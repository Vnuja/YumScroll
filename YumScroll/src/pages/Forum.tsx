import { useState } from 'react';
import Navbar from '../Components/Navbar';
import { Heart, MessageCircle, Bookmark, Plus } from 'lucide-react';

function Forum() {
    const [posts] = useState([
        {
            id: 1,
            title: "Perfect Salmon Recipe",
            description: "Learn how to make the perfect salmon with fresh herbs and lemon zest.",
            image: "https://plus.unsplash.com/premium_photo-1726877140485-70692aafe655?w=500&auto=format&fit=crop&q=60",
            author: "ChefJulia",
            likes: 1234,
            comments: 56,
        },
        {
            id: 2,
            title: "Authentic Italian Carbonara",
            description: "A step-by-step guide to making authentic Italian carbonara.",
            image: "https://plus.unsplash.com/premium_photo-1676651533764-ee16dbfd2113?w=500&auto=format&fit=crop&q=60",
            author: "PastaLover",
            likes: 2156,
            comments: 89,
        },
        {
            id: 3,
            title: "Healthy Breakfast Ideas",
            description: "Start your day with these healthy and delicious breakfast ideas.",
            image: "https://images.unsplash.com/photo-1667207888680-ba63af41edca?w=500&auto=format&fit=crop&q=60",
            author: "HealthyEats",
            likes: 987,
            comments: 34,
        },
    ]);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 py-4">
                <div className="max-w-lg mx-auto px-4 flex items-center justify-between">
                    <h1 className="text-lg font-semibold">YumScroll Forum</h1>
                    <button className="flex items-center space-x-1 text-blue-500 font-medium">
                        <Plus className="h-5 w-5" />
                        <span>New Post</span>
                    </button>
                </div>
            </header>

            {/* Posts */}
            <main className="max-w-lg mx-auto px-4 py-6 space-y-4">
                {posts.map((post) => (
                    <div key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">{post.title}</h2>
                            <p className="text-sm text-gray-600 mt-1">{post.description}</p>
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center space-x-2 text-gray-500">
                                    <Heart className="h-5 w-5" />
                                    <span>{post.likes}</span>
                                    <MessageCircle className="h-5 w-5" />
                                    <span>{post.comments}</span>
                                </div>
                                <Bookmark className="h-5 w-5 text-gray-500" />
                            </div>
                        </div>
                    </div>
                ))}
            </main>

            {/* Bottom Navigation */}
            <Navbar />
        </div>
    );
}

export default Forum;