export const createBookingMessage = (
    name: string,
    phone: string,
    service: string,
    date: string,
) => {
    return `
    Hello, I'd like to schedule an appointment.

    Name: ${name}
    Phone: ${phone}
    Service: ${service}
    Date: ${date}
  `
}
