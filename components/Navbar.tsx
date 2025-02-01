import Link from "next/link";
import Image from "next/image";
import icon from "@/public/logo.png";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Github, Instagram } from "lucide-react";

export default async function FloatingNavbar() {
  const socialItems = [
    { href: "https://github.com/t1aaf", icon: Github },
    { href: "https://www.instagram.com/_t1aaf/", icon: Instagram },
  ];

  return (
    <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="backdrop-blur-xl bg-white/40 border border-white/20 rounded-3xl shadow-lg px-6 py-3">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center">
            <Image
              src={icon}
              alt="Quotastic"
              width={150}
              height={40}
              className="h-8 w-auto"
            />
            <h1 className="pl-3">Quotastic</h1>
          </Link>
          <Separator orientation="vertical" className="h-6 bg-black/30" />
          <Separator orientation="vertical" className="h-6 bg-black/30" />
          <div className="flex justify-center space-x-2 py-2">
            {socialItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                size="sm"
                asChild
                className="hover:bg-white/40"
              >
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <item.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
