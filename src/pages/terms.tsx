import Layout from '../components/Layout';
import Link from 'next/link';

export default function Terms() {
  return (
    <Layout>
      <section className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>
        <p className="mb-4">
          These Terms & Conditions govern your use of our website. By accessing or using the site, you agree to be bound by these terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">1. Use of the Website</h2>
        <p className="mb-4">
          You agree to use the website only for lawful purposes. You must not misuse the website by knowingly introducing viruses or attempting unauthorised access.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">2. Intellectual Property</h2>
        <p className="mb-4">
          All content, branding, and images are either owned by us or used with permission. Do not copy, distribute, or use without written consent.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">3. Privacy Policy</h2>
        <p className="mb-4">
          Please refer to our{' '}
          <Link href="/privacy" className="text-blue-600 underline">
            Privacy Policy
          </Link>{' '}
          for information about how we handle personal data.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">4. Changes to Terms</h2>
        <p className="mb-4">
          We may update these terms occasionally. Continued use of the site means you accept the revised terms.
        </p>

        <p className="mt-8 text-sm text-gray-500">
          Last updated: June 2025
        </p>
      </section>
    </Layout>
  );
}
