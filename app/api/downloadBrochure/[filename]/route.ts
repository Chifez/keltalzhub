// type GetParams = {
//   params: {
//     filename: string;
//   };
// };

// export async function GET(req: Request, { params }: GetParams) {
//   const filename = params.filename;
//   const FILE_PATH = req.body;

//   const response = await fetch(FILE_PATH);
//   return new Response(response.body, {
//     headers: {
//       ...response.headers,
//       'content-disposition': `attachment; filename="${filename}"`,
//     },
//   });
// }

// pages/api/files/[id].ts

import { NextApiRequest, NextApiResponse } from 'next';
import { drive_v3, google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

const drive = google.drive({
  version: 'v3',
  auth: 'NEXT_PUBLIC_GOOGLE_OAUTH',
});

export async function POST(req: any, res: any) {
  try {
    // const fileId = req.query.id as string;
    const fileId = '232edskdsdsiu78782';

    // Validate and sanitize fileId
    if (!isValidFileId(fileId)) {
      return res.status(400).json({ error: 'Invalid file ID' });
    }

    // Authorization check (example: check if the user is authenticated)

    const { data } = await drive.files.get(
      { fileId, alt: 'media' },
      { responseType: 'arraybuffer' }
    );

    res.setHeader('Content-Type', data.mimeType || 'application/octet-stream');
    res.setHeader('Content-Disposition', `attachment; filename="${data.name}"`);
    res.status(200).send(data);
  } catch (error) {
    console.error('Error downloading file from Google Drive:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

function isValidFileId(fileId: string): boolean {
  return /^[a-zA-Z0-9]{28,}$/i.test(fileId);
}
