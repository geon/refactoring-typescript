function scope_1() {
  //#region 1
  function hideKey(strategy: string): string {
    switch (strategy) {
      case "bird":
        return "on top of cupboard";
      case "fish":
        return "in shoe";
      case "mittimellan":
        return "in flower pot";
      default:
        return "";
    }
  }
  //#endregion
}

function scope_2() {
  //#region 2
  function hideKey(strategy: string): string {
    switch (strategy) {
      case "bird":
        return "on top of cupboard";
      case "fish":
        return "in shoe";
      case "mittimellan":
        return "in flower pot";
      default:
        throw new Error("Unknown strategy.");
    }
  }
  //#endregion
}

function scope_3() {
  //#region 3
  type Strategy = "bird" | "fish" | "mittimellan";

  function hideKey(strategy: Strategy): string {
    switch (strategy) {
      case "bird":
        return "on top of cupboard";
      case "fish":
        return "in shoe";
      case "mittimellan":
        return "in flower pot";
      default:
        throw new Error("Unknown strategy.");
    }
  }
  //#endregion
}

function scope_4() {
  //#region 4
  type Strategy = "bird" | "fish" | "mittimellan";

  function hideKey(strategy: Strategy): string {
    switch (strategy) {
      case "bird":
        return "on top of cupboard";
      case "fish":
        return "in shoe";
      case "mittimellan":
        return "in flower pot";
      default:
        return strategy satisfies never;
    }
  }
  //#endregion
}
