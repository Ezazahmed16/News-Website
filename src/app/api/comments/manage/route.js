import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

// GET Comment by user 
export async function GET(req, res) {
    try {
        let headerList = headers();
        let id = parseInt(headerList.get('id'));

        const prisma = new PrismaClient();

        const result = await prisma.comments.findMany({
            where: { usersId: id },
            include: {
                news_list: { select: { title: true } }
            }
        })
        return NextResponse.json({ status: 'success', data: result })
    } catch (error) {
        return NextResponse.json({ status: 'fail', data: error })
    }
}
// POST Create Comment
export async function POST(req, res) {
    try {
        let headerList = headers();
        let id = parseInt(headerList.get('id'));
        const reqBody = await req.json();
        reqBody.usersId = id;

        const prisma = new PrismaClient();

        const result = await prisma.comments.create({
            data: reqBody
        })
        return NextResponse.json({ status: 'success', data: result })
    } catch (error) {
        return NextResponse.json({ status: 'fail', data: error })
    }
}


// DELETE Create Comment
export async function DELETE(req, res) {
    try {
        let headerList = headers();
        let user_id = parseInt(headerList.get('id'));

        const reqBody = await req.json();
        let comment_id = parseInt(reqBody['id'])

        const prisma = new PrismaClient();

        const result = await prisma.comments.deleteMany({
            where: {
                AND: [
                    { usersId: user_id },
                    { id: comment_id }
                ]
            }
        })
        return NextResponse.json({ status: 'success', data: result })
    } catch (error) {
        return NextResponse.json({ status: 'fail', data: error })
    }
}