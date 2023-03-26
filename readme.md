# Simple microservice with TCP transport

- ticket service (http and microservice hybrid app)

  - send a post request to http://localhost:4001/ticket
  - it will send a message to payment service with a payload

  ```
    // this will send ticketObj and get back some data from payment service
    return lastValueFrom(this.paymentClient.send('doPayment', ticketObj))
  ```

- payment service (only micro service)
  - recieve a message from ticket service with @MessagePattern('doPayment')
  - after reciving the message it will emit an event to ticket service as a {success:true}
  ```
     this.ticketClient.emit('payment_sucess', { success: true });
  ```
  - and finally return `{ status: true };` form doPayment message pattern funcation.

# video reference
https://www.youtube.com/watch?v=C250DCwS81Q&list=PLx-OQRQE9_mY_xqT5h3SNbkErDjxSj6Zb&index=8&ab_channel=MichaelGuay
