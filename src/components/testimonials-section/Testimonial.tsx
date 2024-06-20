import Image from "next/image";

interface TestimonialProps {
    picture: string;
    name: string;
    role: string;
    description: string;
}

export default function Testimonial({ picture, name, role, description }: TestimonialProps) {
    return (
        <div className="bg-white p-4 rounded-xl border shadow-sm border-black/10 w-[305px] text-left shrink-0 h-fit">
            <div className="flex gap-3 items-center">
                {picture && (
                    <Image alt="profile picture" src={picture} width={40} height={40} className="rounded-full border border-black/10 size-10"></Image>
                )}
                <div>
                    <h1 className="font-medium">{name}</h1>
                    <h2 className="text-sm opacity-70 -mt-[2px]">{role}</h2>
                </div>
            </div>
            <div className="flex gap-1 mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#f2ca06" stroke="#f2ca06" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#f2ca06" stroke="#f2ca06" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#f2ca06" stroke="#f2ca06" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#f2ca06" stroke="#f2ca06" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#f2ca06" stroke="#f2ca06" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            </div>
            <p className="mt-3 text-sm">{description}</p>
        </div>
    )
}