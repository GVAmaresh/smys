import { db } from "./firebase";
import { getDatabase, ref, get } from "firebase/database";

export const getHomePageEnglish = async () => {
  const dbRef = ref(db, "english");
  const snapshot = await get(dbRef);
  if (snapshot.exists()) {
    console.log(snapshot.val());
    const { Address, Committe, Events, Founders, Intro, Journey, Hostel } =
      snapshot.val();
    console.log(Address);
    return { Address, Committe, Events, Founders, Intro, Journey, Hostel };
  } else {
    alert("error");
  }
};

export const getEventPageEnglish = async () => {
  const dbRef = ref(db, "english");
  const snapshot = await get(dbRef);
  if (snapshot.exists()) {
    console.log(snapshot.val());
    const { Events } = snapshot.val();
    console.log(Events);
    return { Events };
  } else {
    alert("error");
  }
};

export const getAboutPageEnglish = async () => {
  const dbRef = ref(db, "english");
  const snapshot = await get(dbRef);
  if (snapshot.exists()) {
    console.log(snapshot.val());
    const { Founders, Committe, Satpanta } = snapshot.val();
    return { Founders, Committe, Satpanta };
  } else {
    alert("error");
  }
};

export const getGalleryPageEnglish = async () => {
  const dbRef = ref(db, "english");
  const snapshot = await get(dbRef);
  if (snapshot.exists()) {
    console.log(snapshot.val());
    const { Gallery } = snapshot.val();
    return { Gallery };
  } else {
    alert("error");
  }
};

export const fetchDataFromFirebase = async () => {
  const dbRef = ref(db, "english");
  const snapshot = await get(dbRef);
  if (snapshot.exists()) {
    const data = snapshot.val();
    const {
      Hostel,
      Address,
      Journey,
      Committe,
      Founders,
      Intro,
      Events,
      Gallery,
      Satpanta,
    } = data;

    const structuredData = {
      Address: {
        add: Address.add,
        email: Address.email,
        phno: Address.phno,
        social: Address.social,
      },
      Journey: Journey,
      Committe: Object.values(Committe),
      Founders: Object.values(Founders),
      Intro: {
        Brahmin: {
          description: Intro.Brahmin.description,
        },
        Madhwa: {
          description: Intro.Madhwa.description,
        },
        hostel: Hostel,
      },
      Events: {
        Historical: Object.values(Events.Historical),
        Jyana: Object.values(Events.Jyana),
      },
      Gallery: Object.values(Gallery),
      Satpanta: Object.values(Satpanta),
    };
    console.log(structuredData);
    return structuredData;
  } else {
    alert("Error fetching data from Firebase");
    return null;
  }
};

export const updateDataFromFirebase = async (data) => {
  const dbRef = ref(db, "english");
  try {
    await set(dbRef, data);
    console.log("Data updated successfully");
  } catch (error) {
    console.error("Error updating data:", error.message);
    throw error;
  }
};

export const AuthDetailsGDrive = async () => {
  const dbRef = ref(db, "english");
  const snapshot = await get(dbRef);
  if (snapshot.exists()) {
    const { authKey } = snapshot.val();
    return { authKey };
  } else {
    alert("error");
  }
};
