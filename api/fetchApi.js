export default async function (route, type) {
  return await fetch(`${process.env['TIMAPULAN_API_URL']}${route}`, { 
    type: type || 'GET',
    headers: 
      {
        'Authorization': process.env['TIMAPULAN_KEY'],
        'Content-Type': 'application/json'
      } 
  });
}
