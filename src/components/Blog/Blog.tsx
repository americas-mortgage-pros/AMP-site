import { AnimatePresence, animate, motion, useMotionValue } from "framer-motion";
import { Text, Image } from "@mantine/core";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

function ScrollAnimations() {
  const [showOverlay, setShowOverlay] = useState<string | null>(null);

  const textArray = [
    {
      link: "Hello 1",
      key: "1"
    },
    {
      link: "Hello 2",
      key: "2"
    },
    {
      link: "Hello 3",
      key: "3"
    },
    {
      link: "Hello 4 ",
      key: "4"
    },
    {
      link: "Hello 5",
      key: "5"
    },
    {
      link: "Hello 10",
      key: "10"
    },
    {
      link: "Hello 6",
      key: "6"
    },
  ];

  const extendedArray = [
    ...textArray,
    ...textArray.map((item, index) => ({
      ...item,
      key: `${item.key}-${index + textArray.length}` // Make keys unique by appending the index
    }))
  ];

  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 6; // 8 is the number of items you have

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatTypes: "loop",
      repeatDelay: 0
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <motion.div
      style={{
        position: "absolute",
        overflow: "unset",
        left: "0px",
        gap: "10px",
        display: "flex",
        width: "100%",
        overflowX: "hidden",
        flexDirection: "row"
      }}
      ref={ref}
    >
      {extendedArray.map((item) => (
        <motion.div
          key={item.key}
          onHoverStart={() => {
            setShowOverlay(item.key);
            console.log(item.key);
          }}
          onHoverEnd={() => {
            setShowOverlay(null);
          }}
          style={{
            position: "relative",
            minWidth: "200px",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            objectFit: "cover",
            x: xTranslation
          }}
        >
          <AnimatePresence>
            {showOverlay === item.key && (
              <motion.div
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 10,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div
                  style={{
                    position: "absolute",
                    backgroundColor: "black",
                    pointerEvents: "none",
                    opacity: "0.50",
                    height: "100%",
                    width: "100%"
                  }}
                ></div>
                <Text
                  style={{
                    zIndex: 10
                  }}
                  c="white"
                >
                  Hello
                </Text>
              </motion.div>
            )}
          </AnimatePresence>
          <Image fit="cover" src="https://placehold.co/300x170"></Image>
          <Text>{item.link}</Text>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ScrollAnimations;
