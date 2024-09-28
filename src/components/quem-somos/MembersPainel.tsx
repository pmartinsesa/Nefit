"use client";

import { useEffect, useState } from "react";

import { MemberCard } from "./MemberCard";
import { Member } from "@/types/member";

import { getAllDocumentsByPath } from "@/firebase/services/getAllDocumentsByPath";

export const MembersPainel = () => {
  const [members, setMembers] = useState<Array<Member>>([]);

  useEffect(() => {
    getAllDocumentsByPath<Member>(
      process.env.NEXT_PUBLIC_ABOUT_US_PATH || ""
    ).then((m) => setMembers(m));
  }, []);

  return renderMembers(members)
}

const renderMembers = (members: Array<Member>) => {
  return members.map((m) => (
    <MemberCard key={m.name} name={m.name} description={m.description} image={m.image} />
  ));
};