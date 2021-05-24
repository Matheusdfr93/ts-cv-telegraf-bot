import escapeStringRegexp from "escape-string-regexp";

type argArray = {
  [x: string]: string;
}[];

function createMenuHelpers() {
  const replacer = (text: string, args: argArray): string => {
    let response = text;
    args.forEach((el) => {
      response = response.replace(Object.keys(el)[0], Object.values(el)[0]);
    });
    return response;
  };

  const verifier = (value: string, ctx: any) => {
    const scaped = escapeStringRegexp(value);
    const re = new RegExp(scaped);
    const comparator = ctx.session.textKeyboard.join(",");
    const verified = re.exec(comparator);
    if (verified) {
      const selection = ctx.session.textKeyboard.find(
        (el: string) => el === value
      );
      if (!selection) return null;

      ctx.session.selection = selection;
    }
    return verified;
  };

  return {
    replacer,
    verifier,
  };
}

export default createMenuHelpers;
