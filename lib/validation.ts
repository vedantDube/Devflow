import * as z from "zod";

export const QuestionsSchema = z.object({
  title: z.string().min(5, "Title must be at least 2 character").max(130),
  explanation: z.string().min(100),
  tags: z.array(z.string().min(1).max(115).min(1).max(3)),
});
