import { redirect } from "next/navigation";

export const runtime = 'edge'
interface MinifyProps {
  params: {
    id: string;
  };
}
export default async function Minify({ params }: MinifyProps) {
  redirect(`https://api.minify.icu/${params.id}`);
}
