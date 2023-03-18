import React from "react";
import { motion } from 'framer-motion';
import { textVariant2 } from '../utils/motion';

export const TitleText = ({ title, textStyles }) => (
    <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold ${textStyles}`}
  >
    {title}
  </motion.h2>
);

export const HeaderText = ({ title, textStyles }) => (
    <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[42px] 
    text-[34px] ${textStyles}`}
  >
    {title}
  </motion.h2>
);
