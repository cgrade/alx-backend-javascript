export default function handleResponseFromAPI(promise) {
  const obj = { status: 200, body: 'success' };
  promise.then(() => console.log(obj))
    .catch((error) => console.log(new Error(error)))
    .finally(() => console.log('Got a response from the API'));
}
