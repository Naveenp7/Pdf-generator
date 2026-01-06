import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
    const isLoggedIn = !!req.auth;
    const isOnDashboard = req.nextUrl.pathname.startsWith('/dashboard') ||
        req.nextUrl.pathname.startsWith('/resume/edit') ||
        req.nextUrl.pathname.startsWith('/ppt/edit');

    if (isOnDashboard) {
        if (isLoggedIn) return; // Allow access
        return NextResponse.redirect(new URL('/login', req.nextUrl)); // Redirect unauthenticated to login
    }

    return; // Allow access to other pages
});

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
