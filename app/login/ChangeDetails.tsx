import React, { useState, useEffect } from 'react';
import { fetchDataFromFirebase, updateDataFromFirebase } from '@/firebase/helper';
import { Committe, Founders, Satpantha } from './Members';
import { ChangeAddress, Intro, Journey } from './Information';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Loading from '@/components/Navbar/Loading';

interface Address {
  add: string;
  email: string[];
  phno: string[];
  social: string[];
}

interface Journey {
  photo: string;
  description: string;
}

interface Intro {
  Brahmin: {
    description: string;
  };
  Madhwa: {
    description: string;
  };
  hostel: string;
}

interface Events {
  Annual?: object[];
  Historical: object[];
  Jyana: object[];
}

interface State {
  Address: Address;
  Journey: Journey;
  Committe: {
    age: string;
    description: string;
    email: string;
    gender: string;
    name: string;
    phone: string;
    photo: string;
    position: string;
  }[];
  Founders: {
    age: string;
    description: string;
    email: string;
    gender: string;
    name: string;
    phone: string;
    photo: string;
    position: string;
  }[];
  Intro: Intro;
  Events: Events;
  Gallery: any; 
  Satpanta: {
    name: string;
    description: string;
    email: string;
    phone: string;
    position: string;
    study: string;
  }[];
}

const initialOpenState: State = {
  Address: {
    add: '',
    email: [],
    phno: [],
    social: [],
  },
  Journey: {
    photo: '',
    description: '',
  },
  Committe: [
    {
      age: '',
      description: '',
      email: '',
      gender: '',
      name: '',
      phone: '',
      photo: '',
      position: '',
    },
  ],
  Founders: [
    {
      age: '',
      description: '',
      email: '',
      gender: '',
      name: '',
      phone: '',
      photo: '',
      position: '',
    },
  ],
  Intro: {
    Brahmin: {
      description: '',
    },
    Madhwa: {
      description: '',
    },
    hostel: '',
  },
  Events: {
    Annual: [{}],
    Historical: [{}],
    Jyana: [{}],
  },
  Gallery: '', 
  Satpanta: [
    {
      name: '',
      description: '',
      email: '',
      phone: '',
      position: '',
      study: '',
    },
  ],
};

export default function ChangeDetails() {
  const [open, setOpen] = React.useState<State | null>(null);
  React.useEffect(() => {
    fetchDataFromFirebase().then((data) => {
      if (data) {
        setOpen(data);
      } else {
      }
    });
  }, []);

  const handleChange = (name: string, value: any) => {
    if (open) {
      setOpen((prevState) => ({
        ...(prevState as State),
        [name]: value,
      }));
    }
  };

  if (!open) {
    return <div><Loading/></div>;
  }
  const handleClick = ()=>{
    updateDataFromFirebase(open)
  }
  return (
    <>
      <div className="mb-10">
        <Intro handleChange={handleChange} Intro={open.Intro} />
        <ChangeAddress handleChange={handleChange} Address={open.Address} />
        <Committe handleChange={handleChange} Committe={open.Committe} />
        <Founders handleChange={handleChange} Founders={open.Founders} />
        <Journey handleChange={handleChange} Journey={open.Journey} />
        <Satpantha handleChange={handleChange} Satpantha={open.Satpanta} />
        <div className="ml-28 mt-5 md:ml-48 p-2 ">
          <Button variant="contained" endIcon={<SendIcon />}>
            Update
          </Button>
        </div>
      </div>
    </>
  );
}
