export interface CommitteeMember {
  name: string;
  age: string;
  position: string;
  photo: string;
  description: string;
  gender: string;
  email: string;
  phone: string;
}
export interface Journey {
  photo: string;
  description: string;
}
export interface Founder {
  name: string;
  age: string;
  photo: string;
  gender: string;
  position: string;
  email: string;
  phone: string;
  description:string;
}

interface JyanaEvent {
  title: string;
  photo: string;
  description: string;
}

interface Event {
  Historical: string;
  Annual: string;
  Jyana: { [key: string]: JyanaEvent };
}

export interface SatpantaMember {
  name: string;
  position: string;
  study: string;
  description:string;
  email:string
  phone:string
}


export interface Satpanta {
  [key: string]: SatpantaMember;
}


interface IntroProps{
  photo: string;
  description: string; 
}
interface Intro {
  Brahmin: IntroProps;
  Madhwa: IntroProps;
}

interface Data {
  Hostel: string;
  Journey:  Journey ;
  Committe: { [key: string]: CommitteeMember };
  Founders: { [key: string]: Founder };
  Events: Event;
  Satpanta: Satpanta;
  Gallery: string;
  Intro: Intro;
  Address: {
    add: string;
    email: string[];
    phno: string[];
    social: string[];
  };
}

export default Data;
