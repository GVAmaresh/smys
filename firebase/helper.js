import { db } from "./firebase";
import { getDatabase, ref, get, set } from "firebase/database";
import { GetImages } from "@/lib/FetchDetails/Fetch";
import { AiOutlineConsoleSql } from "react-icons/ai";

export const getHomePageEnglish = async () => {
  const dbRef = ref(db, "english");
  const snapshot = await get(dbRef);
  if (snapshot.exists()) {
    const { Address, Committe, Events, Founders, Intro, Journey, Hostel } =
      snapshot.val();
    return { Address, Committe, Events, Founders, Intro, Journey, Hostel };
  } else {
    alert("error");
  }
};

export const getEventPageEnglish = async () => {
  const dbRef = ref(db, "english");
  const snapshot = await get(dbRef);
  if (snapshot.exists()) {
    const { Events } = snapshot.val();
    return { Events };
  } else {
    alert("error");
  }
};

export const getAboutPageEnglish = async () => {
  const dbRef = ref(db, "english");
  const snapshot = await get(dbRef);
  if (snapshot.exists()) {
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
      Satpanta
    } = data;

    const structuredData = {
      Address: {
        add: Address.add,
        email: Address.email,
        phno: Address.phno,
        social: Address.social
      },
      Journey: Journey,
      Committe: Object.values(Committe),
      Founders: Object.values(Founders),
      Intro: {
        Brahmin: {
          description: Intro.Brahmin.description
        },
        Madhwa: {
          description: Intro.Madhwa.description
        },
        hostel: Hostel
      },
      Events: {
        Historical: Object.values(Events.Historical),
        Jyana: Object.values(Events.Jyana)
      },
      Gallery: Object.values(Gallery),
      Satpanta: Object.values(Satpanta)
    };

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
    // throw error;
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

const updateAlbumData = async (albumRefPath, imagesNew, albumDataKey) => {
  try {
    console.log(albumRefPath, imagesNew)
    const imagesData = await GetImages(imagesNew);
    const imagesToAdd = [];
    const imagesToDelete = [];
    console.log(imagesData)

    const albumSnapshot = await get(ref(db, albumRefPath));
    let updatedAlbum = albumSnapshot.exists() ? albumSnapshot.val() : {};

    imagesData?.forEach(image => {
      if (!albumDataKey.includes(image)) imagesToAdd.push(image);
    });
    albumDataKey.forEach(image => {
      if (!imagesData.includes(image)) imagesToDelete.push(image);
    });

    if (imagesToAdd.length > 0) {
      imagesToAdd.forEach((image, index) => updatedAlbum[index] = image);
      if (imagesToDelete.length > 0) {
        imagesToDelete.forEach(image => {
          for (const key in updatedAlbum) {
            if (updatedAlbum[key] === image) {
              delete updatedAlbum[key];
              break;
            }
          }
        });
      }
      
      await set(ref(db, albumRefPath), updatedAlbum);
      console.log(`${albumRefPath} data updated successfully`);
      return true
    } else {
      console.log(`${albumRefPath} did not update`);
      return false
    }
  } catch (error) {
    console.error(`Error updating ${albumRefPath} data:`, error.message);
    return false;
  }
};

export const UpdatePhoto = async () => {
  try {
    const dbRef = ref(db, 'english');
    const snapshot = await get(dbRef);

    if (!snapshot.exists()) {
      console.log('English data does not exist');
      return { message: "Couldn't update Facility", status: 'fail' };
    }

    const data = snapshot.val();
    const { Events, Gallery } = data;
    const { Historical, Jnana, Facility } = Events;
    const { Album } = data;
    console.log(Gallery)
    console.log(Album)
    if (!Historical || !Jnana || !Facility) {
      console.error('Error updating data');
      return { message: "Couldn't update Facility", status: 'fail' };
    }

    const status_historical = await updateAlbumData('english/Album/Historical', Historical, Album.Historical);
    const status_jnana = await updateAlbumData('english/Album/Jnana', Jnana, Album.Jnana);
    const status_facility = await updateAlbumData('english/Album/Facility', Facility, Album.Facility);
    const status_gallery = await updateAlbumData('english/Album/Gallery', Gallery, Album.Gallery);

    return { message: 'Successfully updated Facility', status: 'success', update:{
      historical: status_historical,
      jnana: status_jnana,
      facility: status_facility,
      gallery: status_gallery
    } };
  } catch (error) {
    console.error('Error in UpdatePhoto:', error.message);
    return { message: "Couldn't update Facility", status: 'fail' };
  }
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

// { ******************************  Notification ******************************* *** }

export const getNotification = async () => {
  const dbRef = ref(db, "english/Notification");
  const snapshot = await get(dbRef);
  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    return null;
  }
};

export const updateNotification = async (notification) => {
  const dbRef = ref(db, "english/Notification");
  try {
    await set(dbRef, notification);
    return { message: "Notification updated successfully", status: "success" };
  } catch (error) {
    console.error("Error updating notification:", error.message);
    return { message: "Error updating notification", status: "fail" };
  }
};
