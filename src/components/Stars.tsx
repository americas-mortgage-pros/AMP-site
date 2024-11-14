import { AnimatePresence, motion } from "motion/react";

function Stars() {
  return (
    <AnimatePresence >
      <motion.div
        initial={{ x: 500, y: 0 }}
        whileInView={{ x: 258, y: 92 }}
        transition={{ duration: 1 }}
        layout
        style={{
            width: "140px"
        }}
      >
        <svg

    
          width={120}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 160 32"
          aria-hidden="true"
          focusable="false"
          role="img"
        >
          <g>
            <path
              fill="orange"
              d="M28.28 11.46L21 10.12l-3.52-6.9c-.83-1.63-2.19-1.63-3 0L11 10.12l-7.28 1.34c-1.8.34-2.26 1.71-1 3.06l5.16 5.6-1 7.78c-.24 1.8.9 2.6 2.53 1.77L16 26.3l6.65 3.37c1.63.83 2.77 0 2.53-1.77l-1-7.78 5.16-5.6c1.2-1.35.74-2.72-1.06-3.06z"
              transform="translate(0, 0)"
            />
          </g>
        </svg>
      </motion.div>
    </AnimatePresence>
  );
}

export default Stars;
