import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";


// POST 
export async function POST(req, res) {
    try {
        const reqBody = await req.json();
        const prisma = new PrismaClient();
        const result = await prisma.news_list.create({ data: reqBody })
        return NextResponse.json({ ststus: 'success', data: result })
    } catch (error) {
        return NextResponse.json({ ststus: 'fail', data: error })
    }
}