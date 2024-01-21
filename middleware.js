import { NextResponse } from "next/server";
import { country } from "./app/blog/components/SelectLoaction";

export async function middleware(request) {

  const response = NextResponse.next();

  

  const data = await (
    await fetch(
      "https://geolocation-db.com/json/0daad5e0-82e7-11ee-92e0-f5d620c7dcb4"
    )
  ).json();

  if (data) {
    if (data.IPv4) {
      // const citydetails = await (await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/get_country_by_ip/${data.IPv4}`)).json();
      response.cookies.set("user_country_id", 101);

      let wordAfterBlog;

      if (request.nextUrl.pathname.startsWith("/blog")) {
        wordAfterBlog = request.nextUrl.pathname.split("/blog/")[1];

        if (wordAfterBlog) {

          let countryname = country.find(
            (coutrydata) =>
              coutrydata.name.toLowerCase() === wordAfterBlog.toLowerCase()
          );

          if (countryname) {
            response.cookies.set("course_country_id", countryname.id);
          }
          else{
            if (!request.cookies.has("course_country_id")) {
                response.cookies.set("course_country_id", 501);
              }
          }
        }
        else{
            if (!request.cookies.has("course_country_id")) {
                response.cookies.set("course_country_id", 501);
              }

        }
      }


      response.cookies.set("country_id", 101);
    }
  }

  return response;
}

export const config = {
  matcher: ["/blog/:path*"],
};
