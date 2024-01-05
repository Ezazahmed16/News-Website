import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


// Registration API (api/user/registration)
export async function POST(req, res) {
    try {
        let reqBody = await req.json();
        reqBody.otp = '0'
        const prisma = new PrismaClient()
        const result = await prisma.users.create({
            data: reqBody
        })
        return NextResponse.json({ status: 'Success', data: result })
    } catch (e) {
        return NextResponse.json({ status: 'Fail', data: e })
    }
}