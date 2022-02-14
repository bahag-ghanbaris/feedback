import { useContext, useState } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Card from './shared/Card'

// function FeedbackResult() {
//   const [fontSize, setFontSize] = useState(16)
//   const { feedback, isLoading } = useContext(FeedbackContext)
//   if (!isLoading && (!feedback || feedback.length === 0)) {
//     return <p>No Feedback Yet</p>
//   }
//   return (
//     <Card reverse={true}>
//       <div>
//         {feedback.map((item) => (
//           <p style={{ fontsize: `${fontSize}px`, color: 'red' }}>{item.text}</p>
//         ))}
//       </div>
//     </Card>
//   )
// }

// export default FeedbackResult
