import type { Metadata } from 'next'
import { Container, PageHero, SiteShell } from '@/components/site-shell'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Pioneer Biotech collects, uses, and protects information submitted through this website.',
  alternates: { canonical: '/privacy-policy' },
  robots: { index: true, follow: true },
}

const EFFECTIVE_DATE = 'September 11, 2026'

export default function PrivacyPolicyPage() {
  return <SiteShell><main>
    <PageHero
      className="tight-top"
      breadcrumb="Pioneer Biotech / Privacy Policy"
      title="Privacy Policy"
      description="How we collect, use, and protect information submitted through this website."
    />

    <section className="section">
      <Container>
        <div className="legal-content">
          <p className="legal-updated">Effective date: {EFFECTIVE_DATE}</p>

          <p>
            Pioneer Biotech LLC (&ldquo;Pioneer Biotech,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates
            this website (pbio.tech). This policy explains what information we collect when you visit or use this
            site, how we use it, and the choices you have. It applies only to this website — not to any offline
            interaction, product, or service.
          </p>

          <h2>Information We Collect</h2>
          <p><strong>Information you provide to us.</strong> When you submit our contact form, we collect:</p>
          <ul>
            <li>Your name and email address</li>
            <li>Your company name and country (optional)</li>
            <li>What you&apos;re interested in (Pharma Solutions, Medical Devices, or Innovation Hub)</li>
            <li>The message you write to us</li>
            <li>Whether you&apos;ve opted in to receive newsletter emails</li>
          </ul>
          <p>
            We only collect this information when you choose to submit it. We do not require account creation, and
            no part of this website asks for payment details, government ID, or health information about you or
            anyone else.
          </p>

          <p><strong>Information collected automatically.</strong> This site uses Vercel Web Analytics to understand
            how the site is used — which pages are visited, how visitors arrived, and general device/browser and
            country-level location information. This analytics service does not use cookies, does not track you
            across other websites, and does not build a profile tied to your identity. We only see this data in
            aggregate.
          </p>

          <h2>Cookies</h2>
          <p>
            This website does not use cookies or any similar tracking or storage technology to identify or track
            individual visitors. If that changes in the future, we will update this policy and, where required by
            law, ask for your consent first.
          </p>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To respond to your enquiry and route it to the right team within Pioneer Biotech</li>
            <li>To send you newsletter updates, but only if you&apos;ve opted in — you can ask to stop at any time</li>
            <li>To understand, in aggregate, how visitors use this website so we can improve it</li>
            <li>To meet legal, regulatory, or security obligations where applicable</li>
          </ul>
          <p>We do not sell your information, and we do not use it for third-party advertising.</p>

          <h2>How We Share Your Information</h2>
          <p>We share information only with service providers who help us run this website and respond to enquiries:</p>
          <ul>
            <li><strong>Resend</strong> — delivers the email generated when you submit our contact form</li>
            <li><strong>Vercel</strong> — hosts this website and provides the anonymous analytics described above</li>
          </ul>
          <p>
            These providers process data on our behalf and are not permitted to use it for their own purposes. We
            may also disclose information if required to do so by law, or to protect the rights, safety, or
            property of Pioneer Biotech, our visitors, or the public.
          </p>

          <h2>Data Retention</h2>
          <p>
            We keep contact-form submissions for as long as reasonably necessary to respond to your enquiry and to
            maintain a business record of it, after which we delete or anonymize it. You can ask us to delete your
            information sooner at any time — see &ldquo;Your Rights&rdquo; below.
          </p>

          <h2>Your Rights</h2>
          <p>Depending on where you&apos;re located, you may have the right to:</p>
          <ul>
            <li>Ask what personal information we hold about you</li>
            <li>Ask us to correct inaccurate information</li>
            <li>Ask us to delete your information</li>
            <li>Withdraw newsletter consent at any time</li>
          </ul>
          <p>To exercise any of these rights, email us at <a href="mailto:info@pbio.tech">info@pbio.tech</a>.</p>

          <h2>International Data Transfers</h2>
          <p>
            Pioneer Biotech operates from Egypt and the United Arab Emirates, and our service providers host
            infrastructure in other countries. As a result, your information may be processed in a country
            other than the one you submitted it from. We only work with service providers that maintain
            appropriate safeguards for the data they process.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            This website is intended for business and professional audiences and is not directed at children. We
            do not knowingly collect personal information from anyone under 16.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. The &ldquo;Effective date&rdquo; above reflects the date
            of the current version. Material changes will be reflected on this page.
          </p>

          <h2>Contact Us</h2>
          <p>
            Questions about this policy or how we handle your information can be sent to{' '}
            <a href="mailto:info@pbio.tech">info@pbio.tech</a> or <a href="tel:+971503859559">+971 50 385 9559</a>.
          </p>
          <p>
            Pioneer Biotech LLC<br />
            Trivium Square, Floor 2, Office 207, 5th Settlement, New Cairo, Egypt<br />
            FD – First Floor, Incubator Building, Masdar City, Abu Dhabi, UAE
          </p>
        </div>
      </Container>
    </section>
  </main></SiteShell>
}
