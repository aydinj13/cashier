import Navbar from "@/components/navbar";
import { UserProfile } from "@clerk/nextjs";

export default function Settings() {
    return (
        <>
        <Navbar />
        <div className="m-20 flex justify-center">
        <UserProfile />
        </div>
        </>
    )
}