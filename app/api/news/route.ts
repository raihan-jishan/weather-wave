import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
  try {
    const apiKey = process.env.NEWS_API_API_KEY;
    const newsServer = process.env.NEWS_SERVER_URL;
    const pageSize = process.env.NEWS_PAGE_SIZE;
    const country = "usa"; // diclaire country name
    const url = `${newsServer}/api?q=weather&${country}&pageSize=${pageSize}&apiKey=${apiKey}`;
    const res = await axios.get(url);
    return NextResponse.json(res.data);
  } catch (error) {
    console.log(error, "Error fetching weather news ");
    return new Response("Error fetching forecast data", { status: 500 });
  }
}
