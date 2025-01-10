import React from "react";
import Logo from "./logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="container mx-auto px-4 flex items-center justify-between py-4 relative z-10">
      <div className="flex items-center gap-2 pl-2">
        <Link href="/">
          <Logo className="size-8" />
        </Link>
        <span className="text-sm font-medium font-calSans leading-[0.9]">
          <span className="text-foreground/80 text-xs">shadcn/ui</span>
          <br />
          Theme Customizer
        </span>
      </div>
      <div className="">
        <Link href={siteConfig.links.github} target="_blank">
          <Button variant="ghost" size="icon" className="size-7">
            <Icons.gitHub className="size-4" />
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
