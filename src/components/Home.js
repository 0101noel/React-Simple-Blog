import { useState } from 'react';
import { Container, Alert } from 'react-bootstrap';

function Home() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleDismiss = () => {
    setShowWelcome(false);
  };

  return (
    <Container>
      {showWelcome && (
        <Alert variant="primary" onClose={handleDismiss} dismissible>
          <Alert.Heading>Welcome to My Website!</Alert.Heading>
          <p>Welcome to my Capstone project page! I am thrilled to have you here, whether you are a teacher, a stakeholder, or a fellow student. This project has been a culmination of my months of hard work and dedication, and I am excited to share it with all of you.

Throughout this project, I have explored and researched a topic that is close to my heart, and I have put in countless hours to develop a comprehensive understanding of the subject. I hope that my findings and insights will be informative and engaging to all who visit this page.

I would like to express my gratitude to all the teachers who have helped me along the way, providing me with guidance and support as I tackled this challenging task. To the stakeholders who have invested their time and resources into this project, thank you for believing in me and giving me the opportunity to make a difference.

And finally, to my fellow students, I hope that this project inspires you to pursue your own passions and dive deeper into the topics that ignite your curiosity. Thank you for visiting my page, and I look forward to sharing my Capstone journey with you all.</p>
        </Alert>
      )}
    </Container>
  );
}

export default Home;
