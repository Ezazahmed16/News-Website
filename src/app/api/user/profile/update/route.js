import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function PUT(req, res) {
    try {
        let headerList = headers();
        let id = parseInt(headerList.get('id'));
        const prisma = new PrismaClient();
        const reqBody = await req.json();

        const result = await prisma.users.update({
            where: { id: id },
            data: reqBody
        })

        return NextResponse.json({ status: 'success', data: result })


    } catch (error) {
        return NextResponse.json({ status: 'fail', data: error })
    }
}