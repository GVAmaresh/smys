import { ID_URL } from "../smys_details/ID_URL";


const URL = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`
  : "http://localhost:3000/api";

export const FetchDetails = async (): Promise<any> => {
  try {
    const response = await fetch(`${URL}/details`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Tryning to fetch details")
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to fetch details");
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("Error fetching details:", error.message);
    return null;
  }
};

export const DownloadPhoto = async (): Promise<any> => {
  try {
    const response = await fetch("/api/photo", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch details");
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("Error fetching details:", error.message);
    return null;
  }
};

export const GetImages = async (url: string): Promise<any> => {
  try {
    // https://drive.google.com/drive/folders/1Sz9wqnmMo1LcDkEbT__mlXFtA4c0BOsg?usp=sharing
    // const parts = url.split("/");
    // let folderId = "";
    // if (parts && parts.length > 0) {
    //   folderId = parts.pop()!.split("?")[0];
    // } else {
    //   throw new Error("Invalid URL format");
    // }
    // console.log("Folder ID:", folderId);

    // const newUrl = `https://www.googleapis.com/drive/v2/files/${folderId}/children`;
    // const response = await fetch(newUrl);
    // const data = await response.json();
    // if (!response.ok) {
    //   throw new Error(
    //     data.error.message || "Failed to retrieve folder contents."
    //   );
    // }
    // const fileIds = data.items.map((item: any) => item.id);
    // console.log(fileIds)
    // return fileIds;


    const response = await fetch("/api/getImages", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: url })
    });
    const data = await response.json();
    console.log(data.data)
    return data.data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
