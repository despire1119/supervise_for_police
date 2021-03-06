const iconMap = {
  angleDown: require('@/assets/images/angledown@2x.png'),
  date: require('@/assets/images/riqiiconx@2x.png')
}
export default {
  number: {
    type: 'number',
    icon: ''
  },
  id_number: {
    type: 'id_number',
    icon: ''
  },
  oneLine: {
    type: 'text',
    icon: ''
  },
  select: {
    type: 'selector',
    icon: iconMap.angleDown
  },
  date: {
    type: 'date',
    icon: iconMap.date
  },
  textarea: {
    type: 'textarea',
    icon: ''
  }
}
