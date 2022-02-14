import { FaTimes, FaEdit, FaThumbsUp, FaThumbsDown } from 'react-icons/fa'
import { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)
  const [fontSize, setFontSize] = useState(18)
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <button onClick={() => editFeedback(item)} className='edit'>
        <FaEdit color='purple' />
      </button>
      <p style={{ fontSize: `${fontSize}px` }}>{item.text}</p>
      <button onClick={() => setFontSize(fontSize + 2)} className='like'>
        <FaThumbsUp color='skyblue' />
      </button>
      <button onClick={() => setFontSize(fontSize - 2)} className='dislike'>
        <FaThumbsDown color='skyblue' />
      </button>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
