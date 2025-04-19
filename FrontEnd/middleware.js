import { NextResponse } from "next/server";

export async function middleware(request) {
    const token = request.cookies.get("accessToken")?.value;

    let userRole = null;

    if (token) {
        try {
            const verifyAuth = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}auth/verify`, {
                headers: {
                    cookie: `accessToken=${token}`,
                },
                credentials: "include",
            });

            const data = await verifyAuth.json();
            userRole = data?.user?.role;
        } catch (err) {
            console.error("Auth verification failed", err);
        }
    }

    if (request.nextUrl.pathname.startsWith("/dashboard")) {
        if (userRole !== "ADMIN") {
            return NextResponse.redirect(new URL("/", request.url));
        }
    }

    if (request.nextUrl.pathname.startsWith("/profile")) {
        if (!token) {
            return NextResponse.redirect(new URL("/", request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*", "/profile/:path*"],
};
