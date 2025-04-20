import { useState } from 'react';
import { Heart, MessageCircle, Send, Plus, Bookmark, Menu, Search, Home, PlusSquare, User, Grid, Play, ChefHat } from 'lucide-react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';

function Feed() {
  const [activeTab, setActiveTab] = useState('home');
  const [posts] = useState([
    {
      id: 1,
      image: "https://plus.unsplash.com/premium_photo-1726877140485-70692aafe655?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGVyZmVjdCUyMHNhbG1vbiUyMHdpdGglMjBmcmVzaCUyMGhlcmJzJTIwYW5kJTIwbGVtb24lMjB6ZXN0fGVufDB8MnwwfHx8MA%3D%3D",
      userAvatar: "https://i.pravatar.cc/40?img=12",
      username: "ChefJulia",
      location: "New York, NY",
      likes: 1234,
      description: "Perfect salmon with fresh herbs and lemon zest 🍋 #foodie #salmon",
      postedTime: "2 hours ago",
      comments: []
    },
    {
      id: 2,
      image: "https://plus.unsplash.com/premium_photo-1676651533764-ee16dbfd2113?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXV0aGVudGljJTIwSXRhbGlhbiUyMGNhcmJvbmFyYSUyMHdpdGglMjBwYW5jZXR0YXxlbnwwfHwwfHx8MA%3D%3D",
      userAvatar: "https://i.pravatar.cc/40?img=18",
      username: "PastaLover",
      location: "Rome, Italy",
      likes: 2156,
      description: "Authentic Italian carbonara with pancetta 🍝 #pasta #italian",
      postedTime: "5 hours ago",
      comments: []
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1667207888680-ba63af41edca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9ybmluZyUyMHNuYWNrfGVufDB8fDB8fHww",
      userAvatar: "https://i.pravatar.cc/40?img=5",
      username: "HealthyEats",
      location: "Los Angeles, CA",
      likes: 987,
      description: "Start your day right! 🥣 #breakfast #healthy",
      postedTime: "1 day ago",
      comments: []
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1562629609-49c10e58c2a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEZyZXNoJTIwZnJvbSUyMHRoZSUyMGdhcmRlbiUyMHRvJTIweW91ciUyMHBsYXRlfGVufDB8fDB8fHww",
      userAvatar: "https://i.pravatar.cc/40?img=22",
      username: "VeggieKing",
      location: "Portland, OR",
      likes: 765,
      description: "Fresh from the garden to your plate 🥗 #salad #veggies",
      postedTime: "2 days ago",
      comments: []
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1689793600481-554512b7bab6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V29vZCUyMGZpcmVkJTIwcGVyZmVjdGlvbiUyMHBpenphfGVufDB8fDB8fHww",
      userAvatar: "https://i.pravatar.cc/40?img=30",
      username: "PizzaMaster",
      location: "Naples, Italy",
      likes: 1543,
      description: "Wood-fired perfection 🍕 #pizza #homemade",
      postedTime: "3 days ago",
      comments: []
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1596914255028-18a986e2dee7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fE1vbHRlbiUyMGNob2NvbGF0ZSUyMGdvb2RuZXNzfGVufDB8fDB8fHww",
      userAvatar: "https://i.pravatar.cc/40?img=45",
      username: "DessertQueen",
      location: "Paris, France",
      likes: 2341,
      description: "Molten chocolate goodness 🍫 #dessert #chocolate",
      postedTime: "4 days ago",
      comments: []
    }
  ]);


  const [likes, setLikes] = useState(posts.map((post) => post.likes));
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [savedPosts, setSavedPosts] = useState<number[]>([]);
  const [commentInputs, setCommentInputs] = useState<Record<number, string>>({});
  const [comments, setComments] = useState<string[][]>(posts.map(() => []));
  const [showStories] = useState(true);

  const stories = [
    { username: "ChefJulia", avatar: "https://i.pravatar.cc/40?img=45", hasNew: true },
    { username: "PastaLover", avatar: "https://i.pravatar.cc/40?img=44", hasNew: true },
    { username: "HealthyEats", avatar: "https://i.pravatar.cc/40?img=43", hasNew: true },
    { username: "VeggieKing", avatar: "https://i.pravatar.cc/40?img=30", hasNew: true },
    { username: "PizzaMaster", avatar: "https://i.pravatar.cc/40?img=20", hasNew: false },
    { username: "DessertQueen", avatar: "https://i.pravatar.cc/40?img=60", hasNew: false },
    { username: "BakingPro", avatar: "https://i.pravatar.cc/40?img=12", hasNew: false },
    { username: "GrillMaster", avatar: "https://i.pravatar.cc/40?img=21", hasNew: false }
  ];

  const handleLike = (id: number) => {
    const postIndex = posts.findIndex((p) => p.id === id);
    const isLiked = likedPosts.includes(id);

    setLikedPosts(isLiked
      ? likedPosts.filter(postId => postId !== id)
      : [...likedPosts, id]
    );

    setLikes(prevLikes =>
      prevLikes.map((like, index) =>
        index === postIndex ? (isLiked ? like - 1 : like + 1) : like
      )
    );
  };

  const handleSavePost = (id: number) => {
    setSavedPosts(prevSaved =>
      prevSaved.includes(id)
        ? prevSaved.filter(postId => postId !== id)
        : [...prevSaved, id]
    );
  };

  const handleCommentChange = (id: number, value: string) => {
    setCommentInputs({ ...commentInputs, [id]: value });
  };

  const handleAddComment = (id: number) => {
    const comment = commentInputs[id];
    if (!comment || comment.trim() === "") return;

    const postIndex = posts.findIndex((p) => p.id === id);
    const newComments = [...comments];
    newComments[postIndex] = [...newComments[postIndex], comment];
    setComments(newComments);
    setCommentInputs({ ...commentInputs, [id]: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Stories */}
      

      {/* Main Content */}
      <main className="max-w-lg mx-auto pt-16 pb-16">
        {/* Stories */}
        {showStories && (
          <div className="bg-white border border-gray-200 mb-4 overflow-x-auto">
            <div className="flex p-4 space-x-4 min-w-max">
              {stories.map((story, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`${story.hasNew ? 'bg-gradient-to-r from-blue-500 to-pink-500' : 'bg-gray-200'} p-0.5 rounded-full`}>
                    <div className="bg-white p-0.5 rounded-full">
                      <img
                        src={story.avatar}
                        alt={story.username}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <span className="text-xs mt-1 truncate w-16 text-center">{story.username}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Posts */}
        {posts.map((post) => {
          const postIndex = posts.findIndex((p) => p.id === post.id);
          const isLiked = likedPosts.includes(post.id);
          const isSaved = savedPosts.includes(post.id);

          return (
            <div key={post.id} className="bg-white border border-gray-200 mb-4">
              {/* Post Header */}
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center space-x-2">
                  <div className="bg-gradient-to-r from-blue-500 to-pink-500 p-0.5 rounded-full">
                    <img
                      src={post.userAvatar}
                      alt={post.username}
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-sm">{post.username}</div>
                    <div className="text-xs text-gray-500">{post.location}</div>
                  </div>
                </div>
                <Menu className="h-5 w-5" />
              </div>

              {/* Post Image */}
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.description}
                  className="w-full aspect-square object-cover"
                />
              </div>

              {/* Post Actions */}
              <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-4">
                    <button onClick={() => handleLike(post.id)}>
                      <Heart
                        className={`h-6 w-6 ${isLiked ? 'text-red-500 fill-red-500' : ''}`}
                      />
                    </button>
                    <MessageCircle className="h-6 w-6" />
                    <Send className="h-6 w-6" />
                  </div>
                  <button onClick={() => handleSavePost(post.id)}>
                    <Bookmark
                      className={`h-6 w-6 ${isSaved ? 'text-black fill-black' : ''}`}
                    />
                  </button>
                </div>

                {/* Likes */}
                <div className="font-medium text-sm">{likes[postIndex].toLocaleString()} likes</div>

                {/* Caption */}
                <div className="text-sm mt-1">
                  <span className="font-medium">{post.username}</span>{' '}
                  <span>{post.description}</span>
                </div>

                {/* Comments */}
                {comments[postIndex].length > 0 && (
                  <div className="mt-2">
                    {comments[postIndex].length > 2 && (
                      <button className="text-gray-500 text-sm">
                        View all {comments[postIndex].length} comments
                      </button>
                    )}
                    {comments[postIndex].slice(-2).map((comment, idx) => (
                      <div key={idx} className="text-sm mt-1">
                        <span className="font-medium">user{idx + 1}</span> {comment}
                      </div>
                    ))}
                  </div>
                )}

                {/* Post Time */}
                <div className="text-xs text-gray-500 mt-1">{post.postedTime}</div>

                {/* Add Comment */}
                <div className="flex items-center mt-3 border-t pt-3">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    value={commentInputs[post.id] || ""}
                    onChange={(e) => handleCommentChange(post.id, e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleAddComment(post.id);
                    }}
                    className="flex-grow bg-transparent text-sm focus:outline-none"
                  />
                  {commentInputs[post.id] && commentInputs[post.id].trim() !== "" && (
                    <button
                      onClick={() => handleAddComment(post.id)}
                      className="text-blue-500 font-medium text-sm ml-2"
                    >
                      Post
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </main>

      {/* Bottom Navigation */}
      <Navbar />
    </div>
  );
}

export default Feed;