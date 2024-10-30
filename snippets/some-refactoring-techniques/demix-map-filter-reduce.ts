type User = {
  name: string;
  birtDate: number;
  country: string;
};
const users: ReadonlyArray<User> = [];
function getAge(_: User) {
  return 1;
}
function withinAgeSpan(_: User & { age: number }) {
  return true;
}

{
  //#region 1

  const what = users.reduce((soFar, current) => {
    const age = getAge(current);
    const userWithAge = { ...current, age };
    if (!withinAgeSpan(userWithAge)) {
      return soFar;
    }
    let group = soFar[userWithAge.country];
    if (!group) {
      group = [];
    }
    group.push(userWithAge);
    return { ...soFar, [userWithAge.country]: group };
  }, {});

  //#endregion
}

{
  //#region 2

  const what = users
    .map((current) => {
      const age = getAge(current);
      const userWithAge = { ...current, age };
      return userWithAge;
    })
    .reduce((soFar, userWithAge) => {
      if (!withinAgeSpan(userWithAge)) {
        return soFar;
      }
      let group = soFar[userWithAge.country];
      if (!group) {
        group = [];
      }
      group.push(userWithAge);
      return { ...soFar, [userWithAge.country]: group };
    }, {});

  //#endregion
}

{
  //#region 3

  const what = users
    .map((current) => {
      const userWithAge = { ...current, age: getAge(current) };
      return userWithAge;
    })
    .reduce((soFar, userWithAge) => {
      if (!withinAgeSpan(userWithAge)) {
        return soFar;
      }
      let group = soFar[userWithAge.country];
      if (!group) {
        group = [];
      }
      group.push(userWithAge);
      return { ...soFar, [userWithAge.country]: group };
    }, {});

  //#endregion
}

{
  //#region 4

  const what = users
    .map((current) => {
      return { ...current, age: getAge(current) };
    })
    .reduce((soFar, userWithAge) => {
      if (!withinAgeSpan(userWithAge)) {
        return soFar;
      }
      let group = soFar[userWithAge.country];
      if (!group) {
        group = [];
      }
      group.push(userWithAge);
      return { ...soFar, [userWithAge.country]: group };
    }, {});

  //#endregion
}

{
  //#region 5

  const what = users
    .map((current) => ({ ...current, age: getAge(current) }))
    .reduce((soFar, userWithAge) => {
      if (!withinAgeSpan(userWithAge)) {
        return soFar;
      }
      let group = soFar[userWithAge.country];
      if (!group) {
        group = [];
      }
      group.push(userWithAge);
      return { ...soFar, [userWithAge.country]: group };
    }, {});

  //#endregion
}

{
  //#region 6

  const what = users
    .map((current) => ({ ...current, age: getAge(current) }))
    .filter(withinAgeSpan)
    .reduce((soFar, userWithAge) => {
      let group = soFar[userWithAge.country];
      if (!group) {
        group = [];
      }
      group.push(userWithAge);
      return { ...soFar, [userWithAge.country]: group };
    }, {});

  //#endregion
}

{
  //#region 7

  const what = Object.groupBy(
    users
      .map((current) => ({ ...current, age: getAge(current) }))
      .filter(withinAgeSpan),
    (userWithAge) => userWithAge.country
  );

  //#endregion
}
