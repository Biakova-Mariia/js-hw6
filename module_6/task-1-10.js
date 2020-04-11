'use strict';

import users from './users.js';

/*=============================================================================================*/
/* 1 task*/

const getUserNames = users =>
  users.map(user => {
    return user.name;
  });

console.log(getUserNames(users));
// [
//   'Moore Hensley',
//   'Sharlene Bush',
//   'Ross Vazquez',
//   'Elma Head',
//   'Carey Barr',
//   'Blackburn Dotson',
//   'Sheree Anthony',
// ];

/*==============================================================================================*/
/* 2 task*/

const getUsersWithEyeColor = (users, color) =>
  users.filter(user => {
    return user.eyeColor === color;
  });

console.table(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

/*=============================================================================================*/
/* 3 task*/

const getUsersWithGender = (users, gender) => {
  return users.filter(user => user.gender === gender).map(user => user.name);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

/*=============================================================================================*/
/* 4 task*/

const getInactiveUsers = users => users.filter(user => !user.isActive);

console.table(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

/*==============================================================================================*/
/* 5 task*/

const getUserWithEmail = (users, email) =>
  users.find(user => user.email === email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

/*==============================================================================================*/
/* 6 task*/

const getUsersWithAge = (users, min, max) =>
  users.filter(user => user.age > min && user.age < max);

console.table(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.table(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

/*==============================================================================================*/
/* 7 task*/

const calculateTotalBalance = users =>
  users.reduce((totalBalance, user) => totalBalance + user.balance, 0);

console.log(calculateTotalBalance(users)); // 20916

/*=============================================================================================*/
/* 8 task*/

const getUsersWithFriend = (users, friendName) =>
  users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

/*===============================================================================================*/
/* 9 task*/

const getNamesSortedByFriendsCount = users =>
  users
    .sort(
      (prevUser, nextUser) => prevUser.friends.length - nextUser.friends.length,
    )
    .map(user => user.name);

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

/*==============================================================================================*/
/* 10 task*/
// Получить массив всех умений всех пользователей (поле skills),
// при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

// const getSkills = users.reduce((acc, user) => {
//   acc.push(...user.skills);
//   return acc;
// }, []);

// const filtered = getSkills =>
//   getSkills.filter((acc, index) => {
//     return index === getSkills.indexOf(acc);
//   });

// const filtrUsers = filtered(getSkills);

// const sorted = filtrUsers => filtrUsers.sort();

// // console.log(getSkills);
// // console.table(filtered(getSkills));
// console.log(sorted(filtrUsers));

const getSortedUniqueSkills = users =>
  users
    .reduce((acc, user) => {
      acc.push(...user.skills);
      return acc;
    }, [])
    .filter((skill, index, arr) => {
      return index === arr.indexOf(skill);
    })
    .sort();

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
