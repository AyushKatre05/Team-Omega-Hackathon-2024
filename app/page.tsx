"use client";
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const Home = () => {
  const router = useRouter();

  const handleNavigateToDashboard = () => {
    router.push('/dashboard');
  };
  const handleNavigateToEngagement = () => {
    router.push('/dashboard/engagement');
  };

  return (
    <div 
      className="min-h-screen bg-black text-white flex flex-col items-center"
      style={{ 
        backgroundImage: "url('landing.jpg')",  // Specify your image path here
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <header className="w-full py-6 bg-red-600 bg-opacity-80 text-center">
        <h1 className="text-4xl font-bold">AI Content Generator</h1>
      </header>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-16 px-4 bg-black bg-opacity-70">
        <h2 className="text-5xl font-bold">Welcome to AI Content Generator</h2>
        <p className="mt-4 text-lg max-w-lg">
          Effortlessly create high-quality content with our AI-powered tools. Save time and focus on growing your business.
        </p>
        <Button
          onClick={handleNavigateToDashboard}
          className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-transform duration-300"
        >
          Get Started
        </Button>
      </div>

      {/* Feature Section */}
      <div className="w-full py-16 flex flex-col items-center justify-center px-4 bg-black bg-opacity-70">
        <h2 className="text-4xl font-bold mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
          <div
            className="bg-gray-800 text-white p-8 rounded-lg cursor-pointer hover:bg-red-600 transition-all duration-300"
            onClick={handleNavigateToDashboard}
          >
            <h3 className="text-2xl font-bold mb-2">Generate AI Content</h3>
            <p>Create high-quality content that is optimized for SEO and your brand’s voice.</p>
          </div>
          <div
            className="bg-gray-800 text-white p-8 rounded-lg cursor-pointer hover:bg-red-600 transition-all duration-300"
            onClick={handleNavigateToEngagement}
          >
            <h3 className="text-2xl font-bold mb-2">Engagement Tracking</h3>
            <p>Tailor your content to match your brand with our easy-to-use customization tools.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-6 bg-red-600 bg-opacity-80 text-center text-white">
        <p>&copy; 2024 AI Content Generator. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
