import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Grid,Typography } from '@mui/material'
import Lottie from 'lottie-react'
import faq from '../../assets/Faq/faq.json'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Title from './../Title/Title';






const Faq = () => {


    const faqs = [
        {
          question: 'How do I sign up for classes on your platform?',
          answer: 'To sign up for classes, create an account, log in, and browse available classes. Click on the class you\'re interested in and follow the enrollment instructions.',
        },
        {
          question: 'Can I access my classes from any device?',
          answer: 'Yes, our platform is designed to be accessible from various devices such as computers, tablets, and smartphones. Learn anytime, anywhere.',
        },
        {
          question: 'Are there any prerequisites for enrolling in certain classes?',
          answer: 'Prerequisites vary for each class. Check the class description for specific requirements. Some classes may have prerequisites to ensure a foundational understanding of the topic.',
        },
        {
          question: 'How do I track my progress in a course?',
          answer: 'Your progress is automatically tracked as you complete lessons and assignments. View your progress in the course dashboard, which shows completed modules, quizzes, and overall completion percentage.',
        },
        {
          question: 'What types of payment methods are accepted for course enrollment?',
          answer: 'We accept various payment methods, including credit/debit cards and other secure online payment options. Payment details can be entered during the enrollment process.',
        },
      ];

  return (
<Box>
<Container maxWidth='lg' align='center'>
        <Title title={'Frequently Asked'} titleColor='Questions' />
    <Typography color={'#708090'} maxWidth={'700px'} margin={'1rem'} fontSize={'0.875rem'} align='center'>    Explore our comprehensive list of frequently asked questions to find answers about class enrollment, platform accessibility, prerequisites, progress tracking, and payment methods. Get the information you need to make the most of your learning journey with us.    </Typography>

<Grid container
  sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
<Box  width={{md:'50%'}} sx={{
    my:'2rem'}} style={{
  fontFamily:'EB Garamond'
}}>
{faqs.map((ques,idx) => 
<Accordion key={idx} sx={{backgroundColor:'#F3F3F3'}} >
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontSize:'1.2rem'}} style={{
  fontFamily:'EB Garamond'
}}>{ques?.question}</Typography>
        </AccordionSummary>
        <AccordionDetails  >
          <Typography style={{
  fontFamily:'EB Garamond'
}} >
            {ques.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>)}
</Box>

<Lottie animationData={faq} />
</Grid>

</Container>
</Box>
  )
}

export default Faq
