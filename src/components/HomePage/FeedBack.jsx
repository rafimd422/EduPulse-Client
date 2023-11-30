// import React from 'react';
// import { Container, Typography, Button } from '@mui/material';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import 'keen-slider/keen-slider.min.css';
// import { useKeenSlider } from 'keen-slider/react';
// import Slider from 'react-slick';

// const FeedBack = () => {
//   const [sliderRef, slider] = useKeenSlider({
//     slidesPerView: 1,
//     spacing: 16,
//     loop: true,
//   });

//   const goToPrevSlide = () => {
//     if (slider) {
//       Slider.prev();
//     }
//   };

//   const goToNextSlide = () => {
//     if (slider) {
//       Slider.next();
//     }
//   };

//   const reviews = [
//     {
//       id: 1,
//       author: 'John Doe',
//       role: 'User',
//       review:
//         "I started using ResQFood because we needed items for our newborn. After a few collections, I discovered what a wonderful group of ResQFood there are close to me. It's amazing how connected my family is with our community now, and we've been sharing flyers locally to help introduce even more people to Olio. I've felt a real sense of accomplishment completing Food Waste Hero pick-ups too. It's wonderful knowing I'm playing a part in reducing waste.",
//       img: 'https://i.ibb.co/j3W3495/speaker1.jpg',
//     },
//     {
//       id: 2,
//       author: 'Alice Smith',
//       role: 'Volunteer',
//       review:
//         "As a volunteer, I've seen firsthand the positive impact this platform has on our community. It brings people together and ensures that no good food goes to waste.",
//       img: 'https://i.ibb.co/PhrP9fb/speaker4.jpg',
//     },
//     {
//       id: 3,
//       author: 'Ella Johnson',
//       role: 'Recipient',
//       review:
//         "Hi, I just wanted to come and say Hi. I’m new here and just wanted to share what a positive experience I’ve had on this app so far. In a cost of living crisis, this app has been exactly what me and my family needed with the added bonus of reducing food waste, which is a massive problem in this country. I couldn’t be more grateful for the volunteers who take time out of their day to collect and fairly distribute the food.",
//       img: 'https://i.ibb.co/YdfLztg/speaker2.jpg',
//     },
//   ];

//   return (
//     <>
//       <section style={{ background: '#fff' }}>
//         <Container style={{ padding: '6px', paddingTop: '10px', margin: 'auto' }}>
//           <Typography variant="h3" style={{ fontSize: '3xl', fontWeight: 'extrabold', textAlign: 'center', marginTop: '4px', textTransform: 'uppercase', color: '#6B46C1', marginLeft: '4px' }}>
//             Hear why <span style={{ color: '#EF4444' }}>our community</span> loves ResQFood
//           </Typography>

//           <div style={{ display: 'flex', justifyContent: 'center', margin: 'auto', marginTop: '6px' }}>
//             <span style={{ display: 'inline-block', width: '40px', height: '1px', background: '#3B82F6', borderRadius: 'full' }}></span>
//             <span style={{ display: 'inline-block', width: '3px', height: '1px', margin: '0 1px', background: '#3B82F6', borderRadius: 'full' }}></span>
//             <span style={{ display: 'inline-block', width: '1px', height: '1px', background: '#3B82F6', borderRadius: 'full' }}></span>
//           </div>

//           <div style={{ display: 'flex', alignItems: 'start', maxWidth: '6xl', margin: 'auto', marginTop: '16px' }}>
//             <div ref={sliderRef} className="keen-slider">
//               {reviews.map((review) => (
//                 <div key={review.id} className="keen-slider__slide">
//                   <div>
//                     <p style={{ display: 'flex', alignItems: 'center', textAlign: 'center', color: '#6B7280', marginLeft: '8px' }}>
//                       {review.review}
//                     </p>

//                     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '8px' }}>
//                       <img style={{ objectFit: 'cover', borderRadius: 'full', width: '14px', height: '14px' }} src={review.img} alt="" />

//                       <div style={{ marginTop: '4px', textAlign: 'center' }}>
//                         <h1 style={{ fontWeight: 'bold', color: '#1F2937' }}>{review.author}</h1>
//                         <span style={{ fontSize: 'sm', color: '#6B7280' }}>{review.role}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', margin: 'auto', marginTop: '4px', fontSize: '5xl', width: 'full' }}>
//             <Button onClick={goToPrevSlide} variant="text">
//               <ArrowBackIcon />
//             </Button>
//             <Button onClick={goToNextSlide} variant="text">
//               <ArrowForwardIcon />
//             </Button>
//           </div>
//         </Container>
//       </section>
//     </>
//   );
// };

// export default FeedBack;
import React from 'react'

const FeedBack = () => {
  return (
    <div>
      
    </div>
  )
}

export default FeedBack
