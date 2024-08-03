import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ platform }) => {
    let result = await platform.env.DB.prepare(
        "SELECT * FROM pix"
      ).run();
    return {result};
}