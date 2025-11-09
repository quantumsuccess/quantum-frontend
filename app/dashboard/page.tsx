import DashboardTemplate from "@/modules/dashboard/template";
import Image from "next/image";

export default function page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <DashboardTemplate/>
    </div>
  );
}
