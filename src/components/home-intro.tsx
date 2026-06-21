"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import SocialMediaIcons from "@/components/social";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function HomeIntro() {
  const title = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!title.current) {
      return;
    }

    const typedTitle = new Typed(title.current, {
      strings: ["Software Engineer", "AI Engineer", "ML Researcher"],
      typeSpeed: 55,
      backSpeed: 30,
      backDelay: 1600,
      loop: true,
    });

    return () => {
      typedTitle.destroy();
    };
  }, []);

  return (
    <aside className="flex flex-col gap-6 py-10 lg:sticky lg:top-0 lg:h-fit lg:w-2/5 lg:py-28">
      <div className="animate-fade-up">
        <div className="relative w-fit">
          <span
            aria-hidden
            className="absolute -inset-3 -z-10 rounded-2xl bg-brand/20 blur-2xl"
          />
          <Avatar className="h-28 w-28 overflow-hidden rounded-2xl after:rounded-2xl lg:h-32 lg:w-32">
            <AvatarImage
              src="/images/profile/kevin.jpg"
              alt="Kevin"
              className="rounded-2xl object-cover"
            />
            <AvatarFallback className="rounded-2xl font-display text-xl">
              KT
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="animate-fade-up [animation-delay:80ms]">
        <h1 className="font-display text-4xl font-bold tracking-tight lg:text-5xl">
          Kevin Toh
        </h1>
        <p className="mt-2 font-mono text-sm text-brand">
          <span ref={title} />
        </p>
      </div>

      <p className="max-w-sm text-sm leading-relaxed text-muted-foreground animate-fade-up [animation-delay:160ms]">
        Turning deep-learning research into systems that ship and actually
        help people.
      </p>

      <div className="flex flex-col gap-5 animate-fade-up [animation-delay:240ms]">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 font-mono text-xs text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-brand [animation:brand-pulse_2s_ease-in-out_infinite]" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
          </span>
          Open to collaborations
        </span>
        <SocialMediaIcons />
      </div>
    </aside>
  );
}
