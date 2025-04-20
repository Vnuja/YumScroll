import { Heart, Send, PlusSquare, ChefHat } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white border-b fixed w-full top-0 z-50">
      <div className="max-w-lg mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg width="0" height="0">
            <defs>
              <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#405DE6" />
                <stop offset="50%" stopColor="rgb(132, 62, 146)" />
                <stop offset="100%" stopColor="#E1306C" />
              </linearGradient>
            </defs>
          </svg>
          <ChefHat className="h-8 w-8" style={{ stroke: "url(#instagram-gradient)" }} />
          <h1 className="text-xl font-semibold">YumScroll</h1>
        </div>
        <div className="flex items-center space-x-4">
          <PlusSquare className="h-6 w-6" />
          <Heart className="h-6 w-6" />
          <Send className="h-6 w-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
