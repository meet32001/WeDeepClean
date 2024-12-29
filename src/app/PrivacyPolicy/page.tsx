"use client";

import React, { useEffect } from "react";
import styles from "./PrivacyPolicy.module.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useRouter } from "next/navigation";

const PrivacyPolicy: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router]);

  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <div className={styles.privacyContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>Privacy Policy</h1>
        </header>
        <section className={styles.content}>
          <p>
            <strong>Effective Date:</strong> Jan 30, 2025
            <br />
            <strong>Last Updated:</strong> Jan 30, 2025
          </p>
          <p>
            WeDeepClean (“we,” “us,” or “our”) is committed to protecting the
            privacy and security of your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you engage with our services, including through our
            website, booking forms, and marketing activities. By using our
            services, you agree to this Privacy Policy.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We collect personal information when you interact with WeDeepClean
            via booking forms, lead forms, or other communication channels. This
            may include:
          </p>
          <h3>a. Personal Identification Information</h3>
          <ul>
            <li>Full Name: To identify you.</li>
            <li>
              Email Address: For booking confirmations, service updates, and
              marketing communications.
            </li>
            <li>
              Phone Number: For service communication, scheduling, and
              promotional SMS messages.
            </li>
          </ul>
          <h3>b. Service-Related Information</h3>
          <ul>
            <li>
              Type of Cleaning Service: Residential, commercial, or specialty
              services.
            </li>
            <li>
              Property Details: Number of bedrooms, bathrooms, and other
              cleaning needs.
            </li>
            <li>
              Additional Instructions or Preferences: To personalize your
              cleaning experience.
            </li>
          </ul>
          <h3>c. Payment Information</h3>
          <p>
            We may collect payment details for services, but WeDeepClean does
            not store credit card numbers or sensitive financial information
            directly. We use third-party payment processors that adhere to
            industry security standards.
          </p>
          <h3>d. Automatically Collected Information</h3>
          <p>
            When you interact with our website, we may collect data through
            cookies, web beacons, and server logs, including:
          </p>
          <ul>
            <li>IP Address</li>
            <li>Browser Type</li>
            <li>Operating System</li>
            <li>Device Information</li>
            <li>Pages Viewed</li>
            <li>Date and Time of Visit</li>
          </ul>
          <p>This helps us analyze trends and improve user experience.</p>

          <h2>2. How We Use Your Information</h2>
          <h3>a. Service Provision</h3>
          <ul>
            <li>Managing bookings and delivering cleaning services.</li>
            <li>Sending booking confirmations, reminders, and updates.</li>
            <li>Responding to inquiries and customer service issues.</li>
          </ul>
          <h3>b. Marketing and Promotions</h3>
          <p>
            With your consent, we may use your information for marketing,
            including:
          </p>
          <ul>
            <li>Sending promotional emails or SMS messages.</li>
            <li>Analyzing preferences to tailor content.</li>
          </ul>
          <p>
            You can withdraw consent at any time by clicking “unsubscribe” on
            emails or replying “STOP” to SMS messages.
          </p>
          <h3>c. Business Operations and Improvements</h3>
          <ul>
            <li>
              Enhancing our website and services based on feedback and
              analytics.
            </li>
            <li>Analyzing marketing campaign performance.</li>
          </ul>
          <h3>d. Legal Compliance</h3>
          <p>
            We may use personal information to comply with legal obligations or
            to protect our rights.
          </p>

          <h2>3. Sharing Your Information</h2>
          <p>
            We do not sell, rent, or share your personal information with third
            parties for marketing purposes. We may share data in the following
            cases:
          </p>
          <h3>a. Service Providers</h3>
          <ul>
            <li>Payment processors</li>
            <li>Email and SMS platforms</li>
            <li>Customer service software</li>
          </ul>
          <h3>b. Legal Requirements</h3>
          <p>
            We may disclose your information to comply with legal obligations or
            protect our legal rights.
          </p>
          <h3>c. Business Transfers</h3>
          <p>
            If WeDeepClean is involved in a merger or sale, your data may be
            transferred as part of the business.
          </p>

          <h2>4. Data Retention</h2>
          <p>
            We retain personal information as long as necessary for the purposes
            outlined or as required by law. Once no longer needed, we will
            delete or anonymize your data.
          </p>

          <h2>5. Your Privacy Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>
              <strong>Access and Rectification:</strong> Request access to or
              correction of your data.
            </li>
            <li>
              <strong>Data Portability:</strong> Receive a copy of your
              information in a structured format.
            </li>
            <li>
              <strong>Right to Erasure:</strong> Request deletion of your
              information, subject to legal obligations.
            </li>
            <li>
              <strong>Withdraw Consent:</strong> Withdraw consent for marketing
              communications.
            </li>
            <li>
              <strong>Restrict Processing:</strong> Request restricted
              processing in certain cases.
            </li>
          </ul>
          <p>To exercise these rights, contact us at hello@wedeepclean.com.</p>

          <h2>6. Data Security</h2>
          <p>
            We employ appropriate measures to protect your data, including
            encryption, secure servers, and regular security assessments.
            However, no transmission over the Internet is entirely secure.
          </p>

          <h2>7. International Data Transfers</h2>
          <p>
            Your data may be transferred, stored, or processed in Canada or
            other countries where our providers are located, in compliance with
            privacy laws.
          </p>

          <h2>8. Cookies</h2>
          <p>
            Our website uses cookies to enhance your experience. You can manage
            cookie settings through your browser.
          </p>

          <h2>9. Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. We encourage you to
            review it to stay informed of any changes.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            For questions, concerns, or requests regarding this Privacy Policy:
          </p>
          <p>
            <strong>WeDeepClean</strong>
            <br />
            Email: hello@wedeepclean.ca
            <br />
            Phone: +1
            <br />
            Address: 
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;