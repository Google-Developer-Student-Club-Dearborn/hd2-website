import type { NextApiRequest, NextApiResponse } from "next"
import fs from "fs"
import path from "path"

type Data = {
  images: Image[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const imagesDirectory = path.join(process.cwd(), "public/hd1_images")
  const fileNames = fs.readdirSync(imagesDirectory)
  const images = fileNames.map((fileName: string) => ({
    url: `/hd1_images/${fileName}`,
    alt: fileName.replace(".jpg", "").replace(/-/g, " "),
  }))
  res.json({ images })
}
