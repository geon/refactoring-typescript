const items: ReadonlyArray<number> = [];
function foo(_: number) {
  return 1;
}

{
  //#region 1

  const results: Array<number> = [];
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    results.push(foo(item));
  }

  //#endregion
}

{
  //#region 2

  const results: Array<number> = [];
  for (const item of items) {
    results.push(foo(item));
  }

  //#endregion
}

{
  //#region 3

  const results = items.map(foo);

  //#endregion
}
