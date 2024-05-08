import Heading from "../Font/Heading";
import ContactTemplate from "./ContactTemplate";

interface ContactPros {
  add: string;
  email: string[];
  phno: string[];
  social: string[];
}
export default function Contact({ add, email, phno, social }: ContactPros) {
  return (
    <div className="mt-20 mb-20 contact" id="contact">
      <Heading text={"Contact us"} />
      <ContactTemplate add={add} email={email} phno={phno} social={social} />
    </div>
  );
}
