import { AnimatePresence, animate, motion, useMotionValue } from "framer-motion";
import { Button } from "@mantine/core";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import BlogCard from "./BlogCard";

function ScrollAnimations() {
  const [showOverlay, setShowOverlay] = useState<string | null>(null);

  const textArray = [
    { link: "Understanding Your First Mortgage",
      key: "1",
      target: "First-time homebuyers",
      desc: "Navigating the world of mortgages for the first time can be overwhelming. This guide breaks down the basics of mortgage types, interest rates, and loan terms, helping first-time homebuyers make informed decisions.",
    },
    { link: "How Realtors Can Help Clients Secure the Best Mortgage Deals",
      key: "2",
      target: "Realtors",
      desc: "As a Realtor, your role goes beyond showing homes. Learn how to guide your clients through the mortgage process, connect them with trusted loan originators, and ensure they get the best financing options for their dream home.",
    },
    { link: "Is Refinancing Right for You? Key Things to Consider",
      key: "3",
      target: "Refinance",
      desc: "Refinancing can be a smart financial move for homeowners, but it's not always the right choice. Explore the pros and cons, potential savings, and the right timing to refinance your mortgage.",
    },
    { link: "How Loan Originators Can Build Strong Relationships with Realtors",
      key: "4",
      target: "Loan Orginiators",
      desc: "Building strong partnerships with real estate professionals is essential for loan originators. Learn strategies to connect with Realtors and improve referral opportunities for your mortgage business.",
    },
    { link: "10 Common Mortgage Myths Debunked",
      key: "5",
      target: "First-time homebuyers",
      desc: " Don’t let common misconceptions stop you from getting your dream home. We debunk the 10 most common mortgage myths and provide the real facts you need to make informed decisions.",
    },
    { link: "Refinancing After a Divorce: What You Need to Know",
      key: "10",
      target: "Refinance",
      desc: "Divorce can complicate your financial situation, especially when it comes to your home. Learn how refinancing after a divorce can help you protect your financial future and secure a new mortgage in your name.",
    },
    { link: "How to Improve Your Credit Score Before Applying for a Mortgage",
      key: "6",
      target: "First-time homebuyers",
      desc: "A higher credit score can mean better mortgage rates and terms. Discover practical steps you can take to boost your credit score before applying for a home loan, and ensure you qualify for the best deal.",
    },
  ];

  const extendedArray = [...textArray, ...textArray.map((item, index) => 
    ({...item,key: `${item.key}-${index + textArray.length}`
    }))
  ];

  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let finalPosition = -width / 2 - 7; // 7 is the number of items you have

    const controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <motion.div style={{ position: "absolute", overflow: "unset", left: "0px", gap: "15px", display: "flex",
        width: "100%", overflowX: "hidden", flexDirection: "row"
      }} ref={ref}
    >

      { /*     CARD ARRAY STARTS HERE     */}
      {extendedArray.map((item) => (
        <motion.div key={item.key} onHoverStart={() => {
            setShowOverlay(item.key);
          }} 
          onHoverEnd={() => {
            setShowOverlay(null);
          }}
          style={{ position: "relative", minWidth: "380px", alignItems: "center", display: "flex", flexDirection: "column",
            justifyContent: "center", objectFit: "cover", x: xTranslation
          }}
        >
          <AnimatePresence>
            {showOverlay === item.key && ( <motion.div style={{
                  position: "absolute", inset: 0, zIndex: 10, display: "flex", justifyContent: "center", alignItems: "center"
                }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              >
                <div style={{ position: "absolute", backgroundColor: "black", pointerEvents: "none", opacity: "0.50",
                    height: "100%", width: "100%"
                  }}
                ></div>
                <Button mx="lg" fullWidth size="md" style={{ zIndex: 10 }}>Read More</Button>
              </motion.div>
            )}
          </AnimatePresence>
            <BlogCard item={item}></BlogCard>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ScrollAnimations;
