import { useState } from 'react';
import { Grid, Bookmark, User, ChevronDown, MessageCircle } from 'lucide-react';
import Navbar from '../Components/Navbar';
import Comments from '../pages/Comments'; // Import the Comments component

function UserProfile() {
    const [activeTab, setActiveTab] = useState('Posts'); // State to track active tab
    const [posts] = useState([
        {
            id: 1,
            image: "https://plus.unsplash.com/premium_photo-1726877140485-70692aafe655?w=500&auto=format&fit=crop&q=60",
            likes: 1234,
            comments: 56,
        },
        {
            id: 2,
            image: "https://plus.unsplash.com/premium_photo-1676651533764-ee16dbfd2113?w=500&auto=format&fit=crop&q=60",
            likes: 2156,
            comments: 89,
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1667207888680-ba63af41edca?w=500&auto=format&fit=crop&q=60",
            likes: 987,
            comments: 34,
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1562629609-49c10e58c2a6?w=500&auto=format&fit=crop&q=60",
            likes: 765,
            comments: 12,
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1689793600481-554512b7bab6?w=500&auto=format&fit=crop&q=60",
            likes: 1543,
            comments: 67,
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1596914255028-18a986e2dee7?w=500&auto=format&fit=crop&q=60",
            likes: 2341,
            comments: 98,
        },
    ]);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Profile Header */}
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-lg mx-auto px-4 py-4 flex items-center justify-between">
                    <h1 className="text-lg font-semibold">ChefJulia</h1>
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                </div>
            </header>

            {/* Profile Info */}
            <section className="bg-white">
                <div className="max-w-lg mx-auto px-4 py-6 flex items-center">
                    <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden">
                        <img
                            src="https://i.pravatar.cc/150?img=12"
                            alt="User Avatar"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="ml-6 flex-1">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-lg font-semibold">ChefJulia</h2>
                                <p className="text-sm text-gray-500">New York, NY</p>
                            </div>
                            <button className="text-sm text-blue-500 font-medium">Edit Profile</button>
                        </div>
                        <div className="flex items-center mt-4 space-x-6">
                            <div>
                                <span className="font-semibold">6</span>
                                <p className="text-sm text-gray-500">Posts</p>
                            </div>
                            <div>
                                <span className="font-semibold">1.2k</span>
                                <p className="text-sm text-gray-500">Followers</p>
                            </div>
                            <div>
                                <span className="font-semibold">345</span>
                                <p className="text-sm text-gray-500">Following</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tabs */}
            <div className="bg-white border-t border-b border-gray-200">
                <div className="max-w-lg mx-auto flex justify-around py-2">
                    <button
                        className={`flex items-center space-x-1 ${activeTab === 'Posts' ? 'text-gray-700' : 'text-gray-500'}`}
                        onClick={() => setActiveTab('Posts')}
                    >
                        <Grid className="h-5 w-5" />
                        <span className="text-sm font-medium">Posts</span>
                    </button>
                    <button
                        className={`flex items-center space-x-1 ${activeTab === 'Comments' ? 'text-gray-700' : 'text-gray-500'}`}
                        onClick={() => setActiveTab('Comments')}
                    >
                        <MessageCircle className="h-5 w-5" />
                        <span className="text-sm font-medium">Comments</span>
                    </button>
                    <button
                        className={`flex items-center space-x-1 ${activeTab === 'Saved' ? 'text-gray-700' : 'text-gray-500'}`}
                        onClick={() => setActiveTab('Saved')}
                    >
                        <Bookmark className="h-5 w-5" />
                        <span className="text-sm font-medium">Saved</span>
                    </button>
                    <button
                        className={`flex items-center space-x-1 ${activeTab === 'Tagged' ? 'text-gray-700' : 'text-gray-500'}`}
                        onClick={() => setActiveTab('Tagged')}
                    >
                        <User className="h-5 w-5" />
                        <span className="text-sm font-medium">Tagged</span>
                    </button>
                </div>
            </div>

            {/* Conditional Rendering */}
            {activeTab === 'Posts' && (
                <main className="max-w-lg mx-auto px-4 py-4 grid grid-cols-3 gap-1">
                    {posts.map((post) => (
                        <div key={post.id} className="relative group">
                            <img
                                src={post.image}
                                alt={`Post ${post.id}`}
                                className="w-full aspect-square object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="text-white text-sm">
                                    <span className="font-semibold">{post.likes}</span> likes
                                    <br />
                                    <span className="font-semibold">{post.comments}</span> comments
                                </div>
                            </div>
                        </div>
                    ))}
                </main>
            )}
            {activeTab === 'Comments' && <Comments />} {/* Render Comments component */}

            {/* Bottom Navigation */}
            <Navbar />
        </div>
    );
}

export default UserProfile;