import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([createUser(), uploadPhoto()])
    .then((results) => {
      const [serResult, upResult] = results;
      console.log(`${upResult.body} ${serResult.firstName} ${serResult.lastName}`);
    })
    .catch(() => {
      console.log(new Error('Signup system offline'));
    });
}
