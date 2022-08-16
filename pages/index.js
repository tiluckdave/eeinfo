import React from "react";
import {
  Box,
  VStack,
  Text,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import PageTransition from "../components/page-transitions";
import Section from "@/components/section";
import ProjectCard from "@/components/project-card";
import { getTable } from "@/lib/airtable";


const Home = ({ exams }) => (
  <Box>
    <PageTransition>
      <VStack spacing={12}>
        <Section>
          <VStack align="start" spacing={4} mt={{ base: "8", md: "0"}}>
            <Heading size="lg">Exams</Heading>
            <Text
            fontSize={["md", "lg"]}
            color={useColorModeValue("neutral.1000", "neutralD.1000")}
            maxW="lg"
            textAlign="center"
          >
            List of all entrance exams available in India.
          </Text>
            <SimpleGrid columns={1} spacing={4} mt={16} w="100%">
              {exams.map((exams) => (
                <ProjectCard
                  key={exams.fields.url}
                  name={exams.fields.exam}
                  description={exams.fields.desc}
                  logo={exams.fields.logo}
                  link={exams.fields.url}
                  type={exams.fields.lf}
                />
              ))}
            </SimpleGrid>
          </VStack>
        </Section>
      </VStack>
    </PageTransition>
  </Box>
);

export async function getStaticProps() {
  const exams = await getTable("Exam");

  return {
    props: {
      exams,
    },
    revalidate: 600,
  };
}

export default Home;
