import { AnimatePresence, animate, motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import useMeasure from "react-use-measure";
import ReviewCard from "./ReviewCard";

function ReviewAnimation() {
  const textArray = [
    {
      link: "Easiest process",
      key: "1",
      target: "Karsen's from Lutz, FL",
      desc: "Richard was amazing and walked us through every step of the process. Always available to answer my questions. Would highly recommend using Richard for any of your mortgage needs.",
      date: "8/11/2024",
      labels: {
        label1: "30 Year Fixed",
        label2: "VA Loan",
      }
    },
    {
      link: "Brian is the best!",
      key: "2",
      target: "Tommy Helms from Punta Gorda, FL",
      desc: "Brian made obtaining a mortgage to buy a home seamless and painless. He’s all about customer service! He’s super knowledgeable and is very communicative! I highly recommend!!",
      date: "8/2/2024",
    },
    {
      link: "The Best Home Buying Experience Ever!",
      key: "3",
      target: "sting954 from Winter Haven, FL",
      desc: "Richard Martino is absolutely amazing! He took care of everything I needed to get financed and kept me informed throughout the process. He always had a great, positive attitude and was extremely friendly..",
      date: "6/6/2024",
      labels: {
        label1: "30 Year Fixed",
        label2: "VA Loan",
      }
    },
    {
      link: "Fast paced and diligent",
      key: "4",
      target: "Francisco Mari-Lassa from Fort Lauderdale, FL",
      desc: "I am grateful that I ended up in the hand of Ari and his team. Ari worked fast and very hard to provided me with guidance and the best rate in the market. Ari communicated with me frequently and ensured...",
      date: "4/30/2024",
    },
    {
      link: "10/10 highly recommend",
      key: "5",
      target: "langford313 from Citrus Park, FL",
      desc: "My wife and I had an exceptional experience with Brian. From the start, his expertise was evident, providing invaluable guidance every step of the way. He was incredibly attentive to our unique needs...",
      date: "4/13/2024",
      labels: {
        label1: "30 Year Fixed",
        label2: "Conventional Loan",
      }
    },
    {
      link: "Best Mortgage Company!",
      key: "6",
      target: "Brooke Kemper from Fort Lauderdale, FL",
      desc: "Americas Mortgage Professionals is hands down the best company I have used when buying a property! We closed in record time on a condo, the fastest I have ever experienced. JR was incredibly friendly...",
      date: "5/5/2023",
      labels: {
        label1: "30 Year Fixed",
        label2: "Conventional Loan",
      }
    },
    {
      link: "Outstanding",
      key: "7",
      target: "rodgersjulie from Clermont, FL",
      desc: "JR and his team were absolutely amazing, the time spent with me was above and beyond. Walked me through each step and provided very competitive rate and fees. I would and will absolutely 100% recommend these mortgage professionals...",
      date: "5/15/2020",
      labels: {
        label1: "30 Year Fixed",
        label2: "Conventional Loan",
      }
    }
  ];

  const extendedArray = [
    ...textArray,
    ...textArray.map((item, index) => ({ ...item, key: `${item.key}-${index + textArray.length}` }))
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
    <motion.div
      style={{
        position: "absolute",
        overflow: "unset",
        left: "0px",
        gap: "15px",
        display: "flex",
        width: "100%",
        overflowX: "hidden",
        flexDirection: "row"
      }}
      ref={ref}
    >
      {/*     CARD ARRAY STARTS HERE     */}
      {extendedArray.map((item) => (
        <motion.div
          key={item.key}
          style={{
            position: "relative",
            minWidth: "380px",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            objectFit: "cover",
            x: xTranslation
          }}
        >
          <ReviewCard item={item}></ReviewCard>
        </motion.div>
      ))}
    </motion.div>

  );
}

export default ReviewAnimation;
