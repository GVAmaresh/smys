export const ID_URL = (id: string) => {
    let new_url_prefix = "https://drive.google.com/thumbnail?id=";
    let new_url_suffix = "&sz=w1000";
    return new_url_prefix + id + new_url_suffix;
  };
  