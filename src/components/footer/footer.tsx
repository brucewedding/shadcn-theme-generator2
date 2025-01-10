import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="container mx-auto px-4 pt-16 flex flex-col justify-center items-center">
      <p className="text-xs text-muted-foreground text-center">
        Built with{" "}
        <Link href="https://ui.shadcn.com" target="_blank">
          <Button variant="link" className="p-0 text-xs h-5">
            shadcn/ui
          </Button>
        </Link>{" "}
        and{" "}
        <Link href="https://www.radix-ui.com/colors/custom" target="_blank">
          <Button variant="link" className="p-0 text-xs h-5">
            Radix UI Palette Generator
          </Button>
        </Link>
        <br />
        {` by `}
        <Link href="https://jauharmuhammed.com" target="_blank">
          <Button variant="link" className="p-0 text-xs h-5">
            Jauhar Muhammed
          </Button>
        </Link>
      </p>
    </div>
  );
};

export default Footer;
