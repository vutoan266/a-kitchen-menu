const get = (url, params) =>
  fetch(url + new URLSearchParams(params)).then(async (response) => {
    const resObj = await response.json();
    if (response.status === 200) {
      return resObj;
    } else {
      throw resObj.message;
    }
  });

const fetcher = {
  get,
};

export default fetcher;
