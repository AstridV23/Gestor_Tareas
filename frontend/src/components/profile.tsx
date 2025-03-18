"use client";

import { useSession } from "next-auth/react";

const Profile = () => {
    const { data: session } = useSession();

    if (!session?.user) return null;

    return (
        <div className="w-80 mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Encabezado */}
            <div className="bg-[#1E40AF] h-24 flex justify-center items-center">
                <img
                    src={session.user.image as string}
                    alt="Profile"
                    className="w-24 h-24 rounded-full border-4 border-white -mb-12"
                />
            </div>

            <div className="text-center p-6">
                <h2 className="text-xl font-bold text-gray-900">{session.user.name}</h2>
                <p className="text-gray-500">{session.user.email}</p>

                <p className="text-gray-600 text-sm mt-4">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>

                {/* Iconos de redes sociales */}
                <div className="flex justify-center gap-4 my-4">
                    <a href="#" className="text-black">
                        <i className="fab fa-twitter text-2xl"></i>
                    </a>
                    <a href="#" className="text-black">
                        <i className="fab fa-behance text-2xl"></i>
                    </a>
                    <a href="#" className="text-black">
                        <i className="fab fa-linkedin text-2xl"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Profile;