"use client";

import { Cover } from "@/components/Cover";
import { Loading } from "@/components/Loading";
import { getAllDocumentsByPath } from "@/firebase/services/getAllDocumentsByPath";
import { study } from "@/types/studyModules";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { PiBookBookmarkLight } from "react-icons/pi";

export default function studyModules() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedYear, setSelectedYear] = useState<string>("2020");
  const [studyModules, setStudyModules] = useState<object>({});

  useEffect(() => {
    getAllDocumentsByPath<object>(
      process.env.NEXT_PUBLIC_STUDY_MODULES_PATH || ""
    )
      .then((sm) => setStudyModules(sm))
      .then(() => setIsLoading(false));
  }, []);

  console.log(studyModules);
  console.log(Object.keys(studyModules));

  return isLoading ? (
    <ChakraProvider>
      <Loading />
    </ChakraProvider>
  ) : (
    <>
      <Cover title="Módulos de Estudos" />

      <div className="grid grid-cols-12 mt-20 min-[1950px]:justify-items-center">
        <div className="col-start-2 col-span-10">
          <div className="flex  min-[1950px]:w-[77.5rem]">
            <div className="mr-6">
              <div className="flex items-center text-gray-600">
                <PiBookBookmarkLight className="h-6 w-7 fill-red-primary" />
                <div className="font-bold text-lg w-36">Estudos em:</div>
              </div>
              <ul>
                {Object.keys(studyModules)
                  .reverse()
                  .map((year) => {
                    return (
                      <li
                        data-isslectedyear={selectedYear === year}
                        key={year}
                        className="ml-[0.30rem] font-medium text-gray-600 data-[isslectedyear=true]:text-red-primary my-6 cursor-pointer"
                        onClick={() => setSelectedYear(year)}
                      >
                        {year}
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="flex flex-col justify-center items-center mb-20">
              {((studyModules as any)[selectedYear] as study[]).map((sm, i) => {
                return (
                  <>
                    {sm.title ? (
                      <div className="font-bold text-3xl w-full text-gray-600">
                        {sm.title}
                      </div>
                    ) : (
                      <></>
                    )}
                    <div className="text-gray-500 text-lg mt-8 self-start">
                      {sm.description}
                    </div>
                    {sm.classLink ? (
                      <iframe
                        className="mt-7 min-[1550px]:w-[50rem] w-full h-[27rem] mb-20"
                        src={sm.classLink}
                      ></iframe>
                    ) : (
                      <></>
                    )}
                    {i ==
                    ((studyModules as any)[selectedYear] as study[]).length -
                      1 ? (
                      <></>
                    ) : (
                      <div className="justify-self-center col-span-12 border-t-2 border-gray-300 mt-20 mb-16  w-full"></div>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
