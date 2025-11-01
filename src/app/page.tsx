"use client"

import * as React from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  Search,
  Twitter,
  X,
} from "lucide-react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [state, setState] = React.useState(false);
  const router = useRouter();
  const handleWaitlist = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.pikuphq.pikupuser"
    );
  };
  const menus = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "#about" },
    { title: "Services", path: "#service" },
    { title: "FAQ", path: "#faq" },
  ];

  return (
    <main className="bg-[#F7F7F7]">
      <nav className="container">
        <div className="items-center px-1 pt-5 max-w-screen mx-auto md:flex md:px-8">
          <div className="flex items-center justify-between md:justify-center py-3 md:py-5 md:block">
            <Link href="/">
              <Image
                src="/asserts/Frame 2.svg"
                width={100}
                height={100}
                alt="logo"
              />
            </Link>
            <div className="md:hidden">
              <button
                className="text-black outline-none p-2 rounded-md focus:border-[#FE7622] focus:border"
                onClick={() => setState(!state)}
              >
                <Menu />
              </button>
            </div>
          </div>
          <div
            className={`flex-1 justify-self-end pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className="justify-end items-end space-y-8 md:flex md:space-x-6 md:space-y-0">
              {menus.map((item, id) => (
                <li
                  key={id}
                  className="text-[#1E1E1E] font-bold hover:border-b-2 border-[#FE7622]"
                >
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div className="hero mt-7 sm:mt-20 flex flex-col gap-5 items-center sm:py-4 px-6 max-h-screen">
        <h1 className="lg:text-[65px] text-[34px] font-bold text-[#1E1E1E] text-center tracking-tight">
          <span className="sm:flex gap-3 items-center justify-center me-3">
            Be the First to
            <Image
              src="asserts/Group 1.svg"
              alt="hero"
              height={200}
              width={200}
              className="hidden sm:block"
            />
          </span>
          Experience a Revolution <br />
          <span className="sm:flex gap-3 items-center justify-center">
            <Image
              src="/asserts/Group 2.svg"
              alt="hero pikup"
              height={200}
              width={200}
              className="hidden sm:block"
            />
            in Food Delivery
          </span>
        </h1>
        <p className="text-[#494949] text-[20px] text-wrap font-normal text-center">
          Join our exclusive community of beta testers and help shape the future
          of on-demand dining.
        </p>

        <button
          className=" mt-3 py-3 flex items-center justify-center gap-2 text-white font-bold tracking-wider  rounded-md  transition"
          onClick={handleWaitlist}
        >
          <Image
            src="/pngegg.png"
            alt="Google Play logo"
            width={240}
            height={50}
            className="object-contain"
          />
        </button>
      </div>
      <div className="mt-[60px] grid lg:grid-cols-2 lg:px-20 mb-10 px-1 ">
        <div className="grid grid-cols-2 gap-[10%] items-center">
          <div className="row sm:px-0 px-3 place-self-start">
            <hr className="border-t border-[#FE7622] border-2 my-4 md:w-1/2" />
            <p className="text-[#494949] md:w-1/2">
              Say goodbye to delayed order.
            </p>
          </div>
          <div className="row sm:px-0 px-3 place-self-end">
            <hr className="border-t border-[#FE7622] border-2 my-4 md:w-1/2" />
            <p className="text-[#494949] md:w-1/2">
              App that Satsify your cravings
            </p>
          </div>
        </div>
        <div className="lg:text-end mt-10 sm:mt-0">
          <p className="text-[#FE7622] text-[1rem]">
            Follow us on social media
          </p>
          <div className="flex gap-3 lg:justify-end pt-3">
            <Link href="https://x.com/pikuphq" target="_blank">
              <Twitter />
            </Link>
            <Link href="">
              <Facebook />
            </Link>
            <Link href="https://instagram.com/pikuphq" target="_blank">
              <Instagram />
            </Link>
            <Link
              href="https://www.linkedin.com/company/pikup-hq"
              target="_blank"
            >
              <Linkedin />
            </Link>
          </div>
        </div>
      </div>
      <div className="about bg-[#FE76221A] pt-9 lg:px-32" id="about">
        <div className="lg:p-20 p-10 grid md:grid-cols-3 lg:gap-0">
          <p className=" place-self-start text-[#1E1E1E] text-[18px]">
            At Pikup, we’re revolutionizing food delivery. We believe ordering
            should be more than just a transaction—it should be an effortless,
            exciting, and delicious experience from start to finish.
          </p>
          <Image
            src="asserts/hand.svg"
            alt="logo"
            width={400}
            height={300}
            className="place-self-center"
          />
          <p className="place-self-end text-[#1E1E1E] text-[18px]">
            We connect you with the best local meals while supporting small
            businesses and creating a seamless, reliable food journey.
          </p>
        </div>
      </div>
      <div className=" py-16 md:px-24 px-3 flex flex-col gap-5" id="service">
        <h6 className="text-[rgb(254,118,34)] bg-[#FE76221A] w-[100px] rounded-md">
          Our services
        </h6>
        <p className="font-semibold md:text-[2rem] text-[25px]">
          The Future Of Delivery Tailored To Satisfy Your Cravings
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="card rounded-md bg-[#FE76221A] py-3 pt-6 px-5 border ">
            <Image
              src="asserts/mdi_food.svg"
              height={120}
              width={120}
              alt="pikup"
            />
            <h3 className="text-[#1E1E1E] font-semibold mt-6">For Users</h3>
            <p className="text-[#1E1E1E] font-medium text-[13px]">
              Your taste bud are about to thank you, the adventure begins with
              you tap to order
            </p>
          </div>
          <div className="card rounded-md bg-[#FE76221A] py-3 pt-8 px-5 border ">
            <Image
              src="asserts/Group.svg"
              height={120}
              width={120}
              alt="pikup"
            />
            <h3 className="text-[#1E1E1E] font-semibold mt-8">
              For Restaurants
            </h3>
            <p className="text-[#1E1E1E] font-medium text-[13px]">
              Expand your business receive &Manage orders{" "}
            </p>
          </div>
          <div className="card rounded-md bg-[#FE76221A] py-3 pt-6 px-5 border ">
            <Image
              src="asserts/carbon_delivery.svg"
              height={120}
              width={120}
              alt="pikup"
            />
            <h3 className="text-[#1E1E1E] font-semibold mt-6">For Riders</h3>
            <p className="text-[#1E1E1E] font-medium text-[13px]">
              Earn while you cruise, your bike delivers the happiness
            </p>
          </div>
        </div>
      </div>
      <div className=" py-16 md:px-24 px-3 flex flex-col gap-5" id="faq">
        <h5 className="text-[rgb(254,118,34)] bg-[#FE76221A] w-[40px] rounded-md">
          FAQ
        </h5>
        <p className="font-semibold md:text-[2rem] text-[25px]">
          Got Questions? We’ve Got Answers!
        </p>
        <Accordion type="single" collapsible className="w-full mt-6">
          <AccordionItem
            value="item-1"
            className="bg-[#FE76221A] sm:px-5 text-[#1E1E1E] px-3 "
          >
            <AccordionTrigger className="font-semibold text-[16px]">
              1. What is the Pikup app?{" "}
            </AccordionTrigger>
            <AccordionContent>
              Pikup is a next-gen food delivery platform designed to bring you
              meals from local restaurants, street vendors, and home kitchens,
              all through a convenient and easy-to-use app. We're here to
              revolutionize how you experience food delivery—making it faster,
              simpler, and more personalized!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="last: sm:px-5 text-[#1E1E1E] px-3 "
          >
            <AccordionTrigger className="font-semibold text-[16px]">
              2. When will Pikup be available?{" "}
            </AccordionTrigger>
            <AccordionContent>
              Pikup is currently in its beta phase, and we’re gearing up for a
              full launch soon! Beta testers will get early access before the
              official release, so stay tuned!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className=" sm:px-5 text-[#1E1E1E] px-3"
          >
            <AccordionTrigger className="font-semibold text-[16px]">
              3. How can I become a beta tester?{" "}
            </AccordionTrigger>
            <AccordionContent className="shadow-md">
              Joining the beta is easy! Simply sign up for the waitlist using
              the form on this page, and we’ll notify you if you’re selected.
              Beta testers will get exclusive access to the app before anyone
              else!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className=" sm:px-5 text-[#1E1E1E] px-3"
          >
            <AccordionTrigger className="font-semibold text-[16px]">
              4. Is there a cost to join the beta?{" "}
            </AccordionTrigger>
            <AccordionContent>
              Nope! Joining the beta is completely free. You’ll just need to
              download the app once we send you the instructions.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className=" py-16 md:px-24 px-3">
        <div className="bg-[#1E1E1E] md:p-12 p-6  grid lg:grid-cols-2 gap-6 rounded-md">
          <div className="pt-10">
            <h3 className="text-white md:text-[38px] text-[28px] font-semibold mb-5">
              Get Early Access to Pikup!
            </h3>
            <p className="text-[#ACACAC] text-[19px]">
              Be one of the first to experience the future of food delivery.
              Join our exclusive community of beta testers and get early access
              to Pikup.
            </p>
            <button
              className="w-[240px] mt-8 py-3 text-white font-bold tracking-wider bg-[#FE7622] rounded-md hover:bg-[#FF6B22]"
              onClick={handleWaitlist}
            >
              Join the waitlist
            </button>
          </div>
          <Image
            src="asserts/iPhone 16 Pro mockup natural titanium 1.svg"
            className="lg:ms-[100px]"
            alt="pikup"
            width={270}
            height={200}
          />
        </div>
      </div>
      <div className="footer bg-[#ECECEC] p-3">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/asserts/Frame 2.svg"
              width={100}
              height={100}
              alt="logo"
            />
          </Link>
          <span className="text-[#494949] md:text-[14px] text-[10px]">
            &copy; 2024 Pikup. All rights reserved.
          </span>
        </div>
      </div>
    </main>
  );
}
