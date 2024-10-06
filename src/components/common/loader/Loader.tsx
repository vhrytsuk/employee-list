import React from "react";
import { Box, Flex } from "@radix-ui/themes";

const Loader: React.FC = () => {
  return (
    <Flex justify='center' align='center' className='h-screen'>
      <Box
        as='div'
        className='w-10 h-10 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin'
      />
    </Flex>
  );
};

export default Loader;
