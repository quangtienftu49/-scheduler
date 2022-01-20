const matchIds = (appointments, ids) => {
  const matched = ids.map(id => appointments[id]);
  return matched;
}

export default function getAppointmentsForDay(state, day) {
  let appointmentArr = [];

  state.days.map(dayObj => {
    if (dayObj.name === day) {
      dayObj.appointments.forEach(apptId => appointmentArr.push(apptId))
    }
  })

  return matchIds(state.appointments, appointmentArr);
}