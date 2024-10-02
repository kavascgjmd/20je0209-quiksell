import highpriority from './Img-HighPriority.svg'
import mediumpriority from './Img-MediumPriority.svg'
import lowpriority from './Img-LowPriority.svg'
import urgentpriority from './SVG-UrgentPrioritycolour.svg'
import nopriority from './No-priority.svg'

import inprogress from './in-progress.svg'
import done from './Done.svg'
import backlog from './Backlog.svg'
import cancelled from './Cancelled.svg'
import todo from './To-do.svg'

import user1 from './user1.jpg'
import user2 from './user2.jpeg'
import user3 from './user3.jpeg'
import user4 from './user4.jpeg'
import user5 from './user5.jpeg'

export const imagePaths = {
    priority: {
      4: urgentpriority,
      3: highpriority,
      2: mediumpriority,
      1: lowpriority,
      0: nopriority
    },
    status: {
     "In progress" : inprogress,
     "Backlog" : backlog,
     "Todo" : todo, 
     "Done" : done,
     "Cancelled" : cancelled
    },

    userimage : {
     "usr-1" : user1,
     "usr-2" : user2,
     "usr-3" : user3,
     "usr-4" : user4,
     "usr-5" : user5,
    }
  };
