export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-24 px-4 text-center bg-gradient-to-br from-blue-100 to-blue-300">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Landing Page</h1>
        <p className="text-xl mb-6 max-w-2xl">
          Discover the features and benefits of our amazing product. It's fast, reliable and easy to use.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
          Get Started Now
        </button>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Why choose us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">🚀 Fast</h3>
            <p>Lightning-fast performance optimized for speed.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">🔒 Secure</h3>
            <p>Top-notch security to protect your data.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">✨ Easy</h3>
            <p>User-friendly interfaces and intuitive features.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t text-gray-500">
        © 2025 YourCompany. All rights reserved.
      </footer>
    </main>
  );
}
