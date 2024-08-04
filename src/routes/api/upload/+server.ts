import {error} from "@sveltejs/kit";

export interface Env {
	DB: D1Database;
  }
  

export async function POST({ request, platform }) {
    if (!request.headers.get("token")) {
        error(401);
    } else if (request.headers.get("token") !== "kravmaga") {
        error(403);
    }

    const requestBody = await request.text();
    const DB = platform.env.DB;
    const info = await DB.prepare('INSERT INTO pix (link) VALUES (?)')
      .bind(requestBody)
      .run()
    console.log(info);
    console.log("Request body: ", requestBody);
    return new Response(`Received string: ${requestBody}`);
};