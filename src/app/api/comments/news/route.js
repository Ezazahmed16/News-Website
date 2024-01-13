import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";


export async function GET(req, res) {
    try {
        const { searchParams } = new URL(req.url);
        let news_listId = parseInt(searchParams.get('news_listId'))

        const prisma = new PrismaClient();

        const result = await prisma.comments.findMany({
            where: { news_listId: news_listId },
            include: {
                users: { select: { firstName: true, lastName: true } }
            }
        })

        return NextResponse.json({ status: 'success', data: result })


    } catch (error) {
        return NextResponse.json({ status: 'fail', data: error })
    }
}