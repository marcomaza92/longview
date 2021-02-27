import { BaseUrl, DataUrl } from '../common';

export const DisplayData = async () => {
  try {
    const response = await fetch(`${BaseUrl}${DataUrl}`, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
