"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [quote, setQuote] = useState(
    "Every great thought begins as a whisper in the mind."
  );
  const [author, setAuthor] = useState("Quotastic");

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://corsproxy.io/?https://zenquotes.io/api/random/", {
        method: "GET",
      });

      const data = await response.json();

      setQuote(data[0].q);
      setAuthor(data[0].a);
      
    } catch (error) {
      console.error("Error fetching the quote:", error);
    }
  };

  return (
    <main>
      <Image
        src="/placeholder.jpg"
        alt="background"
        width={5000}
        height={5000}
        className="fixed h-full w-full object-cover z-[-1]"
      />
      <div className="flex justify-center items-center h-screen">
        <Card className="max-w-lg min-h-[55vh] backdrop-blur-md bg-white/10 border-none text-white m-2">
          <CardHeader>
            <CardTitle className="text-3xl mt-8 mx-8">Quote</CardTitle>
          </CardHeader>
          <CardContent className="mt-3 mx-8">
            <h1 className="text-5xl px-2 fixed">&quot;</h1>
            <div className="pl-4 py-8">
              <h1>{quote}</h1>
              <h1 className="text-end text-lg p-6">- {author}</h1>
            </div>
          </CardContent>
          <CardFooter className="mx-12 justify-center">
            <Button variant={"secondary"} onClick={fetchQuote}>
              Inspire Me !
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
