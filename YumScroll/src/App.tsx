import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Feed from './pages/Feed';
import SearchPage from './pages/SearchPage';
import UserProfile from './pages/UserProfile';
import Forum from './pages/Forum';



// import Home from './pages/Home';
// import Login from './pages/Login';
// import AboutUs from './pages/AboutUs';
// import Contact from './pages/Contact';
// import Register from './pages/Register';
// import UserProfile from './pages/UserProfile';
// import MakePayment from './pages/MakePayment';
// import PrivacyPolicy from './pages/PrivacyPolicy';
// import TermsOfUse from './pages/TermsOfUse';




function App() {
  return (
    <Router>
        <Routes>
          {/* Home Page as the default route */}
          <Route path="/" element={<Feed />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
  );
}


function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2 style={{ fontSize: '2rem', color: '#ff4d4f' }}>404 - Page Not Found</h2>
      <p style={{ fontSize: '1.2rem', color: '#555' }}>The page you are looking for does not exist or has been moved.</p>
      <a href="/" style={{ textDecoration: 'none', color: '#1890ff', fontSize: '1rem' }}>
      Go back to Home
      </a>
    </div>
  );
}

export default App;