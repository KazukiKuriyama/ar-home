import { Box } from './components/Box';
import { YStack } from 'tamagui';

export default function HomePage() {
  const boxes = [
    {
      title: 'Box 1',
      description: 'This is the first box.',
      imageUrl: 'https://via.placeholder.com/200',
    },
    {
      title: 'Box 2',
      description: 'This is the second box.',
      imageUrl: 'https://via.placeholder.com/200',
    },
  ];

  return (
    <YStack space="$4" padding="$4">
      {boxes.map((box, index) => (
        <Box key={index} title={box.title} description={box.description} imageUrl={box.imageUrl} />
      ))}
    </YStack>
  );
}
