import React from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import Layout from "@/components/layouts/Layout";

const Custom404: React.FC = () => (
  <Layout>
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col justify-center items-center text-white">
      <h1 className="text-6xl font-bold mb-4">Oops! 😱</h1>
      <p className="text-2xl mb-8">We can&#39;t find that page.</p>
      <p className="text-lg mb-8 max-w-md text-center">
        Maybe it was abducted by aliens 👽 or got lost on the Internet!
      </p>
      <Link href="/" className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
        <FaHome size={20} />
        <span>Go Back Home</span>
      </Link>
    </div>
  </Layout>
);

export default Custom404;
