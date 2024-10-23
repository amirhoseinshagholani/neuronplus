import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

const UPLOAD_DIR = path.join(process.cwd(), "/uploads"); // تغییر مسیر به پوشه داخلی پروژه

export const POST = async (req: NextRequest) => {
  const formData = await req.formData();
  
  const file = formData.get('file') as Blob | null;

  if (file) {
    const buffer = Buffer.from(await file.arrayBuffer());

    // ایجاد دایرکتوری اگر وجود نداشت
    if (!fs.existsSync(UPLOAD_DIR)) {
      fs.mkdirSync(UPLOAD_DIR, { recursive: true });
    }

    const fileName = `${Date.now()}-${(file as File).name}`;
    const filePath = path.join(UPLOAD_DIR, fileName);

    // نوشتن فایل در مسیر تعیین‌شده
    fs.writeFileSync(filePath, buffer);

    return NextResponse.json({
      success: true,
      filePath: `/uploads/${fileName}`, // برگرداندن مسیر فایل آپلود شده
    });
  } else {
    return NextResponse.json({
      success: false,
      message: 'No file uploaded',
    });
  }
};
