import Layout from '../components/Layout';
import { Briefcase, MapPin, Clock } from 'lucide-react';

export default function Careers() {
  return (
    <Layout>
      <section className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-4xl font-bold mb-4">Join the Brew & Bean Team ☕</h1>
        <p className="mb-8 text-gray-600">
          We&apos;re always on the lookout for passionate, coffee-loving legends to join our growing family. Whether you&apos;re a barista pro or just starting your journey — if you’ve got the vibe, we&apos;ve got the grind. 😮‍💨
        </p>

        <div className="space-y-8">
          {/* Position 1 */}
          <div className="p-6 bg-white shadow rounded-xl border border-gray-200">
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <Briefcase size={20} /> Barista
            </h2>
            <p className="text-gray-700 mb-2">Craft high-quality beverages and give our guests a legendary experience every day.</p>
            <div className="flex gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1"><MapPin size={16} /> Melbourne, VIC</span>
              <span className="flex items-center gap-1"><Clock size={16} /> Part-time</span>
            </div>
          </div>

          {/* Position 2 */}
          <div className="p-6 bg-white shadow rounded-xl border border-gray-200">
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <Briefcase size={20} /> Café Manager
            </h2>
            <p className="text-gray-700 mb-2">Lead the team, run daily operations, and keep the coffee flowing like a champ.</p>
            <div className="flex gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1"><MapPin size={16} /> Sydney, NSW</span>
              <span className="flex items-center gap-1"><Clock size={16} /> Full-time</span>
            </div>
          </div>

          {/* Position 3 */}
          <div className="p-6 bg-white shadow rounded-xl border border-gray-200">
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <Briefcase size={20} /> Marketing Intern
            </h2>
            <p className="text-gray-700 mb-2">Help us create content, run campaigns, and spread the Brew & Bean love online.</p>
            <div className="flex gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1"><MapPin size={16} /> Remote / Hybrid</span>
              <span className="flex items-center gap-1"><Clock size={16} /> Internship</span>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="mailto:careers@brewandbean.com"
            className="inline-block bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Apply Now
          </a>
        </div>
      </section>
    </Layout>
  );
}
