import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();
  Promise.all([user, photo])
    .then((results) => {
      console.log(`${results[1].body} ${results[0].firstName} ${results[0].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
