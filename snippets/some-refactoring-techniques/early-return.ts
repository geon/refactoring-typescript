async function download(): Promise<string | undefined> {
  return "";
}
function parse(_: string): string | undefined {
  return "";
}
function parseSomeMore(_: string): string | undefined {
  return "";
}

function scope_1() {
  //#region 1
  async function downloadAndParse() {
    const response = await download();
    if (response) {
      const parsed = parse(response);
      if (parsed) {
        return parseSomeMore(parsed);
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  }
  //endregion
}

function scope_2() {
  //#region 2
  async function downloadAndParse() {
    const response = await download();
    if (response) {
      const parsed = parse(response);
      if (!parsed) {
        return undefined;
      } else {
        return parseSomeMore(parsed);
      }
    } else {
      return undefined;
    }
  }
  //endregion
}

function scope_3() {
  //#region 3
  async function downloadAndParse() {
    const response = await download();
    if (!response) {
      return undefined;
    } else {
      const parsed = parse(response);
      if (!parsed) {
        return undefined;
      } else {
        return parseSomeMore(parsed);
      }
    }
  }
  //endregion
}

function scope_4() {
  //#region 4
  async function downloadAndParse() {
    const response = await download();
    if (!response) {
      return undefined;
    } else {
      const parsed = parse(response);
      if (!parsed) {
        return undefined;
      }

      return parseSomeMore(parsed);
    }
  }
  //endregion
}

function scope_5() {
  //#region 5
  async function downloadAndParse() {
    const response = await download();
    if (!response) {
      return undefined;
    }

    const parsed = parse(response);
    if (!parsed) {
      return undefined;
    }

    return parseSomeMore(parsed);
  }
  //endregion
}
