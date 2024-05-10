import { ID_URL } from "../smys_details/ID_URL";


// const URL = process.env.NEXT_PUBLIC_VERCEL_URL
//   ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`
//   : "http://localhost:3000/api";

const URL = "https://hostel-backend-nwey.onrender.com/api"
// const URL = "http://localhost:3000/api";

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
    const response = await fetch(`${URL}/photo`, {
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
    const response = await fetch(`${URL}/getImages`, {
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
