import { db } from "./firebase";
import { getDatabase, ref, get, set } from "firebase/database";
import { GetImages } from "@/lib/FetchDetails/Fetch";

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

// export const AuthDetailsGDrive = async () => {
//   const dbRef = ref(db, "english");
//   const snapshot = await get(dbRef);
//   if (snapshot.exists()) {
//     const { authKey } = snapshot.val();
//     return { authKey };
//   } else {
//     alert("error");
//   }
// };
export const UpdatePhoto = async () => {
  const dbRef = ref(db, "english");
  const snapshot = await get(dbRef);
  if (snapshot.exists()) {
    const data = snapshot.val();
    const { Events, Gallery } = data;
    const HistoricalNew = Events.Historical
    const Jnana = Events.Jnana
    const GalleryNew = Gallery
    const Facility = Events.Facility

    const albumRef = ref(db, "english/Album");
    const albumSnapshot = await get(albumRef);
    if (albumSnapshot.exists()) {
      const albumData = albumSnapshot.val();
      const {
        Facility: albumFacility,
        Jnana: albumJnana,
        Gallery: albumGallery,
        Historical: albumHistorical,
      } = albumData;
      console.log("This is new Data = ",Facility, Jnana, HistoricalNew, GalleryNew);

      // { ******************************  Historical ******************************* *** }

      if (HistoricalNew) {
        const imagesData = await GetImages(HistoricalNew);
        const imagesToAdd = [];
        const imagesToDelete = [];
        imagesData.forEach((image) => {
          if (!albumHistorical.includes(image)) {
            imagesToAdd.push(image);
          }
        });
        albumHistorical.forEach((image) => {
          if (!imagesData.includes(image)) {
            imagesToDelete.push(image);
          }
        });

        const editHistoricalRef = ref(db, "english/Album/Historical");
        const editHistoricalSnapshot = await get(editHistoricalRef);
        let updatedHistorical = {};

        if (editHistoricalSnapshot.exists()) {
          updatedHistorical = editHistoricalSnapshot.val();
        }

        imagesToAdd.forEach((image, index) => {
          updatedHistorical[index] = image;
        });

        imagesToDelete.forEach((image) => {
          for (const key in updatedHistorical) {
            if (updatedHistorical[key] === image) {
              delete updatedHistorical[key];
              break;
            }
          }
        });

        try {
          await set(editHistoricalRef, updatedHistorical);
          console.log("Historical data updated successfully");
        } catch (error) {
          console.error("Error updating Historical data:", error.message);
          throw error;
        }
      }

      // { ******************************  Jnana ******************************* *** }

      if (Jnana) {
        const imagesData = await GetImages(Jnana);
        const imagesToAdd = [];
        const imagesToDelete = [];
        imagesData.forEach((image) => {
          if (!albumJnana.includes(image)) {
            imagesToAdd.push(image);
          }
        });
        albumJnana.forEach((image) => {
          if (!imagesData.includes(image)) {
            imagesToDelete.push(image);
          }
        });

        const editJnanaRef = ref(db, "english/Album/Jnana");
        const editJnanaSnapshot = await get(editJnanaRef);
        let updatedJnana = {};

        if (editJnanaSnapshot.exists()) {
          updatedJnana = editJnanaSnapshot.val();
        }

        imagesToAdd.forEach((image, index) => {
          updatedJnana[index] = image;
        });

        imagesToDelete.forEach((image) => {
          for (const key in updatedJnana) {
            if (updatedJnana[key] === image) {
              delete updatedJnana[key];
              break;
            }
          }
        });

        try {
          await set(editJnanaRef, updatedJnana);
          console.log("Jnana data updated successfully");
        } catch (error) {
          console.error("Error updating Jnana data:", error.message);
          throw error;
        }
      }
      // { ******************************  Gallery ******************************* *** }

      if (GalleryNew) {
        const imagesData = await GetImages(GalleryNew);
        const imagesToAdd = [];
        const imagesToDelete = [];
        imagesData.forEach((image) => {
          if (!albumGallery.includes(image)) {
            imagesToAdd.push(image);
          }
        });
        albumGallery.forEach((image) => {
          if (!imagesData.includes(image)) {
            imagesToDelete.push(image);
          }
        });

        const editGalleryRef = ref(db, "english/Album/Gallery");
        const editGallerySnapshot = await get(editGalleryRef);
        let updatedGallery = {};

        if (editGallerySnapshot.exists()) {
          updatedGallery = editGallerySnapshot.val();
        }

        imagesToAdd.forEach((image, index) => {
          updatedGallery[index] = image;
        });

        imagesToDelete.forEach((image) => {
          for (const key in updatedGallery) {
            if (updatedGallery[key] === image) {
              delete updatedGallery[key];
              break;
            }
          }
        });

        try {
          await set(editGalleryRef, updatedGallery);
          console.log("Gallery data updated successfully");
        } catch (error) {
          console.error("Error updating Gallery data:", error.message);
          throw error;
        }
      }
      // { ******************************  Facility ******************************* *** }

      if (Facility) {
        const imagesData = await GetImages(Facility);
        const imagesToAdd = [];
        const imagesToDelete = [];
        imagesData.forEach((image) => {
          if (!albumFacility.includes(image)) {
            imagesToAdd.push(image);
          }
        });
        albumFacility.forEach((image) => {
          if (!imagesData.includes(image)) {
            imagesToDelete.push(image);
          }
        });

        const editFacilityRef = ref(db, "english/Album/Facility");
        const editFacilitySnapshot = await get(editFacilityRef);
        let updatedFacility = {};

        if (editFacilitySnapshot.exists()) {
          updatedFacility = editFacilitySnapshot.val();
        }

        imagesToAdd.forEach((image, index) => {
          updatedFacility[index] = image;
        });

        imagesToDelete.forEach((image) => {
          for (const key in updatedFacility) {
            if (updatedFacility[key] === image) {
              delete updatedFacility[key];
              break;
            }
          }
        });

        try {
          await set(editFacilityRef, updatedFacility);
          console.log("Facility data updated successfully");
        } catch (error) {
          console.error("Error updating Facility data:", error.message);
          throw error;
        }
      }
    } else {
      console.log("Album data does not exist");
      return { message: "Couldn't Updated Facility", status: "fail" };
    }
  } else {
    console.log("English data does not exist");
    return { message: "Couldn't Updated Facility", status: "fail" };
  }
  return { message: "Successfully Updated Facility", status: "success" };
};

export const GetFacilityPhoto = async () => {
  const dbRef = ref(db, "english/Album");
  const snapshot = await get(dbRef);
  if (snapshot.exists()) {
    const { Facility } = snapshot.val();
    return { Facility };
  } else {
    alert("error");
  }
};

export const GetGalleryPhoto = async () => {
  const dbRef = ref(db, "english/Album");
  const snapshot = await get(dbRef);
  if (snapshot.exists()) {
    const { Gallery } = snapshot.val();
    return { Gallery };
  } else {
    alert("error");
  }
};

export const GetJnanaPhoto = async () => {
  const dbRef = ref(db, "english/Album");
  const snapshot = await get(dbRef);
  if (snapshot.exists()) {
    const { Jnana } = snapshot.val();
    return { Jnana };
  } else {
    alert("error");
  }
};

export const GetHistoricalPhoto = async () => {
  const dbRef = ref(db, "english/Album");
  const snapshot = await get(dbRef);
  if (snapshot.exists()) {
    const { Historical } = snapshot.val();
    return { Historical };
  } else {
    alert("error");
  }
};
