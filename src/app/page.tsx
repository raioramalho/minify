import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex gap-4">
        <div className="">
          <Card className="gap-2 flex flex-col p-4">
            <CardHeader>
              <Label className="text-4xl">Minify Url Shortener</Label>
            </CardHeader>
            {/* <CardDescription>
              <Label className="">Caixa com input</Label>
            </CardDescription> */}
            <CardContent className="gap-4 p-2">
              <form action="" className="gap-2 flex flex-col">
                <Input
                  type="text"
                  placeholder="Digite aqui o link a ser minificado"
                />
                <Button className="">Minify!</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
