import { useEffect } from 'react';
import { Header } from './components/Header';
import { ProductGrid } from './components/ProductGrid';

export default function App() {
  useEffect(() => {
    // Load Zendesk Widget
    const script = document.createElement('script');
    script.id = 'ze-snippet';
    script.src = 'https://static.zdassets.com/ekr/snippet.js?key=14481562-b33c-4c41-affd-24083369b5a0';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.getElementById('ze-snippet');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Featured Electronics</h1>
          <p className="text-gray-600">Discover the latest in tech and innovation</p>
        </div>
        <ProductGrid />
      </main>
    </div>
  );
}