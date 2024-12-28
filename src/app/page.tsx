'use client';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  let [loading, setLoading] = useState(false);
  let [minifiedUrl, setMinifiedUrl] = useState("");
  let [status, setStatus] = useState(<></>);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    let url = formData.get("url") as string;
    let res = await fetch('https://api.minify.icu', {
      method: 'POST',    
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url: url.toLowerCase()
      })
    });

    let json: any = await res.json();

    setMinifiedUrl(json.tinnyUrl);
    setStatus(<Status message="Minified!" />);
    setLoading(false);
  }

  function Status(props: any) {
    return (
      <Label className="flex flex-row justify-center items-center">
      {props.message} 
      <CheckIcon className="w-8 h-8 text-green-500"/>
    </Label>
    )
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(minifiedUrl);
    setStatus(<Status message="Copied to clipboard!" />);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 w-full">
      <Analytics/>
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex gap-4">
        <div className="max-w-5xl">
          <Card className="gap-2 flex flex-col p-2 w-full">
            <CardHeader className="flex flex-row justify-center items-center">
              <Label className="text-2xl lg:text-4xl">Minify Url Shortener</Label>
            </CardHeader>

            <Separator className="w-full" />

            <CardContent className="gap-4 p-2">
              <form action={handleSubmit} className="gap-4 flex flex-col border p-2 rounded-md">
                <span className="flex flex-row gap-4 justify-center items-center">
                  <Label className="text-xs">Url:</Label>
                  <Input
                    type="text"
                    name="url"
                    placeholder="Link to minify here."
                  />
                </span>
                <span className="flex flex-row gap-2 justify-center items-center">
                  <Label className="text-xs">MinifiedUrl:</Label>
                  <Input
                    type="text"
                    name="minifiedUrl"
                    value={minifiedUrl}
                    placeholder="minify.icu/Minify"
                    disabled={ minifiedUrl ? false : true }
                  />
                  <CopyIcon onClick={copyToClipboard} className="cursor-pointer gap-2 w-8 h-8" />
                </span>
                <span className="flex flex-row gap-2 justify-center items-center">
                  <Label className="text-xs">{status}</Label>
                </span>
                <Button className="" type="submit">Minify!</Button>
              </form>
            </CardContent>

            <Separator className="w-full" />

            <CardFooter className="flex flex-col justify-center items-center p-2 gap-2">
              <Label>www.minify.icu - All R Reserved - 2024</Label>
              <Label>Alan Ramalho - ramalho.sit@gmail.com</Label>
            </CardFooter>

            <Separator className="w-full" />
          </Card>
        </div>
      </div>
    </main>
  );
}
