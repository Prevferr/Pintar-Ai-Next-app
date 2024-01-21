import { initEdgeStore } from "@edgestore/server";
import { createEdgeStoreNextHandler } from "@edgestore/server/adapters/next/app";
import { z } from "zod";

const es = initEdgeStore.create();
const edgestoreRouter = es.router({
	myPublicImages: es
		.imageBucket()
		.input(z.object({ type: z.enum(["post", "profile"]) }))
		.path(({ input }) => [{ type: input.type }]),
});

const handler = createEdgeStoreNextHandler({
	router: edgestoreRouter,
});

export { handler as GET, handler as POST };

export type EdgeStoreRouter = typeof edgestoreRouter;
