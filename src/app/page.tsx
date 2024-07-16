import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex gap-4">

        <Label className="text-4xl">Minify Url Shortener</Label>

        <div className="">
          <Label className="">Caixa com input</Label>
          <form action="" className="">
            <Input
              type="text"
              placeholder="Digite aqui o link a ser minificado"
            />
            <Button className="">Minify!</Button>
          </form>
        </div>

      </div>
    </main>
  );
}
