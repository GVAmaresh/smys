// https://drive.google.com/file/d/1JtA2Xis3Jh5sH4aPPC7t8tSBUCUVJZGg/view?usp=drive_link
// https://drive.google.com/thumbnail?id=1mdfv4yNA8EtTf3ZAniCGMFdDy6c3vmc5&sz=w1000

export const ImageConvert = (url: string) => {
  if (!url) return "" 
  let file_id = url;
  if (url.includes("https")) {
    let parts = url.split("/");
    file_id = parts[parts.length - 2];
  }
  let new_url_prefix = "https://drive.google.com/thumbnail?id=";
  let new_url_suffix = "&sz=w1000";
  return new_url_prefix + file_id + new_url_suffix;
};

export const ImageIDConvert = (file_id: string) => {

  let new_url_prefix = "https://drive.google.com/file/d/";
  let new_url_suffix = "/view?usp=drive_link";
  return new_url_prefix + file_id + new_url_suffix;
};
