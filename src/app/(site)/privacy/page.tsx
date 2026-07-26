import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | Archangels Catholic Church',
  description: 'Privacy Policy for Archangels Catholic Church, Satellite Town, Lagos.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200 py-12 lg:py-16">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-var(--color-navy) transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
            <h1 className="font-serif text-3xl lg:text-4xl text-slate-900 font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-slate-600">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-site py-12 lg:py-20">
        <div className="max-w-3xl mx-auto prose prose-slate prose-a:text-var(--color-gold) hover:prose-a:text-var(--color-navy)">
          <p>
            At Archangels Catholic Church, Satellite Town, Lagos, we respect your privacy and are committed to protecting any personal information you share with us. This Privacy Policy outlines how we collect, use, and safeguard your data.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email address, phone number, and physical address when you:
          </p>
          <ul>
            <li>Register as a parishioner</li>
            <li>Sign up for a ministry or event</li>
            <li>Submit a contact form on our website</li>
            <li>Make a donation</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>
            The information we collect is used solely for parish-related activities, including:
          </p>
          <ul>
            <li>Communicating parish news, events, and updates</li>
            <li>Maintaining parish registry and sacramental records</li>
            <li>Responding to your inquiries and providing spiritual support</li>
            <li>Processing donations and providing tax receipts</li>
          </ul>

          <h2>3. Data Protection and Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to outside parties. Your data is kept strictly confidential within the parish administration. We implement reasonable security measures to protect your personal information against unauthorized access or disclosure.
          </p>

          <h2>4. Your Rights</h2>
          <p>
            You have the right to access, update, or request the deletion of your personal information stored in our records. If you wish to make changes to your data, please contact the parish office.
          </p>

          <h2>5. Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:archangels_sat@yahoo.com">archangels_sat@yahoo.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+2348065690094">+234 806 569 0094</a></li>
            <li><strong>Address:</strong> 1 Mission Street, Satellite Town, Lagos, Nigeria</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
