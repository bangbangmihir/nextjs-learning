import {
  RequestCookie,
  parseCookie,
} from "next/dist/compiled/@edge-runtime/cookies";
import { cookies, headers } from "next/headers";

export function getCookie(cookieName) {
  const allCookiesAsString = headers().get("Set-Cookie");

  if (!allCookiesAsString) {
    return cookies().get(cookieName);
  }

  const allCookiesAsObjects = allCookiesAsString
    .split(", ")
    .map((singleCookieAsString) => parseCookie(singleCookieAsString.trim()));

  const targetCookieAsObject = allCookiesAsObjects.find(
    (singleCookieAsObject) =>
      typeof singleCookieAsObject.get(cookieName) == "string"
  );

  if (!targetCookieAsObject) {
    return cookies().get(cookieName);
  }

  return {
    name: cookieName,
    value: targetCookieAsObject.get(cookieName) ?? "",
  };
}

// output
//   middleware: create test f54a058f-fcb8-47ab-b2c2-cf42e42f4c17
//   page: { name: 'test', value: 'f54a058f-fcb8-47ab-b2c2-cf42e42f4c17' }
//   middleware: delete test
//   page: { name: 'test', value: '' }
