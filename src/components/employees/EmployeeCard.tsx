import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Card, Box, Flex, Text, Button } from "@radix-ui/themes";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";

import { Employee } from "@/types/Employee";

interface EmployeeCardProps {
  employee: Employee;
  deleteEmployee: () => void;
  editEmployee: () => void;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  employee,
  deleteEmployee,
  editEmployee,
}) => {
  const {
    first_name,
    last_name,
    profile_pic,
    username,
    street_address,
    city,
    bio,
  } = employee;

  return (
    <Card variant='surface' className='w-full h-full shadow-lg p-0'>
      <Flex direction='column' justify='between' height='100%'>
        <Box>
          <Flex align='center' mb='9' gap='9' className='pt-36 px-8'>
            <Avatar>
              <AvatarImage
                radioGroup='avatar'
                className='size-full rounded-full object-cover'
                src={profile_pic}
                alt={`${first_name} ${last_name}`}
              />
              <AvatarFallback>
                {first_name.charAt(0)}
                {last_name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <Flex direction='column'>
              <Text size='3' weight='bold'>
                {`${first_name} ${last_name}`}
              </Text>
              <Text size='2' color='gray'>
                {`@${username}`}
              </Text>
              <Text size='2' color='gray'>
                {street_address}, {city}
              </Text>
            </Flex>
          </Flex>
          <Box mb='6' px='8'>
            <Text size='2'>{bio}</Text>
          </Box>
        </Box>

        <Flex justify='end' gap='4' px='8' py='6' className='bg-slate-200'>
          <Button
            variant='soft'
            size='3'
            className='cursor-pointer'
            onClick={editEmployee}
          >
            <Pencil1Icon className='mr-2' />
            Edit
          </Button>
          <Button
            variant='soft'
            color='red'
            size='3'
            className='cursor-pointer'
            onClick={deleteEmployee}
          >
            <TrashIcon className='mr-2' />
            Delete
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default EmployeeCard;
