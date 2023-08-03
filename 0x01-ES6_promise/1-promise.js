export default function getFullResponseFromAPI(success) {
  const obj = { status: 200, body: 'Success' };
  if (success === true) {
    return Promise.resolve(obj);
  }
  return Promise.reject(new Error('The fake API is not working currently'));
}
