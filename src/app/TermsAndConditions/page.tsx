"use client";

import React, { useEffect } from "react";
import styles from "./TermsAndConditions.module.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useRouter } from "next/navigation";

const TermsAndConditions: React.FC = () => {

  const router = useRouter();

  useEffect(() => {
    // Scroll to top when the page is re-rendered
    window.scrollTo(0, 0);
  }, [router]);

  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <div className={styles.termsContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>Terms and Conditions</h1>
        </header>
        <section className={styles.content}>
          <p>
            Please read these terms and conditions carefully, as they contain
            important information regarding your legal rights, remedies, and
            obligations. These include limitations, exclusions, and clauses
            governing the jurisdiction and resolution of disputes.
          </p>
          <h2>1. Service Policies</h2>
          <p>
            We reserve the right to modify service prices in instances of
            extreme conditions, including but not limited to mold, bodily
            fluids, smoke damage, or water damage. If you encounter any issues
            during a cleaning service, such as missed areas or damages, you must
            notify us within 48 hours. WeDeepClean cannot guarantee resolutions
            for reports made beyond this timeframe.
          </p>
          <h2>2. Amendments to the Agreement</h2>
          <p>
            We reserve the right to update or modify this Agreement and our
            policies at any time, with changes effective upon posting on our
            website. It is your responsibility to review this Agreement
            periodically. Continued use of our services constitutes your
            acceptance of the revised terms.
          </p>
          <h2>3. Third-Party Service Providers</h2>
          <p>
            WeDeepClean does not provide cleaning services directly. Instead, we
            connect users with independent cleaning service providers. While we
            vet these providers through third-party background checks, we do not
            guarantee their reliability or suitability. Exercise caution and
            judgment when interacting with cleaning service providers. By using
            our platform, you agree that WeDeepClean is not liable for any
            claims, damages, or injuries arising from interactions or services
            provided by these third parties.
          </p>
          <h2>4. Representations and Warranties</h2>
          <p>
            By using our platform, you warrant that you are at least 18 years
            old and capable of entering into binding agreements. You agree to
            comply with all applicable laws while using our platform and are
            solely responsible for securing your account credentials.
          </p>
          <h2>5. Referrals</h2>
          <p>
            If you hire any cleaner introduced through WeDeepClean
            independently, you agree to pay a one-time referral fee of $3,000,
            regardless of whether the employment is for recurring or one-time
            services.
          </p>
          <h2>6. License and Restrictions</h2>
          <p>
            We grant you a non-exclusive, non-transferable license to use our
            platform for personal, non-commercial purposes. You agree not to
            sell, sublicense, or distribute the platform, reverse engineer its
            source code, or use it for harmful or illegal activities.
          </p>
          <h2>7. Payment Terms</h2>
          <p>
            Service fees are due immediately upon completion. Refunds may be
            issued at our sole discretion. Pricing is subject to change without
            prior notice.
          </p>
          <h2>8. Intellectual Property</h2>
          <p>
            All intellectual property rights, including trademarks, logos, and
            software, are owned by WeDeepClean or its licensors. No part of this
            platform may be copied, modified, or used without prior written
            consent.
          </p>
          <h2>9. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your account if you
            violate this Agreement. WeDeepClean will not be liable for any
            disruptions resulting from such actions.
          </p>
          <h2>10. Disclaimer of Warranties</h2>
          <p>
            Our services are provided on an “as-is” basis. We do not guarantee
            that services will meet your expectations or that the platform will
            be free of errors or interruptions.
          </p>
          <h2>11. Limitation of Liability</h2>
          <p>
            WeDeepClean’s liability is limited to the amount you paid for
            services in the six months preceding the claim. We are not liable
            for indirect, incidental, or consequential damages arising from your
            use of the platform.
          </p>
          <h2>12. Governing Law and Dispute Resolution</h2>
          <p>
            This Agreement is governed by the laws of Ontario, Canada. Any
            disputes shall be resolved exclusively through binding arbitration
            in Ontario. You waive your right to participate in class-action
            lawsuits.
          </p>
          <h2>13. Privacy Policy</h2>
          <p>
            WeDeepClean values your privacy. Personal information collected is
            used solely for the purposes specified. We implement safeguards to
            protect your data from unauthorized access or misuse. By using our
            platform, you consent to our collection and use of information as
            outlined in our privacy policy.
          </p>
          <h2>14. General Provisions</h2>
          <p>
            No agency, partnership, or employment relationship is created
            between you and WeDeepClean. This Agreement represents the entire
            understanding between you and WeDeepClean.
          </p>
          <p>
            For any questions or concerns regarding these Terms and Conditions,
            please{" "}
            <a href="">
              <span>
                <b>Contact us</b>
              </span>
            </a>{" "}
            through our website.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
