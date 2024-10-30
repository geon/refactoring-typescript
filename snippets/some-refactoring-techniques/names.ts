{
  //#region 1

  const what = Object.groupBy(
    users
      .map((current) => ({ ...current, age: getAge(current) }))
      .filter(withinAgeSpan),
    (userWithAge) => userWithAge.country
  );

  //#endregion
}

{
  //#region 2

  const usersWithinAgeSpanByCountry = Object.groupBy(
    users
      .map((current) => ({ ...current, age: getAge(current) }))
      .filter(withinAgeSpan),
    (userWithAge) => userWithAge.country
  );

  //#endregion
}

{
  //#region 3

  users.map((current) => ({ ...current, age: getAge(current) }));

  //#endregion
}

{
  //#region 4

  users.map((user) => ({ ...user, age: getAge(user) }));

  //#endregion
}

{
  //#region 5

  users.map((u) => ({ ...u, age: getAge(u) }));

  //#endregion
}

{
  //#region 6

  users.map((u) => u.age);

  //#endregion
}

{
  //#region 7

  users.map((x) => x.age);

  //#endregion
}
