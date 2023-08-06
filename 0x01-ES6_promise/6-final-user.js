import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([user, photo]).then((res) => { 
    const newArry = [];
    for (let i of res) {
      if (i.status === 'fulfilled') {
        newArry.push(i)
        } else {
          i.reason = Error();
          newArry.push(i)
        }
      return newArry;
    }
        
    });
}