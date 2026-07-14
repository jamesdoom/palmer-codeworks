import type { Metadata } from "next";
import { ContactLink } from "./ContactLink";

export const metadata: Metadata = {
  title: "Palmer Codeworks",
  description: "Palmer Codeworks developer services.",
};

export default function Home() {
  return (
    <main className="landing">
      <section className="landing-content" aria-label="Palmer Codeworks">
        <h1>Palmer Codeworks</h1>
      </section>
      <div className="contact-area" aria-label="Contact Palmer Codeworks">
        <ContactLink />
      </div>
      <footer className="site-footer">
        <p>
          Image by{" "}
          <a href="https://pixabay.com/users/niki_emmert-13526667/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7273240">
            Nikolett Emmert
          </a>{" "}
          from{" "}
          <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7273240">
            Pixabay
          </a>
        </p>
        <p>&copy; 2026 Palmer Codeworks. All rights reserved.</p>
      </footer>
    </main>
  );
}
