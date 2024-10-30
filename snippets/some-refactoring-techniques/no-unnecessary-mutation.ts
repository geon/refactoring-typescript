const baz = true;
function bar() {
  return 1;
}
function fubar() {
  return 1;
}

{
  //#region 1
  let foo = bar();
  if (baz) {
    foo = fubar();
  }
  //#endregion
}

{
  //#region 2
  const foo = baz ? bar() : fubar();
  //#endregion
}
