"use client";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import JournalCard from "../components/JournalCard";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { JournalWithResearcher } from "../type-def";
import { NextRequest } from "next/server";
import { readPayload } from "../../../helpers/lib/jwt";

const WelcomePage = (request: NextRequest) => {
  const [journal, setJournal] = useState([] as JournalWithResearcher[]);
  const router = useRouter();

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/welcome-researcher");

      if (!response.ok) {
        throw new Error("Failed fetching data");
      }

      const responseJSON = await response.json();
      setJournal(responseJSON);
    } catch (error) {
      console.error(error instanceof Error ? error.message : error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="bg-[#242628] w-full">
        <div className="paddingX"></div>
        <div className="flex justify-center paddingX border-[#000] min-h-screen">
          <div className="w-[60%] border-l border-[#000] paddingXShorter3 paddingYShorter7">
            <div className="flex justify-between items-center">
              <div className="flex flex-col justify-between gap-8">
                <h3 className="text-5xl font-mono text-left font-semibold text-[#fff]">
                  Empowering Scholars
                </h3>
                <p className="text-[#fff] font-mono text-sm">
                  Elevating Academic Access: Researcher Website Introduces Journal Upload Feature to Foster Collaboration and Knowledge Dissemination
                </p>
                <Link href="/create-journal">
                  <button
                    className="mr-auto border flex items-center gap-2 bg-[#fff] py-3 px-5 rounded-full text-[#000] cursor-pointer font-mono transition-transform duration-300 hover:transform translate-y-[-3px]"
                    onClick={() => router.push("/create-journal")}
                  >
                    <p className="text-sm">Create Journal</p>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {journal.map((el) => (
            <div key={el.id} className="w-[40%] border-x border-[#000] paddingYShorter3 bg-[#E2E4DD] flex flex-col gap-4">
              <div className="border-[#000] border-y h-48 flex justify-start gap-8 p-4 hover:bg-[#fff]">
                <div className="flex flex-col gap-4">
                  <p className="font-mono text-[#565e67] text-base">{el.keywords}</p>
                  <h1 className="text-xl">{el.title}</h1>
                  <div className="flex justify-start items-center gap-4">
                    <p className="text-base font-mono">

                    </p>
                    <span className="text-[#565e67]">•</span>
                    <p className="font-mono text-[#565e67] text-sm">NOVEMBER 27, 2023</p>
                    <span className="text-[#565e67]">•</span>
                    <p className="text-base font-mono">{el.abstract}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WelcomePage;
