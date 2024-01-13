import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
        const { searchParams } = new URL(req.url);
        let catId = parseInt(searchParams.get('catId'));

        const prisma = new PrismaClient();
        const result = await prisma.news_list.findMany({
            where: { catId: catId },
            select: { id: true, title: true, short_des: true, img1: true, img2: true, img3: true, img4: true, }
        })

        return NextResponse.json({ status: 'success', data: result })
    } catch (error) {
        return NextResponse.json({ status: 'fail', data: error })
    }
}

