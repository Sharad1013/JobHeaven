import { Search } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-center py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100"
    >
      <div className="flex flex-col gap-10 my-10">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#333] font-medium shadow-sm"
        >
          Your Career Partner - Where Opportunities and Talent Align!
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-5xl font-bold leading-tight"
        >
          Explore, Apply & <br /> Achieve Your
          <span className="text-[#6439FF]"> Dream Job</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg text-gray-600"
        >
          Discover endless possibilities and take the next step in your career
          with JobHeaven today!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex w-full max-w-md shadow-lg border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto bg-white"
        >
          <input
            type="text"
            placeholder="Find Your Dream Job"
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none border-none w-full"
          />
          <Button
            onClick={searchJobHandler}
            className="rounded-r-full bg-[#6439FF] hover:bg-[#4c25d9] "
          >
            <Search className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
