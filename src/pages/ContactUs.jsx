import React, { useEffect } from "react";
import { ContactForm } from "../components/contact/ContactForm";
import { ReachOut } from "../components/contact/ReachOut";

export const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="px-3 md:px-10 lg:px-20">
      <ContactForm />
      <ReachOut />
    </section>
  );
};
