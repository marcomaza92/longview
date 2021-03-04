import { BaseUrl, DataUrl } from '../common';

export const displayMovies = async (): Promise<Record<string, any>> => {
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
