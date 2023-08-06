import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([createUser(), uploadPhoto()])
    .then((results) => {
      const [serResult, upResult] = results;
      console.log(`${upResult.body} ${serResult.firstName} ${serResult.lastName}`);
    })
    .catch((error) => {
      console.log(error('Signup system offline'));
    });
}
