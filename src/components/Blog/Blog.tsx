import BlogCard from "./BlogCard";
import { Container, Grid } from "@mantine/core";

function Blog() {

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


  return (
    <Container>
    <Grid>
      { /*     CARD ARRAY STARTS HERE     */}
      {textArray.map((item) => (
        <Grid.Col span={6} key={item.key}
        >
            <BlogCard item={item}></BlogCard>
        </Grid.Col>
      ))}
    </Grid>
    </Container>

  );
}

export default Blog;
