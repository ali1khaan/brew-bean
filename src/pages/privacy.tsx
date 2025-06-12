import Layout from '../components/Layout';

export default function Privacy() {
  return (
    <Layout>
      <section className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          This Privacy Policy outlines how we collect, use, store, and protect your personal information when you interact with our website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
        <p className="mb-4">
          We may collect personal data such as your name, email address, and any other information you provide when contacting us or purchasing products.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">2. Use of Information</h2>
        <p className="mb-4">
          We use your data to process orders, respond to inquiries, and improve your user experience. We do not sell your data to third parties.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">3. Data Storage and Security</h2>
        <p className="mb-4">
          Your information is stored securely and we implement industry-standard practices to protect your data from unauthorised access or disclosure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">4. Cookies</h2>
        <p className="mb-4">
          This site uses cookies to enhance your browsing experience. You can disable cookies in your browser settings.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">5. Third-Party Services</h2>
        <p className="mb-4">
          We may use third-party tools such as Google Analytics to collect non-identifying usage data to improve our services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">6. Your Rights</h2>
        <p className="mb-4">
          You have the right to access, update, or delete your personal data. To make a request, please contact us directly.
        </p>

        <p className="mt-8 text-sm text-gray-500">
          Last updated: June 2025
        </p>
      </section>
    </Layout>
  );
}
