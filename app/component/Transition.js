"use client";

import { motion } from "framer-motion";
import PropTypes from "prop-types";

function Transition({ children, initial = { y: 20, opacity: 0 }, animate = { y: 0, opacity: 1 }, transition = { ease: "easeInOut", duration: 0.75 } }) {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

Transition.propTypes = {
  children: PropTypes.node.isRequired,
  initial: PropTypes.object,
  animate: PropTypes.object,
  transition: PropTypes.object,
};

export default Transition;
