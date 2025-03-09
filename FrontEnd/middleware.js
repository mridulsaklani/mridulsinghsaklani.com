import { NextResponse } from "next/server";
import { NextRequest } from "next/server"

export function middleware(NextRequest) {

    const token = NextRequest.cookies.get("admin")?.value;
    const user = NextRequest.cookies.get("token")?.value;
   

    if (NextRequest.nextUrl.pathname.startsWith("/dashboard")) {
        if (!token) {
            
            return NextResponse.redirect(new URL("/admin", NextRequest.url));
        }
    }

    if (NextRequest.nextUrl.pathname.startsWith("/notes")) {
        if(!user){
            return NextResponse.redirect(new URL('/', NextRequest.url))
        }
    }

    if (NextRequest.nextUrl.pathname.startsWith("/profile")){
        if(!user){
            return NextResponse.redirect(new URL("/",  NextRequest.url))
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*", "/notes/:path*", "/profile/:path*"],
};



