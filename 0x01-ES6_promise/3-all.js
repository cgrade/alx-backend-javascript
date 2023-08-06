import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([createUser(), uploadPhoto()])
    .then((results) => {
      const [createUserResult, uploadPhotoResult] = results;
      console.log(`${uploadPhotoResult.body} ${createUserResult.firstName} ${createUserResult.lastName}`);
    })
    .catch((error = new Error()) => {
      console.log(error('Signup system offline'));
    });
}
