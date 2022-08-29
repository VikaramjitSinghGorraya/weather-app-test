import { Image, Text, VStack } from '@chakra-ui/react';
const Error = () => {
	return (
		<VStack h='100%' alignItems='center' justifyContent='center'>
			<Image
				h='7rem'
				w='7rem'
				src={'/icons/pagenotfound.svg'}
				alt='Page not found'
			/>
			<Text as='p' fontSize='1.6rem' textAlign='center'>
				404 | Page not found
			</Text>
		</VStack>
	);
};

export default Error;
