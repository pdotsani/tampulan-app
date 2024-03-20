import routes from '../config/routes';

export default async function () {
  try {
    const response = await fetch(`${process.env['TIMAPULAN_API_URL']}${routes.GET_TRACKS}`, { 
      headers: 
        {
          'Authorization': process.env['TIMAPULAN_ID_KEY'],
          'Content-Type': 'application/json'
        } 
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }   
}
