"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

const NavContent = () => {
  const pathname = usePathname();
  return (
    <section className="flex flex-col gap-6">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <div key={item.route}>
            <Link
              href={item.route}
              className={`${isActive ? `primary-gradient rounded-lg text-light-900` : `text-dark300_light900`} flex-start gap-4 bg-transparent p-4`}
            >
              <>
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  width={20}
                  height={20}
                  className={`${isActive ? "" : "invert-colors"}`}
                />

                <p
                  className={`hidden  lg:block ${isActive ? "base-bold" : "base-medium"}`}
                >
                  {item.label}
                </p>
              </>
            </Link>
          </div>
        );
      })}
    </section>
  );
};

const LeftSideBar = () => {
  return (
    <div className=" custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 flex h-screen w-fit flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px] ">
      <NavContent />
      <SignedOut>
        <div className="flex flex-col gap-3 ">
          <div>
            <Link href="/sign-in">
              <Button className="small-medium btn-secondary sticky bottom-0 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                <span className="primary-text-gradient sm:hidden md:hidden lg:block">
                  Log In
                </span>
                <Image
                  className=" invert-colors hidden sm:block md:block lg:hidden "
                  src="/assets/icons/account.svg"
                  alt="sign-in"
                  width={20}
                  height={20}
                />
              </Button>
            </Link>
          </div>
          <div>
            <Link href="/sign-up">
              <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                <span className="primary-text-gradient sm:hidden md:hidden lg:block">
                  Sign up
                </span>
                <Image
                  className=" invert-colors hidden sm:block md:block lg:hidden "
                  src="/assets/icons/sign-up.svg"
                  alt="sign-up"
                  width={20}
                  height={20}
                />
              </Button>
            </Link>
          </div>
        </div>
      </SignedOut>
      <SignedIn>
        <SignOutButton>
          <Link
            href=""
            className="text-dark300_light900  flex-start hover:btn-secondary hover:light-border-2 w-full gap-4 rounded-lg bg-transparent p-4 py-3 shadow-none hover:min-h-[41px]"
          >
            <Image
              src={"/assets/icons/logout.svg"}
              alt={"logout"}
              width={20}
              height={20}
              className={`dark:invert`}
            />
            <span className="  sm:hidden md:hidden lg:block">Sign out</span>
          </Link>
        </SignOutButton>
      </SignedIn>
    </div>
  );
};

export default LeftSideBar;
