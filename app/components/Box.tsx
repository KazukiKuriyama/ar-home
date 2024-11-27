import { YStack, Text, Image } from 'tamagui';

export function Box({ title, description, imageUrl }: { title: string; description: string; imageUrl: string }) {
  return (
    <YStack
      width={250}
      borderRadius="$4"
      backgroundColor="$background"
      shadowColor="$shadowColor"
      shadowRadius={5}
      padding="$4"
      space
    >
      <Image src={imageUrl} width={200} height={120} borderRadius="$4" />
      <Text fontFamily="$heading" fontSize="$5" color="$color">
        {title}
      </Text>
      <Text fontFamily="$body" fontSize="$3" color="$color">
        {description}
      </Text>
    </YStack>
  );
}