import type { Metadata } from 'next'
import { Container, PageHero, SiteShell } from '@/components/site-shell'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms that govern your use of the Pioneer Biotech website.',
  alternates: { canonical: '/terms-of-service' },
  robots: { index: true, follow: true },
}

const EFFECTIVE_DATE = 'September 11, 2026'

export default function TermsOfServicePage() {
  return <SiteShell><main>
    <PageHero
      className="tight-top"
      breadcrumb="Pioneer Biotech / Terms of Service"
      title="Terms of Service"
      description="The terms that govern your use of this website."
    />

    <section className="section">
      <Container>
        <div className="legal-content">
          <p className="legal-updated">Effective date: {EFFECTIVE_DATE}</p>

          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the website at pbio.tech (the
            &ldquo;Site&rdquo;), operated by Pioneer Biotech LLC (&ldquo;Pioneer Biotech,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing or using the Site, you agree to these Terms. If
            you do not agree, please do not use the Site.
          </p>

          <h2>Use of This Website</h2>
          <p>You may use this Site to learn about Pioneer Biotech&apos;s products and services and to contact us. You agree not to:</p>
          <ul>
            <li>Use the Site for any unlawful purpose or in violation of these Terms</li>
            <li>Attempt to gain unauthorized access to the Site or its underlying systems</li>
            <li>Scrape, harvest, or systematically extract content from the Site without our written permission</li>
            <li>Interfere with or disrupt the Site&apos;s operation, including through automated bot traffic</li>
            <li>Submit false, misleading, or fraudulent information through our contact form</li>
          </ul>

          <h2>Intellectual Property</h2>
          <p>
            All content on this Site — including text, graphics, logos, product names, and images — is owned by
            Pioneer Biotech or its licensors and is protected by intellectual property law. You may view and
            print pages of this Site for your own personal or internal business reference, but you may not
            reproduce, distribute, or create derivative works from this content without our prior written
            consent. &ldquo;NeuroTech A1 Stereotactic Frame&rdquo; and other Pioneer Biotech product names and
            logos are trademarks of Pioneer Biotech; other trademarks appearing on the Site belong to their
            respective owners.
          </p>

          <h2>Product & Medical Device Information</h2>
          <p>
            Content on this Site describing our products — including the NeuroTech A1 Stereotactic Frame and any
            clinical outcomes, specifications, or claims referenced alongside it — is provided for general
            informational purposes only. It is not medical advice, and it does not replace the independent
            clinical judgment of a qualified healthcare professional. Product availability, indications, and
            regulatory clearance status vary by country — contact us directly to confirm current status in your
            market before making any clinical, procurement, or purchasing decision.
          </p>

          <h2>No Warranty</h2>
          <p>
            This Site and its content are provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without
            warranties of any kind, express or implied. We do not warrant that the Site will be uninterrupted,
            error-free, or that any information on it is complete, accurate, or current at all times.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Pioneer Biotech will not be liable for any indirect,
            incidental, special, or consequential damages arising from your use of, or inability to use, this
            Site, even if we have been advised of the possibility of such damages.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            This Site may link to third-party websites, including partner and supplier sites, for your
            convenience. We do not control and are not responsible for the content, accuracy, or practices of
            any third-party site.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. The &ldquo;Effective date&rdquo; above reflects the date
            of the current version. Continued use of the Site after changes take effect constitutes acceptance of
            the updated Terms.
          </p>

          <h2>Governing Law</h2>
          <p>
            Pioneer Biotech operates from offices in Abu Dhabi, United Arab Emirates and New Cairo, Egypt. These
            Terms are governed by, and disputes arising from them are subject to, the laws and courts of the
            United Arab Emirates or the Arab Republic of Egypt, as applicable to the Pioneer Biotech office or
            activity most closely connected to the matter in question.
          </p>

          <h2>Contact Us</h2>
          <p>
            Questions about these Terms can be sent to <a href="mailto:info@pbio.tech">info@pbio.tech</a> or{' '}
            <a href="tel:+971503859559">+971 50 385 9559</a>.
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
