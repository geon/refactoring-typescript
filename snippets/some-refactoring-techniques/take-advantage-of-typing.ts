const myMap = new Map<string, { someMethod: () => void }>();
{
  //#region 1
  const key = "foo";
  const exists = myMap.has(key);
  if (exists) {
    const foo = myMap.get(key);
    foo!.someMethod();
  }
  //#endregion
}

{
  const exists = true;
  //#region 2
  const key = "foo";
  if (exists) {
    const foo = myMap.get(key);
    foo!.someMethod();
  }
  //#endregion
}

{
  //#region 3
  const key = "foo";
  const foo = myMap.get(key);
  if (foo) {
    foo!.someMethod();
  }
  //#endregion
}

{
  //#region 4
  const key = "foo";
  const foo = myMap.get(key);
  if (foo) {
    foo.someMethod();
  }
  //#endregion
}
