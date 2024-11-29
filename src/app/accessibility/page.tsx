"use client";

import BlurFade from "@/components/ui/blur-fade";
import React from "react";

const AccessibilityPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <BlurFade delay={0.22}>
        <h1 className="text-4xl font-bold mb-6">Accessibility Statement</h1>
      </BlurFade>

      <BlurFade delay={0.33}>
        <p className="mb-8">
          At <strong>[Your Name/Website Name]</strong>, our mission is to make the
          web accessible and inclusive for everyone. Accessibility is at the heart
          of our design and development process, ensuring that individuals of all
          abilities, including those with disabilities or neurodivergent needs, can
          seamlessly interact with our content and features. We believe that a truly
          inclusive digital space is essential for fostering connection, creativity,
          and empowerment.
        </p>
      </BlurFade>

      <hr className="my-8" />

      <BlurFade delay={0.44}>
        <h2 className="text-2xl font-semibold mb-4">Our Accessibility Goals</h2>
      </BlurFade>

      <BlurFade delay={0.44}>
        <p className="mb-6">
          We are dedicated to providing a website experience that meets or exceeds
          the standards of the <strong>Web Content Accessibility Guidelines (WCAG)
            2.1</strong> at the AA level. These guidelines help ensure that our site
          is:
        </p>
      </BlurFade>

      <ul className="list-disc pl-6">
        <BlurFade delay={0.55}>
          <li><strong>Perceivable</strong>: Information is presented in ways that everyone can recognize and understand, including those using assistive technologies.</li>
        </BlurFade>
        <BlurFade delay={0.66}>
          <li><strong>Operable</strong>: All site functionality is accessible through a variety of input methods, such as keyboards and screen readers.</li>
        </BlurFade>
        <BlurFade delay={0.77}>
          <li><strong>Understandable</strong>: Content is clear, concise, and organized in a predictable and intuitive manner.</li>
        </BlurFade>
        <BlurFade delay={0.88}>
          <li><strong>Robust</strong>: The website works across a wide range of devices, browsers, and assistive technologies.</li>
        </BlurFade>
      </ul>

      <hr className="my-8" />

      <BlurFade delay={0.99}>
        <h2 className="text-2xl font-semibold mb-4">Designing for Everyone</h2>
      </BlurFade>

      <BlurFade delay={0.99}>
        <p className="mb-6">
          We incorporate accessibility principles into every step of our design and
          development process. Here’s how we achieve this:
        </p>
      </BlurFade>

      <ul className="list-disc pl-6">
        <BlurFade delay={0.99}>
          <li><strong>Clean and Consistent Layouts</strong>: We create intuitive designs that minimize cognitive load and make navigation straightforward for all users.</li>
        </BlurFade>
        <BlurFade delay={1.2}>
          <li><strong>Text Alternatives</strong>: Images, videos, and other non-text content include descriptive alt text, captions, or transcripts to ensure users with visual or auditory impairments can access the same information.</li>
        </BlurFade>
        <BlurFade delay={1.3}>
          <li><strong>Keyboard Accessibility</strong>: All website functions are accessible without a mouse, ensuring usability for individuals relying on keyboard navigation or alternative input devices.</li>
        </BlurFade>
        <BlurFade delay={1.4}>
          <li><strong>Contrast and Color Use</strong>: We follow contrast ratio standards to ensure text is readable against its background, benefiting users with low vision or color blindness.</li>
        </BlurFade>
        <BlurFade delay={1.5}>
          <li><strong>Responsive Design</strong>: Our site adapts to different screen sizes and orientations, maintaining usability on desktops, tablets, and mobile devices.</li>
        </BlurFade>
      </ul>

      <hr className="my-8" />

      <BlurFade delay={1.6}>
        <h2 className="text-2xl font-semibold mb-4">Enhancing Accessibility for Neurodivergent Users</h2>
      </BlurFade>

      <BlurFade delay={1.6}>
        <p className="mb-6">
          We recognize that web accessibility is not one-size-fits-all. To make our
          site more inclusive for neurodivergent individuals, we:
        </p>
      </BlurFade>

      <ul className="list-disc pl-6">
        <BlurFade delay={1.6}>
          <li>Provide clear navigation structures and consistent page layouts.</li>
        </BlurFade>
        <BlurFade delay={1.7}>
          <li>Minimize distracting elements such as autoplay animations or videos.</li>
        </BlurFade>
        <BlurFade delay={1.8}>
          <li>Offer adjustable text sizes and themes for personalized viewing experiences.</li>
        </BlurFade>
        <BlurFade delay={1.9}>
          <li>Use plain language to make content easier to understand.</li>
        </BlurFade>
        <BlurFade delay={2}>
          <li>Include focus indicators to guide users as they interact with the website.</li>
        </BlurFade>
      </ul>

      <hr className="my-8" />

      <BlurFade delay={2.1}>
        <h2 className="text-2xl font-semibold mb-4">Testing and Validation</h2>
      </BlurFade>

      <BlurFade delay={2.1}>
        <p className="mb-6">
          To ensure our website remains accessible, we regularly test it with a
          variety of tools and methods, including:
        </p>
      </BlurFade>

      <ul className="list-disc pl-6">
        <BlurFade delay={2.1}>
          <li><strong>Automated Testing</strong>: Using tools like Lighthouse, Axe, and WAVE to identify accessibility issues.</li>
        </BlurFade>
        <BlurFade delay={2.2}>
          <li><strong>Manual Testing</strong>: Reviewing the site with screen readers (e.g., NVDA, JAWS, VoiceOver) and keyboard navigation to simulate user experiences.</li>
        </BlurFade>
        <BlurFade delay={2.3}>
          <li><strong>User Feedback</strong>: Engaging with individuals from diverse communities to identify areas for improvement and validate our accessibility efforts.</li>
        </BlurFade>
      </ul>

      <hr className="my-8" />

      <BlurFade delay={2.4}>
        <h2 className="text-2xl font-semibold mb-4">Continuous Improvement</h2>
      </BlurFade>

      <BlurFade delay={2.4}>
        <p className="mb-6">
          Accessibility is an ongoing journey. Technology evolves, standards improve,
          and user needs change over time. To keep pace, we commit to:
        </p>
      </BlurFade>

      <ul className="list-disc pl-6">
        <BlurFade delay={2.5}>
          <li>Regularly auditing our website for compliance with current accessibility standards.</li>
        </BlurFade>
        <BlurFade delay={2.6}>
          <li>Staying informed about updates to WCAG and other guidelines.</li>
        </BlurFade>
        <BlurFade delay={2.7}>
          <li>Prioritizing feedback from users to identify and address potential barriers.</li>
        </BlurFade>
      </ul>

      <hr className="my-8" />

      <BlurFade delay={2.8}>
        <h2 className="text-2xl font-semibold mb-4">Feedback and Support</h2>
      </BlurFade>

      <BlurFade delay={2.8}>
        <p className="mb-6">
          We value your input and are here to help if you experience any accessibility
          challenges while using our website. If you have suggestions, encounter
          barriers, or need assistance accessing any part of our site, please contact
          us:
        </p>
      </BlurFade>

      <BlurFade delay={3}>
        <ul className="list-disc pl-6">
          <li><strong>Email</strong>: [Your Email Address]</li>
          <li><strong>Phone</strong>: [Your Phone Number, optional]</li>
          <li><strong>Contact Form</strong>: [Link to your contact form]</li>
        </ul>
      </BlurFade>

      <BlurFade delay={3.1}>
        <p className="mt-4">
          We aim to respond to all inquiries promptly and take immediate steps to
          address accessibility concerns.
        </p>
      </BlurFade>

      <hr className="my-8" />

      <BlurFade delay={3.2}>
        <h2 className="text-2xl font-semibold mb-4">Commitment to an Inclusive Future</h2>
      </BlurFade>

      <BlurFade delay={3.3}>
        <p className="mb-6">
          By prioritizing accessibility, we’re not only adhering to standards but actively
          contributing to a more equitable internet. Thank you for supporting our mission
          to create an inclusive digital experience that empowers all users, regardless
          of ability.
        </p>
      </BlurFade>

      <BlurFade delay={3.4}>
        <p>
          Together, we can build a better web for everyone.
        </p>
      </BlurFade>
    </div>
  );
};

export default AccessibilityPage;
