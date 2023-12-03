import Image from "next/image"
export const CreateGoals=()=>{
    return<section className="flex mt-8 text-left mx-8">
        <Image src="/images/goal.png" width={400} height={300} alt="FOMO" className="hidden md:block m-4" />
        <p className="max-w-[65ch] ml-8 mt-4">
        {"At Anuvrat Digital Detox, we're dedicated to fostering a balanced relationship with technology. Our goal creation process focuses on personalized, achievable milestones that promote mindful tech usage, mental wellness, and community engagement. Together, we aim to empower individuals for a healthier, happier digital life."}
        </p>
    </section>
}