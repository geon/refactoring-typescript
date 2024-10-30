const items: ReadonlyArray<{
  one: number;
  two: number;
  three: number;
}> = [];

{
  //#region 1
  type Foo = {
    one: number;
    two: number;
  };

  const result: ReadonlyArray<Foo> = items.map((item) => ({
    one: item.one,
    two: item.two,
    three: item.three,
  }));
  //#endregion
}

{
  //#region 2
  type Foo = {
    one: number;
    two: number;
  };

  const result: ReadonlyArray<Foo> = items.map(
    (item): Foo => ({
      one: item.one,
      two: item.two,
      three: item.three,
    })
  );
  //#endregion
}

{
  //#region 3
  type Foo = {
    one: number;
    two: number;
  };

  const result: ReadonlyArray<Foo> = items.map(
    (item): Foo => ({
      one: item.one,
      two: item.two,
    })
  );
  //#endregion
}

{
  //#region 4
  type Foo = {
    one: number;
    two: number;
  };

  const result = items.map(
    (item): Foo => ({
      one: item.one,
      two: item.two,
    })
  );
  //#endregion
}
