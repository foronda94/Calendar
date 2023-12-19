import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours } from 'date-fns'
import Navbar from "../components/Navbar"
import { getMessagesES, localizer } from '../../helpers';
import CalendarEvent from '../components/CalendarEvent';

const events = [{
  title: "cumpleaños del jefe",
  notes: 'Hay que comprar el pastel',
  start: new Date(),
  end: addHours( new Date(), 2 ),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Bryan'
  }
}]


const CalendarPage = () => {
  
  const eventStyleGetter = ( e, start, end, isSelected ) => {
    console.log();

    const style = {
        backgroundColor: '#347cf7',
        borderRadius: '0px',
        opacity: 0.8,
        color: 'white'
    }

    return {style}
  }

  return (
    <>
      <Navbar />

      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px )' }}
        messages={ getMessagesES() }
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEvent
        }}
      />
    </>
  )
}
export default CalendarPage